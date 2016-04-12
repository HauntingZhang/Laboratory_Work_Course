var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var JobSchema=new Schema({
  field:{type:Schema.Types.ObjectId, ref:'Category'},
  type: String,
  title:String,
  phrase:String,
  description:String,
  address:String,
  company:String,
  startDate:String,
  endDate:String
});

module.exports=mongoose.model('Job',JobSchema);
