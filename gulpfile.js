var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('build', function () {
    return gulp.src('./index.jsx')
        .pipe(babel({ blacklist: ['strict'] }))
        .pipe(gulp.dest('./dist'));
});