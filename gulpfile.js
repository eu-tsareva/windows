'use strict';

var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    pngquant = require('imagemin-pngquant'),
    del = require('del'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    runSequence = require('run-sequence');

var path = {
  build: {
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts'
  },
  src: {
    html: 'src/*.html',
    js: 'src/js/',
    jsx: 'src/js/jsx/app.jsx',
    style: 'src/style/main.less',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/'
  },
  watch: {
    html: 'src/*.html',
    js: 'src/js/*.js',
    jsx: 'src/js/jsx/*.jsx',
    style: 'src/style/*.less',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/'
  },
  clean: ['./build']
};

var config = {
  server: {
      baseDir: 'build/',
      index: 'price.html'
  },
  tunnel: true,
  host: 'localhost',
  port: 9000
};


gulp.task('html-build', function () {
  gulp.src(path.src.html)
      .pipe(gulp.dest(path.build.html))
      .pipe(reload({stream: true}));
});

gulp.task('jsx-build', function() {
  return browserify({entries: path.src.jsx, extensions: ['.jsx'], debug: true})
        .transform('babelify',{presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(path.src.js));
});

gulp.task('js-build', function () {
  gulp.src(path.src.js+'main.js')
      .pipe(rigger())
      .pipe(sourcemaps.init())
      .pipe(jshint())
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(path.build.js))
      .pipe(reload({stream: true}));
});

gulp.task('style-build', function () {
  gulp.src(path.src.style)
      .pipe(sourcemaps.init())
      .pipe(prefixer())
      .pipe(less())
      .pipe(cssmin())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(path.build.css))
      .pipe(reload({stream: true}));
});

gulp.task('image-build', function () {
  return gulp.src(path.src.img)
              .pipe(cache(imagemin ([
                imagemin.gifsicle({interlaced: true}),
                imagemin.jpegtran({progressive: true}),
                imagemin.optipng({use: pngquant()})
              ])))
              .pipe(gulp.dest(path.build.img))
              .pipe(reload({stream: true}));
});

gulp.task('fonts-build', function() {
  gulp.src(path.src.fonts)
      .pipe(gulp.dest(path.build.fonts))
});



gulp.task('build', function(cb) {
  runSequence('fonts-build', ['image-build', 'style-build', 'html-build'], 'jsx-build', 'js-build', cb);
});

gulp.task('watch', ['build'], function(){
  gulp.watch(path.watch.html, ['html-build']);
  gulp.watch(path.watch.jsx, ['jsx-build']);
  gulp.watch(path.watch.js, ['js-build']);
  gulp.watch(path.watch.style, ['style-build']);
  gulp.watch(path.watch.img, ['image-build']);
  gulp.watch(path.watch.fonts, ['fonts-build']);
});

gulp.task('webserver', ['build'], function() {
  browserSync(config);
});

gulp.task('clean', function(cb) {
  del(path.clean);
  cache.clearAll(cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);
