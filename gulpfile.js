const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
// const sourcemaps = require('gulp-sourcemaps');
// const obfuscate = require('gulp-obfuscate');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        // .pipe(obfuscate())
        .pipe(gulp.dest('./dist/js'))
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false} , gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false} , gulp.parallel(scripts))
}

