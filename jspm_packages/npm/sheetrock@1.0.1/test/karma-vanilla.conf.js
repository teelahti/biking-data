/* */ 
'use strict';
var sharedConfig = require('./karma-shared.conf');
module.exports = function(config) {
  sharedConfig(config);
  config.set({files: ['../src/sheetrock.js', 'data/**/*.js', 'spec/common/**/*-spec.js', 'spec/browser/**/*-spec.js']});
};
