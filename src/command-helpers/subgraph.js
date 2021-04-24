const validateSubgraphName = (name, { allowSimpleName }) => {
  if (allowSimpleName) {
    return name
  } else {
    if (name.split('/').length !== 2) {
      throw new Error(`Subgraph name "${name}" needs to have the format "<PREFIX>/${name}".

When using the Hosted Service at https://www.hg.network, <PREFIX> is the
name of your GitHub user or organization.

You can bypass this check with --allow-simple-name.`)
    }
  }
}

const getSubgraphBasename = name => {
  let segments = name.split('/', 2)
  return segments[segments.length - 1]
}

module.exports = {
  validateSubgraphName,
  getSubgraphBasename,
}
