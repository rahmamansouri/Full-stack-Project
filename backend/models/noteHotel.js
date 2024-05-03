
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let noteHotels = new Schema({
   hotel_id: {
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
   collection: 'noteHotels'
})
module.exports = mongoose.model('noteHotels', noteHotels)