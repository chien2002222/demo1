var express = require('express')
var router = express.Router()

//set trang chủ (homepage)
router.get('/', (req, res) => {
  //render ra trang index.hbs ở trong thư mục views
  res.render('index')
})

router.get('/about', (req, res) => {
  res.render('about')
})
router.get('/quote', (req, res) => {
  var text = "<h1 style='color: red;'>Practice makes perfect</h1>"
  res.send(text)
})

router.get('/api', (req, res) => {
  var data = {
    name: 'Doan Van Chien',
    age  : 22,
    address: 'Ha Noi'
  }
  res.json(data)
})

module.exports = router
