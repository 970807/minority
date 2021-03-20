const swiperList = require('../data/swiperList.json')

module.exports = (req, res) => {
  req.method === 'GET' && res.end(JSON.stringify(swiperList))
}