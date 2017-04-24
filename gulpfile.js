var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src('bower_components/assets/scss/style.scss')
		.pipe(sass())	
		.pipe(gulp.dest('bower_components/assets/css'))
});

gulp.task('default', function(){
	console.log('Hello Gulp');
});

gulp.watch('bower_components/assets/scss/style.scss', ['sass']);
