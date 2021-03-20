const url = require('url')
const newsList = require('../data/newsList.json')

module.exports = (req, res) => {
  if (req.method !== 'GET') return
  const query = url.parse(req.url, true).query
  const type = +query.type
  let data = []
  const result = newsList.find(item => item.type === type)
  if (result) {
    data = result.list
  }
  res.end(JSON.stringify(data))
}