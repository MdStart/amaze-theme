var gulp = require('gulp');
var sass = require('gulp-sass');
var serve = require('browser-sync').create();

gulp.task('serve', function() {
  serve.init({
    server: { },
  })
});
gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(serve.reload({
      stream: true
    }))
});
gulp.task('watch', ['serve', 'sass'], function (){
  gulp.watch('scss/**/*.scss', ['sass']); 
  gulp.watch('**/*.html', serve.reload); 
  gulp.watch('js/**/*.js', serve.reload);
});
// default task
gulp.task('default', ['watch']);
