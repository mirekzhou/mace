'use strict';

// gulp and gulp plugins
var gulp         = require('gulp');
var clean        = require('gulp-clean');
var shell        = require('gulp-shell');

gulp.task('clean', function () {
    return  gulp.src(['cordova/www/'], {read: false})
                .pipe(clean());
});

gulp.task('copy', ['clean'], function () {
    return gulp.src('dist/**/**')
                .pipe(gulp.dest('cordova/www/'));
});


var exec = require('child_process').exec;

gulp.task('build-android', function () {
    var build_commands = [
    	// 'npm run build',
    	// 'gulp copy',
    	// 'cd cordova',
    	// 'cordova build android',
    ];

    shell.task(build_commands)();
});