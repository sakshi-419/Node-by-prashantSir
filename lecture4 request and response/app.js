
const http = require('http')

// function requestListner(req,res){
//     console.log(req);
    
// }
// http.createServer(requestListner);// old way 

const server = http.createServer(function(req,res){
  console.log(req.url, req.method,req.headers);
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

