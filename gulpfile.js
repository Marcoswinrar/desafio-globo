// Call plugins
var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    uglify     = require('gulp-uglify'),
    stylus     = require('gulp-stylus'),
    koutoSwiss = require('kouto-swiss'),
    prefixer   = require('autoprefixer-stylus'),
    imagemin   = require('gulp-imagemin');

// Call Uglify and Concat JS
gulp.task('js', function(){
    return gulp.src('src/js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/js/'))
});

// Call Stylus
gulp.task('stylus', function(){
        gulp.src('src/styl/style.styl')
        .pipe(stylus({
            use:[prefixer(), koutoSwiss()],
            compress: true
        }))
        .pipe(gulp.dest('app/css'))
});

// Call Imagemin
gulp.task('imagemin', function() {
    return gulp.src('src/img/**/*')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('app/img'));
});

// Call Watch
gulp.task('watch', function(){
    gulp.watch('src/styl/**/*.styl', ['stylus']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin']);
});

// Default task
gulp.task('default', ['js', 'stylus', 'imagemin', 'watch']);