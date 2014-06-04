var gulp       = require('gulp');
var config     = require('../config');
var gulp        = require('gulp');

gulp.task('watch', ['browserSync'], function() {
	gulp.watch('src/sass/**', ['compass']);
	gulp.watch('src/images/**', ['images']);
	gulp.watch('src/htdocs/**', ['copy']);
	// Note: Javascript watching is handled by watchify
	// in gulp/tasks/browserify.js, when this flag is true
	config.isWatching = true;
});
