/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express')

const port = parseInt(process.env.PORT, 10) || 8000

const server = express()

server.use(express.static('out'))

server.listen(port, err => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})
