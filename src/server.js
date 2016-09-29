const path = require('path')
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use(
  '/gillchristian/gh-pages-lister/',
  express.static(path.resolve(__dirname, '../build'))
)

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'))
})

app.listen(port, error => {
  /* eslint-disable no-console */
  if (error) {
    console.error(error)
  } else {
    console.info(`
      🌎 Listening on port ${port}.
      Open up http://localhost:${port}/ in your browser.`
    )
  }
  /* eslint-enable no-console */
})
