var router= require('express').Router();
var User =require ('../models/user');
var Job = require('../models/job');

Job.createMapping(function(err,mapping){
	if(err){
		console.log('error creatingMapping');
		console.log(err);
	} else {
		console.log('Mapping created');
		console.log(mapping);
	}
});

var stream =Job.synchronize();
var count=0;
stream.on('data',function(){
	count++;
});

stream.on('close',function(){
	console.log("Indexed "+count+" documents");
});

stream.on('error',function(err){
	console.log(err);
});

router.get('/',function(req,res){
	res.render('main/index');
});
router.get('/about',function(req,res){
	res.render('main/About');
});

router.post('/search',function(req,res,next){
	res.redirect('/search?q='+req.body.q);
});

router.get('/search',function(req,res,next){
	if(req.query.q){
		Job.search({
			query_string:{query:req.query.q}
		},function(err,results){
			if(err) return next(err);
			var data=results.hits.hits.map(function(hit){
				return hit;
			});
			res.render('main/search-result',{
				query:req.query.q,
				data:data
			});
		});
	}
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
