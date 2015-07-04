/**
 * This file contains the variables used in other gulp files which define tasks.
 */

var gutil = require('gulp-util');

/**
 * The main paths of the project.
 */
exports.paths = {
    src: 'src',
    dist: 'dist'
};

/**
 * Common implementation of an error handler for a Gulp plugin.
 */
exports.errorHandler = function(title) {
    'use strict';

    return function(err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};
