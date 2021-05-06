// package.json
const urlMap = {
    "heco":{
      "node": "https://deploy.hg.network",
      "ipfs": "https://f.hg.network",
      "deployUrl": "https://deploy.hg.network",
      "apiUrl": "https://api.hecoinfo.com",
      "explorer": "https://hecoinfo.com"
    },
    "hsc":{
      "node": "https://hdeploy.hg.network",
      "ipfs": "https://f.hg.network",
      "deployUrl": "https://hdeploy.hg.network",
      "apiUrl": "https://api.hscscan.com",
      "explorer": "https://hscscan.com"
    },
    "bsc":{
      "node": "https://pdeploy.hg.network",
      "ipfs": "https://f.hg.network",
      "deployUrl": "https://pdeploy.hg.network",
      "apiUrl": "https://api.bscscan.com",
      "explorer": "https://bscscan.com"
    },
    "other":{
      "node": "https://api.thegraph.com/deploy/",
      "ipfs": "https://api.thegraph.com/ipfs/",
      "deployUrl": "https://api.thegraph.com/deploy/",
      "apiUrl": "https://api.etherscan.io",
      "explorer": "https://etherscan.io"
    }
}

module.exports = {
    urlMap,
}