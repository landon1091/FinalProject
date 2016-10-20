let gulp = require('gulp');

let sass = require('gulp-sass');

let browserify = require('gulp-browserify');

gulp.task('default', ['html', 'scss', 'js']);

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('public/'));
});

gulp.task('scss', function () {
    return gulp.src('style.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function () {
    return gulp.src('app.js')
        .pipe(browserify())
        .pipe(gulp.dest('public/'));
});

gulp.task('watch', function () {
    gulp.watch('index.html', ['html']);
    gulp.watch('app.js', ['js']);
    gulp.watch('style.scss', ['scss']);
    gulp.watch('scss/*.scss', ['scss']); 
})