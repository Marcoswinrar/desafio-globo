// Call plugins
var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    uglify     = require('gulp-uglify'),
    jshint     = require('gulp-jshint'),
    concat     = require('gulp-concat'),
    stylus     = require('gulp-stylus'),
    koutoSwiss = require('kouto-swiss'),
    prefixer   = require('autoprefixer-stylus'),
    imagemin   = require('gulp-imagemin'),
    server     = require('gulp-express');

// Call Uglify and Concat JS
gulp.task('js', function(){
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
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

gulp.task('server', function(){
    server.run({
        file: 'server.js'
    });
})

// Call Watch
gulp.task('watch', function(){
    gulp.watch('src/styl/**/*.styl', ['stylus']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin']);
});

// Default task
gulp.task('default', ['js', 'stylus', 'imagemin', 'server', 'watch']);