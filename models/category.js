var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  field: { type: String, unique: true, lowercase: true}
});

module.exports = mongoose.model('Category', CategorySchema);
