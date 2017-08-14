
const express = require('express')
const app = express()
var path = require('path');

app.use(express.static('public'))
app.use('/static', express.static('public'))


app.use('/*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/public', 'frontapp.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
