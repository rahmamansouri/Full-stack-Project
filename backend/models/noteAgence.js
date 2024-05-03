




const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let noteAgences = new Schema({
   agence_id: {
    type: String
   },
   note: {
      type: String
   },
   datenote: {
      type: String
   },
      commentaire: {
      type: String
   }

 


}, {
   collection: 'noteAgences'
})
module.exports = mongoose.model('noteAgences', noteAgences)