const express = require('express');
const app = express();
const reservationsRoute = express.Router();
// reservations model
let reservations = require('../models/reservations');
// Add reservations
//------------------------------------------------------------------------------
const checkAuth = require("../middlewares/check-auth");
//------------------------------------------------------------------------------

reservationsRoute.route('/create').post((req, res, next) => {
  reservations.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All reservationss
reservationsRoute.route('/').get((req, res) => {
  reservations.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single reservations
reservationsRoute.route('/read/:id').get((req, res) => {
  reservations.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update reservations
reservationsRoute.route('/update/:id').put((req, res, next) => {
  reservations.findByIdAndUpdate(req.params.id, {
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
// Delete reservations
reservationsRoute.route('/delete/:id').delete((req, res, next) => {
  reservations.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = reservationsRoute;