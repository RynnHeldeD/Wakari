var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var del = require('del');


///////////////////////////////////////
// LESS
///////////////////////////////////////
gulp.task('less-lib', function() {
	return gulp.src([
		'node_modules/angular-material/angular-material.css'
	])
		.pipe(less())
		.pipe(concat('lib.css'))
		.pipe(gulp.dest('dist/assets'))
		.pipe(rename({suffix: '.min'}))
		.pipe(cssnano())
		.pipe(gulp.dest('dist/assets'));
});

gulp.task('less-app', function() {
	return gulp.src([
		'app/**/*.less'
	])
		.pipe(less())
		.pipe(concat('app.css'))
		.pipe(gulp.dest('dist/assets'))
		.pipe(rename({suffix: '.min'}))
		.pipe(cssnano())
		.pipe(gulp.dest('dist/assets'));
});

///////////////////////////////////////
// JAVASCRIPT
///////////////////////////////////////
gulp.task('script-lib', function() {
	return gulp.src([
		'node_modules/jquery/dist/jquery.js',
		'node_modules/angular/angular.js',
		'node_modules/angular-ui-router/release/angular-ui-router.js',
		'node_modules/angular-resource/angular-resource.js',
		'node_modules/angular-material/angular-material.js',
		'node_modules/angular-animate/angular-animate.js',
		'node_modules/angular-aria/angular-aria.js'
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
// ICONS
//////////////////////////////////////
gulp.task('icons', function() {
	return gulp.src('node_modules/material-design-icons/**/svg/production/*_24px.svg', {
		'base': 'node_modules/material-design-icons/'
	})
		.pipe(rename(function(path) {
			path.dirname = path.dirname.split('\\')[0];
			var nameArray = path.basename.split('_');
			nameArray.splice(0, 1);
			nameArray.splice(nameArray.length - 1, 1);
			path.basename = nameArray.join('_');
		}))
		.pipe(gulp.dest('dist/assets/icons'))
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

gulp.task('clean-less-lib', function() {
	return del([
		'dist/assets/lib.css',
		'dist/assets/lib.min.css'
	]);
});

gulp.task('clean-less-app', function() {
	return del([
		'dist/assets/app.css',
		'dist/assets/app.min.css'
	]);
});


///////////////////////////////////////
// BUILD
///////////////////////////////////////
gulp.task('default', ['clean-script-app', 'clean-less-app'], function() {
	gulp.start('script-app', 'less-app');
});

gulp.task('build', ['clean-script-lib', 'clean-script-app', 'clean-less-lib', 'clean-less-app'], function() {
	gulp.start('script-lib', 'script-app', 'less-lib', 'less-app', 'icons');
});