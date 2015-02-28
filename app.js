var express = require('express'),
    app = express();
	path = require('path');
	app.engine('html', require('ejs').renderFile);
	//app.use(express.static(path.join(__dir,'public')));
	app.get('/',function(req,res){
	   res.render('./index.html');
	});
	
	app.listen(80,'127.0.0.1');