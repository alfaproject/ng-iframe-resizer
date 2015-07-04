'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'del']
});

gulp.task('js', function () {
    return gulp.src([
            path.join(conf.paths.src, '/*.js'),
            '!' + path.join(conf.paths.src, '/*.spec.js')
        ])
        .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
        .pipe($.uglify()).on('error', conf.errorHandler('Uglify'))
        .pipe($.rename('iframe-resizer.min.js'))
        .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});

gulp.task('clean', function (done) {
    $.del([path.join(conf.paths.dist, '/')], done);
});

gulp.task('build', ['js']);
