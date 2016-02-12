var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.redirect('index.html');
  console.log('Serving index.html');
});

app.listen(3000);
console.log('Server running on port 3000');


// var http = require('http');
// var fs = require('fs');
//
// http.createServer(function(request, response){
//   var url = request.url;
//   switch(url){
//     case '/':
//       getStaticFileContent(response, 'public/index.html', 'text/html');
//       break;
//   }
// }).listen(3000);
// console.log('Server running...');
//
// function getStaticFileContent(response, filePath, contentType){
//   fs.readFile(filePath, function(error, data){
//     if(error){
//       response.writeHead(500, {'Content-Type':'text/plain'});
//       response.end('500 - internal server error');
//     }
//     if(data){
//       response.writeHead(200, {'Content-Type':'text/html'});
//       response.end(data);
//     }
//   });
// };
