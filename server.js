var express = require('express')
var fallback = require('express-history-api-fallback')

const app = express()
const root = `${__dirname}/build`

app.set('port', (process.env.PORT || 3000))
app.use(express.static(root))
app.use(fallback('200.html', { root }))

app.listen(app.get('port'), () => (
  console.log('Running on port', app.get('port'))
))
