var mongoose = require('mongoose');
var mongoosastic = require('mongoosastic');
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

JobSchema.plugin(mongoosastic,{
  hosts:[
    'localhost:9200'
  ]
});
module.exports=mongoose.model('Job',JobSchema);
