

// Import the 'http' module
const http = require('http');
const os = require('os');


const hostname = '127.0.0.1';

// var figlet = require("figlet");
// figlet("Hello!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// Create the server using the 'http.createServer()' method

const server = http.createServer((req, res) => {
  // Check the HTTP request method of the incoming request
  if (req.method === 'GET') {
    // For GET requests
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to the homepage!');
    } else if (req.url === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('About us: We are a dedicated Node.js enthusiasts group.');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      // console.log(os.cpus(),'--', os.arch(),'--', os.networkInterfaces())
      // console.log(os.totalmem(),' andddd free mem',os.freemem());
      res.end('Page not found.');
    }
  } else if (req.method === 'POST') {
    // For POST requests (handle the logic here)
    // we will discuss about POST requests in upcoming tutorials, 
    //for now just undertsand how API requests and responses handles in pure NODE.JS

  } else if (req.method === 'PUT') {
    // For PUT requests (handle the logic here)

    // we will discuss about PUT requests in upcoming tutorials, 
    //for now just undertsand how API requests and responses handles in pure NODE.JS
  
} else if (req.method === 'DELETE') {
    // For DELETE requests (handle the logic here)

    // we will discuss about DELETE requests in upcoming tutorials, 
    //for now just undertsand how API requests and responses handles in pure NODE.JS
  }
});


const PORT = 3002;
server.listen(PORT,hostname, () => {
  console.log(`Server is running on port ${PORT}`);
});

//-------------------------------------------------------------------------------------
// // Import the 'http' module
// const http = require('http');
// const length = require('os').cpus().length;
// // Create the server using the 'http.createServer()' method
// const server = http.createServer((req, res) => {
//   // Check the URL of the incoming request
//   if (req.url === '/') {
//     // If the URL is '/', set the response header and send the message
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Welcome to the homepage!');
//   } else if (req.url === '/about') {
//     // If the URL is '/about', set the response header and send the message
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('About us: We are a group of passionate Node.js enthusiasts.');
//   } else {
//     // For any other URL, set a 404 response header and send a 'Page not found.' message
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Page not found.');
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
//   console.log('cpus length', length)
// });

//-------------------------------------------------------------------------------------

// // server.js
// // Import the 'http' module
// const http = require('http');
// // Create the server using the 'http.createServer()' method
// const server = http.createServer((req, res) => {
//   // The server's response configuration starts here
//   // Set the response header with a status code of 200 (OK)
//   // and a content type of 'text/plain'
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   // Send the response body with the text 'Hello, Node.js Server!'
//   res.end('Hello, Node.js Server!');
//   // The server's response configuration ends here
// });
// // Define the port number the server will listen on
// const PORT = 3000;
// // Start the server and listen on the specified port
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

//-------------------------------------------------------------------------------------
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// }); 