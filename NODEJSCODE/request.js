const http=require("http");
http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"text/html"})
    resp.write(`<h1>welcome mern</h1>`);
    resp.end();
})
.listen(5800);