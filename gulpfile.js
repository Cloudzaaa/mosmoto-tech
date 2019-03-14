var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cache = require('gulp-cache');
var prettier = require('gulp-prettier');
var browserSync = require('browser-sync');

sass.compiler = require('node-sass');

gulp.task('pug', function () {
    return gulp.src('dev/views/*.html')
        // .pipe(pug({
        //     pretty: true
        // }))
        .pipe(prettier({
            tabWidth: 2
        }))
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.stream());
});

gulp.task('sass', function () {
    // return gulp.src(['./dev/sass/style.scss','node_modules/bootstrap/scss/bootstrap.scss'])
    return gulp.src(['./dev/sass/style.scss', 'node_modules/normalize.css/normalize.css'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prettier({
            trailingComma: "es5",
            tabWidth: 2,
            semi: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
});

gulp.task('img', function () {
    return gulp.src('./dev/images/*.*')
        // .pipe(cache())
        .pipe(gulp.dest('./build/images'))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function () {
    return gulp.src('./dev/fonts/*.*')
    // .pipe(cache())
        .pipe(gulp.dest('./build/fonts'))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src('./dev/js/*.*')
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'build/'
        },
        notify: false
    });
});

gulp.task('watch', function() {
    gulp.watch('dev/sass/*.scss', gulp.parallel('sass'));
    gulp.watch('dev/views/*.html', gulp.parallel('pug'));
    gulp.watch('dev/images/*.*', gulp.parallel('img'));
    gulp.watch('dev/js/*.*', gulp.parallel('js'));
});
gulp.task('default', gulp.parallel('pug', 'sass', 'img', 'js', 'fonts', 'browser-sync', 'watch'));
