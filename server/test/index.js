/* 
  生成sql文件
*/

const fs = require('fs')

// 生成swiperlist.sql
!(function () {
  const swiperList = require('./data/swiperList.json')
  let res = ''
  // 创建表sql语句
  res += 'drop table if exists swiperlist;\nCREATE TABLE `swiperlist` (`id` int NOT NULL AUTO_INCREMENT,`imgUrl` varchar(255) COLLATE utf8_bin DEFAULT NULL,PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n'
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
  // 创建表sql语句
  res += 'drop table if exists newsTitleList;\nCREATE TABLE `newstitlelist` (`id` int NOT NULL AUTO_INCREMENT,`title` varchar(255) COLLATE utf8_bin DEFAULT NULL,`type` int NOT NULL,PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n'
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
  // 创建表sql语句
  res1 += 'drop table if exists newslistitems;\nCREATE TABLE `newslistitems` (`id` int NOT NULL AUTO_INCREMENT,`type` int NOT NULL,`showType` int NOT NULL,`avatar` varchar(255) COLLATE utf8_bin DEFAULT NULL,`author` varchar(255) COLLATE utf8_bin DEFAULT NULL,`title` varchar(255) COLLATE utf8_bin DEFAULT NULL,`publishTime` varchar(255) COLLATE utf8_bin DEFAULT NULL,`img` varchar(255) COLLATE utf8_bin DEFAULT NULL,`link` varchar(255) COLLATE utf8_bin DEFAULT NULL,`date` varchar(255) COLLATE utf8_bin DEFAULT NULL,`week` varchar(255) COLLATE utf8_bin DEFAULT NULL,`moreBtnLink` varchar(255) COLLATE utf8_bin DEFAULT NULL,PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n'
  res2 += 'drop table if exists moringpaper;\nCREATE TABLE `moringpaper` (`id` int NOT NULL AUTO_INCREMENT,`parentId` int NOT NULL,`content` varchar(255) COLLATE utf8_bin DEFAULT NULL,`link` varchar(255) COLLATE utf8_bin DEFAULT NULL,PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\n'
  let id = 1
  for (const item1 of newsList) {
    let id2 = 1
    const type = item1.type
    for (const item2 of item1.list) {
      const { showType, avatar, author, title, publishTime, img, link, date, week, moreBtnLink } = item2
      if (showType === 0) {
        res1 += `insert into newslistitems(id, type, showType, avatar, author, title, publishtime, img, link) values('${id}', '${type}', '${showType}', '${avatar}', '${author}', '${title}', '${publishTime}', '${img}', '${link}');\n`
      }
      if (showType === 1) {
        res1 += `insert into newslistitems(id, type, showType, date, week, moreBtnLink) values('${id}', '${type}', '${showType}', '${date}', '${week}', '${moreBtnLink}');\n`
        for (const item3 of item2.items) {
          const { content, link } = item3
          res2 += `insert into moringpaper(id, parentId, content, link) values('${id2}', '${id}', '${content}', '${link}');\n`
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
