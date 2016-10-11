"use strict";

console.log('BLABLABLA STARTING PRORACTOR!')

exports.config = {
  specs: ['*_spec.js'],
  directConnect: true,
  framework: 'jasmine2',
  capabilities: {
    'browserName': 'chrome'
  },
  useAllAngular2AppRoots: true,

  onPrepare: function () {

    beforeEach(function () {
        browser.get('https://soundcloud-ngrx.herokuapp.com/');
    });

    afterEach(function () {
        browser.manage().deleteAllCookies();
        browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
        .then(undefined,
        function (err) {
            // Errors will be thrown when browser is on default data URL.
            // Session and Local storage is disabled for data URLs
        });
    });

    let JasmineReporter = require('jasmine2-reporter').Jasmine2Reporter

    let options = {
      pendingSpec: false,
      symbols: {
        pending: '*  '.strikethrough, //strikethrough is a colors module feature
      }
    };

    jasmine.getEnv().addReporter(new JasmineReporter(options));
  }

  
};