




const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let criteres = new Schema({

   
   hotel_id: {
    type: String
   },
   critere: {
      type: String
   },
   valeur: {
      type: String
   },
   description: {
    type: String
 }
 ,
 avatar: {
   type: String,
 },




}, {
   collection: 'criteres'
})
module.exports = mongoose.model('criteres', criteres)