/* import necessary npm packages */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoPrefixer = require('gulp-autoprefixer');


/* scss to css compilation */
function sassCompiler(src, dest) {
    return function (done) {
        gulp.src(src)
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .pipe(autoPrefixer('last 10 versions'))
            .pipe(sourcemaps.write('maps'))
            .pipe(gulp.dest(dest));
        done();
    };
}

// bootstrap sass compiler
gulp.task('sass:bs', sassCompiler('public/assets/vendor_assets/css/bootstrap/bootstrap.scss', 'public/assets/vendor_assets/css/bootstrap/'));

// themes sass compiler
gulp.task('sass:theme', sassCompiler('public/assets/theme_assets/sass/style.scss', 'public/assets'));


// default gulp task
gulp.task('default', gulp.series('sass:theme', function () {
    gulp.watch('public/assets/theme_assets/sass/**/*', gulp.series('sass:theme'));
    gulp.watch('public/assets/vendor_assets/css/bootstrap/*.scss', gulp.series('sass:bs'));
    gulp.watch('public/assets/**/*.js');
}));