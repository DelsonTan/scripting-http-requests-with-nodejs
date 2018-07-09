var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {

  // TODO: https://web.compass.lighthouselabs.ca/days/w02d1/activities/517

}

getHTML.getHTML(requestOptions, print1337);