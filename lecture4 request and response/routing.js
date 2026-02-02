

const http = require('http')

const server = http.createServer(function(req,res){
  console.log(req.url, req.method,req.headers);

if(req.url === '/'){
  res.setHeader('Content-Type','text/html')
  res.write('<html>')
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Welcome to home</h1></body>');
  res.write('<html>');
    return res.end();

}else if(req.url === '/products'){
   res.setHeader('Content-Type','text/html')
  res.write('<html>')
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Checkout Our Products</h1></body>');
  res.write('<html>');
    return res.end();


}

 res.setHeader('Content-Type','text/html')
  res.write('<html>')
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Work Hard</h1></body>');
  res.write('<html>');
  res.end();


}); // new way to crete server

const port = 3001;

server.listen(port, ()=>{
  console.log(`server running on address http://localhost:${port}`);
  
})

