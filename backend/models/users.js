




const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let users = new Schema({


   name: {
    type: String
 },
 email: {
    type: String
 },
   password: {
      type: String
   },


   role: {
    type: String
 },
 profileAnciennete: {
  type: String
},
profileGamme: {
  type: String
},
profileFrequence: {
  type: String
},
profileFamille: {
  type: String
},
profilePeriode: {
  type: String
},
profileFidelite: {
  type: String
},
tel: {
  type: String
}



}, {
   collection: 'users'
})
module.exports = mongoose.model('users', users)