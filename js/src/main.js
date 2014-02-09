requirejs.config({
  baseUrl : 'js/src/', urlArgs : "bust=" + (new Date()).getTime()
});

//require(['example'],function (example) {

//  "use strict";

//  console.log(example);

//});

define(function (require) {
  "use strict";

  var example = require('example');

  console.log(example());

});
