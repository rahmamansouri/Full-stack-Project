const express = require('express');
const app = express();
const noteAgencesRoute = express.Router();
// noteAgences model
let noteAgences = require('../models/noteAgence');
// Add noteAgences
//------------------------------------------------------------------------------
const checkAuth = require("../middlewares/check-auth");
//------------------------------------------------------------------------------

noteAgencesRoute.route('/create').post((req, res, next) => {
  noteAgences.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All noteAgencess
noteAgencesRoute.route('/').get((req, res) => {
  noteAgences.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single noteAgences
noteAgencesRoute.route('/read/:id').get((req, res) => {
  noteAgences.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update noteAgences
noteAgencesRoute.route('/update/:id').put((req, res, next) => {
  noteAgences.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})
// Delete noteAgences
noteAgencesRoute.route('/delete/:id').delete((req, res, next) => {
  noteAgences.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = noteAgencesRoute;