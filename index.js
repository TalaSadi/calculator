
const http=require('http');

const server =http.createServer(function(req,res){
console.log(req.url, req.method, req.headers);

res.setHeader('content_Type' ,'text/html');
res.write('<html>');
res.write(<head><title> My first page </title> </head>);
res.write(<body><h1> My first page </h1> </body>);
res.write('</html>');
res.end();
//process.exit();
});

server.listen(3000); // to listen for the encoming requests  // (port)


