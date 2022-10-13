const express = require('express')
const StudentModel = require('../models/StudentModel')
const router = express.Router()

//URL: localhost:3000/student
router.get('/', (req, res) => {
  StudentModel.find((err, data) => {
    if (!err) {
      //res.send(data)
      //render ra trang index ở thư mục views/student
      res.render('student/index', { students: data })
    }
  })
})
router.get("/add", (req, res) => {
  res.render("student/add");
});

router.post("/add", (req, res) => {
  var mobile = new StudentModel(req.body);
  mobile.save((err) => {
    if (!err) {
      console.log("Add student succeed !");
      res.redirect("/student");
    }
  });
});

module.exports = router
