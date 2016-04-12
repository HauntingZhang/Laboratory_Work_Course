var router= require('express').Router();
var Job = require('../models/job');

router.get('/',function(req,res){
	res.render('main/index');
});
router.get('/about',function(req,res){
	res.render('main/About');
});

router.get('/jobs/:id',function(req,res,next){
	Job
	.find({field:req.params.id})
	.populate('field')
	.exec(function(err,jobs){
		if(err) return next(err);
		res.render('main/findjob',{jobs:jobs});
	});
});

router.get('/job/:id',function(req,res,next){
	Job.findById({_id:req.params.id},function(err,job){
		if(err) return next(err);
		res.render('main/job',{
			job:job
		});
	});
});





router.get('/')

module.exports=router;
