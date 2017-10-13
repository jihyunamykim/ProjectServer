var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Project' });
});

/**********/
/* LOGIN  */
/**********/

//1.ID Login
router.post('/user/login', function(req,res){
	var customername = req.body.customername;
	var password = req.body.password;
	res.send(JSON.stringify({customername:customername,password:password}));
});

//2.ID ADD
router.post('/user', function(req,res){
	var customername = req.body.customername;
	var password = req.body.password;
	res.send(JSON.stringify({customername:customername,password:password}));
});

//3.ID Search
router.get('/user',function(req,res){
	var customerid = req.query.customerid;
    res.send(JSON.stringify({customerid:customerid}));
});

//4.ID Edit
router.put('/user',function(req,res){
	var customerid = req.query.customerid;	
	var customername = req.body.customername;
	var password = req.body.password;
	res.send(JSON.stringify({customerid:customerid,customername:customername,password:password}));
});

//5.ID Delete
router.delete('/user',function(req,res){
	var customerid = req.query.customerid;
    res.send(JSON.stringify({customerid:customerid}));
});

//6.All ID Search
router.get('/user/list',function(req,res){
    res.send(JSON.stringify([]));
});


/*********/
/* Group */
/*********/

//1.Group ADD
router.post('/group', function(req,res){
	var groupname = req.body.groupname;
	var groupid = req.body.groupid;
	res.send(JSON.stringify({groupname:groupname,groupid:groupid}));
});

//2.Group Edit
router.put('/group',function(req,res){
	var groupid = req.query.groupid;	
	var groupname = req.body.groupname;
	var password = req.body.password;
	res.send(JSON.stringify({customerid:customerid,customername:customername,password:password}));
});

//5.ID Delete
router.delete('/group',function(req,res){
	var customerid = req.query.customerid;
    res.send(JSON.stringify({customerid:customerid}));
});







module.exports = router;
