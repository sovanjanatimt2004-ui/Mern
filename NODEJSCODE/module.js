const http=require("http");
http.createServer((req,resp)=>{
    if(req.url=="/"){
        resp.write("Homepage");
    }
     else if(req.url=="/login"){
        resp.write("loginpage");
     }
     else{
        resp.write("otherpage");
     }
     resp.end();
})
.listen(4800);