const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const fsExistsAsync = promisify(fs.exists)

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json;charset=utf8')
  let pathName = url.parse(req.url).pathname
  const apiFilePath = path.join(__dirname, `api${pathName}.js`)
  let isExists = await fsExistsAsync(apiFilePath)
  if (isExists) {
    require(apiFilePath)(req, res)
    return
  }
  if (pathName === '/') {
    pathName = '/index.html'
  }
  pathName = path.join(__dirname, './public/dist' + pathName)
  isExists = await fsExistsAsync(pathName)
  if (isExists) {
    fs.readFile(pathName, 'utf8', function(err, data) {
      if (err) {
        console.error(err)
        res.statusCode = 404
        res.end()
        return
      }
      const ext = pathName.slice(pathName.lastIndexOf('.') + 1)
      switch (ext) {
        case 'html':
          res.setHeader('Content-Type', 'text/html;charset=uft-8')
          break
        case 'css':
          res.setHeader('Content-Type', 'text/css')
          break
        case 'js':
          res.setHeader('Content-Type', 'text/javascript')
          break
      }
      res.write(data.toString())
      res.end()
    })
    return
  }
})

server.listen(3003, () => {
  console.log('running')
})
