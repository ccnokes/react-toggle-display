var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('build', function (callback) {
	return gulp.src('./index.js')
    	.pipe(babel())
    	.pipe(gulp.dest('./dist'));
});