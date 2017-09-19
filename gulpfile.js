var gulp = require('gulp');
var sass = require('gulp-sass'); 
var jshint = require('gulp-jshint'); 
gulp.task('sass', function() {
    return gulp.src('scss/style.scss') 
    .pipe(sass({errLogToConsole: true})) 
    .pipe(gulp.dest('css'))
    });

gulp.task('task-name', function() {
return gulp.src('js/*.js') .pipe(jshint()) .pipe(jshint.reporter('default'))
})
gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['sass']);
})