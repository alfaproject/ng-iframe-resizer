'use strict';

var path = require('path');
var conf = require('./gulp/conf');

var wiredep = require('wiredep');

function listFiles() {
    var wiredepOptions = {
        directory: 'bower_components',
        dependencies: true,
        devDependencies: true
    };

    return wiredep(wiredepOptions).js
        .concat([path.join(conf.paths.src, '/*.js')]);
}

module.exports = function(config) {

    var configuration = {
        files: listFiles(),

        singleRun: true,

        autoWatch: false,

        frameworks: ['jasmine'],

        browsers : ['PhantomJS'],

        plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ]
    };

    // This block is needed to execute Chrome on Travis.
    // https://github.com/karma-runner/karma/issues/1144#issuecomment-53633076
    if (configuration.browsers[0] === 'Chrome' && process.env.TRAVIS) {
        configuration.customLaunchers = {
            'chrome-travis-ci': {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        };
        configuration.browsers = ['chrome-travis-ci'];
    }

    config.set(configuration);
};
