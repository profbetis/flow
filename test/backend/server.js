var http = require('http');

// We need a function which handles requests and send response
function handleRequest(request, response){
  response.end('Path Hit: ' + request.url);
}

function backend(port) {
  var server = http.createServer(handleRequest);

  // start our server
  server.listen(port, function(){
    console.log("Mock service listening on http://localhost:%s", port);
  });
}

module.exports = {
  backend: backend
}
