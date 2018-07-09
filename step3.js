var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function(response) {

    var body = '';

    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      body += chunk;

    })

    response.on('end', function () {
      console.log(body);
      console.log('Response stream complete');
    })
  })
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getAndPrintHTML(requestOptions);