var gulp = require('gulp');

var jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('default', function(){
  return gulp.src(['src/**/*.js', 'spec/**/*_spec.js'])
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.phantomjs());
});