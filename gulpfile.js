var gulp = require('gulp');
var jasmineBrowser = require('gulp-jasmine-browser');
var babel = require('gulp-babel');


gulp.task('default', function(){
  return gulp.src(['src/**/*.js', 'spec/**/*_spec.js'])
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.phantomjs())
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});