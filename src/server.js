import path from 'path'
import Express from 'express'
const app = new Express()

const port = process.env.PORT || 3000

app.use(Express.static(path.join(__dirname, './public')))

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
