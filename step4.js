var https = require('https');

var body = '';

function getHTML (options, callback) {

  https.get(options, function(response) {

    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      body += chunk;

    })

    response.on('end', function () {
      callback(body);
      console.log('Response stream complete');
    })
  })
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getHTML(requestOptions, printHTML);
