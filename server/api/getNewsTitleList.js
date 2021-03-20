const newsTitleList = require('../data/newsTitleList.json')

module.exports = (req, res) => {
  req.method === 'GET' && res.end(JSON.stringify(newsTitleList))
}