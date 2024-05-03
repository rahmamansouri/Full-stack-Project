const express = require('express');
const app = express();
const chambresRoute = express.Router();
// chambres model
let chambres = require('../models/chambres');
// Add chambres
//------------------------------------------------------------------------------
const checkAuth = require("../middlewares/check-auth");
//------------------------------------------------------------------------------

chambresRoute.route('/create').post((req, res, next) => {
  chambres.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All chambress
chambresRoute.route('/').get((req, res) => {
  chambres.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single chambres
chambresRoute.route('/read/:id').get((req, res) => {
  chambres.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update chambres
chambresRoute.route('/update/:id').put((req, res, next) => {
  chambres.findByIdAndUpdate(req.params.id, {
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
// Delete chambres
chambresRoute.route('/delete/:id').delete((req, res, next) => {
  chambres.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = chambresRoute;