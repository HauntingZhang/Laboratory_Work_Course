var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var JobSchema=new Schema({
  title: String,
  field: String,
  type: String,
  company:String,
  startDate:String,
  endDate:String,
  email: String,
  desired_skills: [String],
  description:String
});

module.exports=mongoose.model('Job',JobSchema);
