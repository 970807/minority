const newsTitleList = require('../data/newsTitleList.json')

module.exports = (req, res) => {
  if (req.method !== 'GET') return
  res.json({
    code: '2000',
    msg: '请求成功',
    data: newsTitleList
  })
}