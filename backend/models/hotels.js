




const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let hotels = new Schema({

   
   name: {
      type: String
   },
   

      adresse: {
      type: String
   },

      tel: {
      type: String
   },


      email: {
      type: String
   },
   nbetoile: {
      type: String
   },



   promotion: {
      type: String
   }

}, {
   collection: 'hotels'
})
module.exports = mongoose.model('hotels', hotels)