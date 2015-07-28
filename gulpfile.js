// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var Server = require('karma').Server;

// Lint Task
gulp.task('lint', function() {
    return gulp.src(['./app/js/**/*.js'])
        .pipe(jshint('./.jshintrc'))
        .pipe(jshint.reporter(stylish));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./src/**/*.js', ['lint']);
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

// Default Task
gulp.task('default', ['lint', 'test', 'watch']);