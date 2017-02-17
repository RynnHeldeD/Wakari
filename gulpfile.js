var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var del = require('del');


///////////////////////////////////////
// SASS
///////////////////////////////////////


///////////////////////////////////////
// JAVASCRIPT
///////////////////////////////////////
gulp.task('script-lib', function() {
	return gulp.src([
		'node_modules/jquery/dist/jquery.js',
		'node_modules/angular/angular.js',
		'node_modules/angular-route/angular-route.js',
		'node_modules/angular-resource/angular-resource.js'
	])
		.pipe(concat('lib.js'))
		.pipe(gulp.dest('dist/app'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/app'));
});

gulp.task('script-app', function() {
	return gulp.src([
		'app/app.module.js',
		'app/**/*.module.js',
		'app/**/*.js'
	])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist/app'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/app'));
});


///////////////////////////////////////
// CLEAN
///////////////////////////////////////
gulp.task('clean-script-lib', function() {
	return del([
		'dist/app/lib.js',
		'dist/app/lib.min.js'
	]);
});

gulp.task('clean-script-app', function() {
	return del([
		'dist/app/app.js',
		'dist/app/app.min.js'
	]);
});


///////////////////////////////////////
// BUILD
///////////////////////////////////////
gulp.task('default', ['clean-script-app'], function() {
	gulp.start('script-app');
});

gulp.task('build', ['clean-script-lib', 'clean-script-app'], function() {
	gulp.start('script-lib', 'script-app');
});