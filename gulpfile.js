var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');

gulp.task('default', function() {
  var srcNg = 'node_modules/angular/angular.js';
  var srcNgAnimate = 'node_modules/angular-animate/angular-animate.js';
  var srcNgAria = 'node_modules/angular-aria/angular-aria.js';
  var srcNgMessages = 'node_modules/angular-messages/angular-messages.js';
  var srcNgRoute = 'node_modules/angular-route/angular-route.js';
  var srcNgSanatize = 'node_modules/angular-sanatize/angular-sanatize.js';
  var srcMaterialJs = 'bower_components/angular-material/angular-material.js';
  var srcMaterialCss = 'bower_components/angular-material/angular-material.css';
  var srcMaterialIconsCss = 'public/fonts/material-icons.css';
  var srcHtmlViews = 'public/**/*.html';
  var srcCTapp = 'public/**/*.js';
  var srcNodeServer = 'server.js';

  gulp.src(srcMaterialCss)
    .pipe(concat('all.modules.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'));

  gulp.src(srcMaterialIconsCss)
    .pipe(concat('all.fonts.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/fonts'));

  gulp.src(['public/fonts/MaterialIcons-Regular.eot', 'public/fonts/MaterialIcons-Regular.jimap', 'public/fonts/MaterialIcons-Regular.svg', 'public/fonts/MaterialIcons-Regular.ttf', 'public/fonts/MaterialIcons-Regular.woff', 'public/fonts/MaterialIcons-Regular.woff2'])
    .pipe(gulp.dest('dist/fonts'));

  gulp.src([srcNg, srcNgAnimate, srcNgAria, srcNgMessages, srcNgRoute, srcNgSanatize, srcMaterialJs])
    .pipe(concat('all.modules.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));

  gulp.src(srcCTapp)
     .pipe(concat('all.custom.js'))
     .pipe(uglify())
     .pipe(gulp.dest('dist/scripts'));

  gulp.src(srcHtmlViews, { base: 'public/' })
    .pipe(gulp.dest('dist'));

  gulp.src(srcNodeServer)
    .pipe(uglify())
    .pipe(gulp.dest('dist'));

  //nodemon({script: 'dist/server.js', ext: 'js html', env: { 'NODE_ENV': 'development' }});
});
