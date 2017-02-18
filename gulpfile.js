var gulp = require('gulp');
var jsHint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

var jsFiles = [
	'*js',
	'public/**/*.js'
];

gulp.task('style', function () {
	return gulp.src(jsFiles)
		.pipe(jsHint())
		.pipe(jsHint.reporter('jshint-stylish', {
			verbose : true
		}))
		.pipe(jscs());
});

gulp.task('serve', ['style'], function() {
	var options = {
		script : 'app.js',
		delayTime : 1,
		env : {
			'PORT' : 5000
		},
		watch : jsFiles
	}
	return nodemon(options)
		.on('restart', function(ev) {
			console.log('Restarting...');
		});
});
