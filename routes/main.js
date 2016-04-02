var router= require('express').Router();


router.get('/',function(req,res){
	res.render('main/index');
});

router.get('/about',function(req,res){
	res.render('main/About');
});

module.exports=router;