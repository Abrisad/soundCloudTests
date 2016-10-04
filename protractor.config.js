"use strict";

exports.config = {
  specs: ['*_spec.js'],
  directConnect: true,
  framework: 'jasmine2',
  capabilities: {
    'browserName': 'chrome'
  },
  useAllAngular2AppRoots: true
};