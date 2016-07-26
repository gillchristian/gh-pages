import path from 'path'
import express from 'express'
const app = express()

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, './public')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
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