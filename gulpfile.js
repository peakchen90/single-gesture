let gulp = require('gulp')
let umd = require('gulp-umd')

gulp.task('umd', () => gulp
  .src('gesture.js')
  .pipe(umd())
  .pipe(gulp.dest('build'))
)