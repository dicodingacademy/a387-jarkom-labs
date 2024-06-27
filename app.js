'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
/*
[ROUTE] '/'
[Response] => Hello world!
 */
app.get('/', (req, res) => {
    res.send('Hello world!\n')
})

/*
Optional [ROUTE] '/me'
[Response] => Dicoding username.
*/

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)