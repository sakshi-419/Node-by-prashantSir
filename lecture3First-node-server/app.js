
const http = require('http')

// function requestListner(req,res){
//     console.log(req);
    
// }
// http.createServer(requestListner);// old way 

const server = http.createServer(function(req,res){
  console.log(req);
  
}); // new way to crete server

const port = 3001;

server.listen(port, ()=>{
  console.log(`server running on address http://localhost:${port}`);
  
})

