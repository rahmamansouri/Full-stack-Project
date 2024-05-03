const express = require('express');
const app = express();
const usersRoute = express.Router();
// users model



let users = require('../models/users');



const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

///////////////////////////////


usersRoute.route('/login').post((req, res, next) => {
  let fetchedUser;
  users.findOne({email:req.body.email}).then(user=>{
    if(!user){
      return res.status(401).json({
        message: "Auth failed no such admin (email ne existe pas verifier.......)  "
      })
    }
    fetchedUser=user;
    ss = user.password
    sss =String(req.body.password)
    ssso = req.body.email
    console.log('----------------------------------------')
    console.log(sss.String)
    console.log('----------------------------------------')
    return (req.body.password == user.password);

   // return bcrypt.compare(req.body.password, user.password);

  }).then(result=>{
    console.log(fetchedUser)



    if(!result){
      return res.status(401).json({
        message: "Auth failed inccorect password"
      })
    }

    console.log(fetchedUser)
    const token = jwt.sign(
      { email: fetchedUser.email, userId: fetchedUser._id, roleId: fetchedUser.role },
      "secret_this_should_be_longer",
      { expiresIn: "1h" }
    );
    res.status(200).json({
      token: token,
      expiresIn: 3600,
      userId: fetchedUser._id,
      roleId: fetchedUser.role
    });
  })
  .catch(e=>{
   
    console.log(e)
  
  })
})




usersRoute.post("/signup", (req, res, next) => {
bcrypt.hash(req.body.password, 10).then(hash => {
  const user = new User({
    email: req.body.email,
    password: hash
  });

  User.findOne({email:req.body.email}).then(user1=>{
    if(user1){
      return res.status(401).json({
        message: "User Already Exist"
      })
    }

    user.save().then(result => {
      if(!result){
        return res.status(500).json({
          message: "Error Creating USer"
        })
      }
      res.status(201).json({
        message: "User created!",
        result: result
      });
  })
    })   
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });;
})

});



























///////////////////////////////
// Add users
usersRoute.route('/create').post((req, res, next) => {
  users.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All userss
usersRoute.route('/').get((req, res) => {
  users.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single users
usersRoute.route('/read/:id').get((req, res) => {
  users.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update users
usersRoute.route('/update/:id').put((req, res, next) => {
  users.findByIdAndUpdate(req.params.id, {
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
// Delete users
usersRoute.route('/delete/:id').delete((req, res, next) => {
  users.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = usersRoute;