const express = require('express');
const app = express();
const criteresRoute = express.Router();
// criteres model
let criteres = require('../models/criteres');
// Add criteres
//------------------------------------------------------------------------------
const checkAuth = require("../middlewares/check-auth");
//------------------------------------------------------------------------------

criteresRoute.route('/create').post((req, res, next) => {
  criteres.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All criteress
criteresRoute.route('/').get((req, res) => {
  criteres.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single criteres
criteresRoute.route('/read/:id').get((req, res) => {
  criteres.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update criteres
criteresRoute.route('/update/:id').put((req, res, next) => {
  criteres.findByIdAndUpdate(req.params.id, {
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
// Delete criteres
criteresRoute.route('/delete/:id').delete((req, res, next) => {
  criteres.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = criteresRoute;