const url = require('url')
const db = require('../db')

module.exports = async (req, res) => {
  if (req.method !== 'GET') return
  const query = url.parse(req.url, true).query
  const type = +query.type
  const field = {
    newslistitems: ['id', 'type', 'showType', 'avatar', 'author', 'title', 'publishTime', 'img', 'link', 'date', 'week', 'moreBtnLink'],
    moringpaper: ['parentId', 'content']
  }
  const condition = `on newslistitems.id = moringpaper.parentId where newslistitems.type=${type}`
  let resField = ''
  for (const key of Object.keys(field)) {
    for (const item of field[key]) {
      resField += `${key}.${item}, `
    }
  }
  const sql = `select ${resField} moringpaper.link slink from newslistitems left join moringpaper ${condition}`
  try {
    const queryRes = await db.base(sql)
    let resArr = []
    for (const item of queryRes) {
      if (item.parentId === null) {
        resArr.push(item)
      } else {
        const { content } = item
        const r = resArr.find(item2 => item.id === item2.id)
        if (r) {
          r.items.push({ content, link: item.slink })
        } else {
          item.items = [{ content, link: item.slink }]
          resArr.push(item)
        }
      }
      delete item.content
      delete item.parentId
      delete item.slink
    }
    res.json({
      code: '2000',
      msg: '请求成功',
      data: resArr
    })
  } catch (err) {
    res.json({
      code: '400',
      msg: '未知错误',
      data: null
    })
  }
}