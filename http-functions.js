var body = '';

function printHTML (html) {
  console.log(html);
}

module.exports = {
  getHTML: function (options, callback) {

    var https = require('https');

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
}