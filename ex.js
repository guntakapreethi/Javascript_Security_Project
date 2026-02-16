var express =require("express");
var app =express();
app.get('/', function(req,resp){
    resp.send("Hello from API");
});
app.get('/square/:n',function(req,resp){
    var  n =req.params.n;
    resp.send(`square of${n} is: ${n*n}`);
});
app.get('/addition/:a/:b',function(req,resp){
    var a =Number(req.params.a);
    var b =Number(req.params.b);
    var c =a+b;
    resp.send(`Add of ${a} and ${b} is:  ${c}`);
});
app.get('/multiplication/:a/:b',function(req,resp){
    var a =Number(req.params.a);
    var b =Number(req.params.b);
    var c =a*b;
    resp.send(`mul of ${a} and ${b} is:  ${c}`);
});

app.listen(2000, ()=>console.log("API Started listening..."));