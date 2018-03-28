var
  // modules installed
  gulp = require('gulp'),
  browserSync = require('browser-sync').create();

  // to install - ccsnano, js concat and minify


// Live Reload
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });
});

// run tasks
gulp.task('run', ['browser-sync']);

// watch task
gulp.task('watch', ['browser-sync'], function() {
   gulp.watch('index.html', browserSync.reload);
   gulp.watch('css/styles.css', browserSync.reload);
   //gulp.watch('src/js/**/*.js', browserSync.reload);
});

// default task
gulp.task('default', ['run', 'watch']);
