'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

gulp.task('watch', ['scripts'], function() {

    gulp.watch(path.join(conf.paths.src, '/*.js'), function(event) {
        if (event.type === 'changed') {
            gulp.start('scripts');
        }
    });

});
