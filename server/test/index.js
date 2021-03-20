/* 
  生成sql文件
*/

const fs = require('fs')

// 生成swiperlist.sql
!(function () {
  const swiperList = require('./data/swiperList.json')
  let res = ''
  for (const item of swiperList) {
    const { id, imgUrl } = item
    res += `insert into swiperlist values('${id}', '${imgUrl}');\n`
  }
  fs.writeFile('swiperlist.sql', res, 'utf8', err => {
    if (err) {
      console.log(err);
    }
    console.log('生成swiperlist.sql文件');
  })
})()

// 生成newstitlelist.sql
!(function () {
  const newsTitleList = require('./data/newsTitleList.json')
  let res = ''
  for (const item of newsTitleList) {
    const { id, title, type } = item
    res += `insert into newstitlelist values('${id}', '${title}', '${type}');\n`
  }
  fs.writeFile('newstitlelist.sql', res, 'utf8', err => {
    if (err) {
      console.log(err);
    }
    console.log('生成newstitlelist.sql文件');
  })
})()

// 生成newslistitems.sql、moringpaper.sql
!(function () {
  const newsList = require('./data/newsList.json')

  let res1 = ''
  let res2 = ''
  let id = 1
  for (const item1 of newsList) {
    const parentId = item1.id
    let id2 = 1
    for (const item2 of item1.list) {
      const { showType, avatar, author, title, publishTime, img, link, date, week } = item2
      if (showType === 0) {
        res1 += `insert into newslistitems(id, parentid, showtype, avatar, author, title, publishtime, img, link) values('${id}', '${parentId}', '${showType}', '${avatar}', '${author}', '${title}', '${publishTime}', '${img}', '${link}');\n`
      }
      if (showType === 1) {
        res1 += `insert into newslistitems(id, parentid, showtype, date, week) values('${id}', '${parentId}', '${showType}', '${date}', '${week}');\n`
        for (const item3 of item2.items) {
          const { content, link } = item3
          res2 += `insert into moringpaper(id, parentid, content, link) values('${id2}', '${id}', '${content}', '${link}');\n`
          id2++
        }
      }
      id++
    }
  }

  fs.writeFile('newslistitems.sql', res1, 'utf8', err => {
    if (err) {
      console.log(err);
    }
    console.log('生成newslistitems.sql文件');
  })

  fs.writeFile('moringpaper.sql', res2, 'utf8', err => {
    if (err) {
      console.log(err);
    }
    console.log('生成moringpaper.sql文件');
  })
})()