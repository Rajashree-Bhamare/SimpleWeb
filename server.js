var exp=require('express');

var bp= require('body-parser');

var server=exp();

server.get('/getForm',function(req,res){res.sendFile(__dirname+"/form.html")})

server.use(bp.urlencoded({extended:false}))

server.post('/getDataTable',function(req,res){

    res.write("<table border=1>");
			 res.write("<tr>");
		         res.write("<td>"+req.body.name+"</td>");
		         res.write("<td>"+req.body.Birthdate+"</td>");
		         res.write("<td>"+req.body.email+"</td>");
		         res.write("<td>"+req.body.Qualification+"</td>");
			 res.write("</tr>");
		     res.write("</table>");		
		     res.end();
    });


server.listen(9000,function(){console.log("Server started");});   
    
