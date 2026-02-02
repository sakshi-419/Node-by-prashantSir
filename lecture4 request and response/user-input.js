const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.write('<h1>Welcome to Home page</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" id="name" name="name" placeholder="Enter Your Name"><br><br>');

    res.write('<label for="gender">Gender:</label>');

    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');

    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');

    res.write('<button type="submit">Submit</button>');
    res.write('</form>');

    return res.end();
  }

  // Handle form submission route
  if (req.url === '/submit-details' && req.method === 'POST') {
    res.write('<h1>Form Submitted Successfully</h1>');
    return res.end();
  }

  // If route not found
  res.write('<h1>404 Page Not Found</h1>');
  res.end();
});

const port = 3001;

server.listen(port, ()=>{
  console.log(`server running on address http://localhost:${port}`);
  
  });