const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

http.ServerResponse.prototype.json = function ({ code, msg, data }) {
  const responseData = { code, msg, data }
  this.end(JSON.stringify(responseData))
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json;charset=utf8')
  const pathName = url.parse(req.url).pathname
  const apiFilePath = path.join(__dirname, `api${pathName}.js`)
  fs.exists(apiFilePath, isExists => {
    isExists && require(apiFilePath)(req, res)
  })
})

server.listen(3000, () => {
  console.log('running');
})