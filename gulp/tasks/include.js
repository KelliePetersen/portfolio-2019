var fileInclude = require('gulp-file-include'),
  gulp = require('gulp');

gulp.task('fileInclude', function (cb) {
  gulp.src('./app/views/*.html')
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./app'));
    cb();
});