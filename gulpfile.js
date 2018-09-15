var gulp = require ('gulp');
	sass = require ('gulp-sass'),
	wait = require ('gulp-wait')
	browserSync = require('browser-sync');

// ---TASK SASS---
gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.sass')
	.pipe(wait(100))
	.pipe(sass())
	.on('error',sass.logError)
	.pipe(gulp.dest('app/css/'))
	.pipe(browserSync.reload({stream: true}))
});

// ---TASK BROWSER-SYNC---
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

// ---TASK WATCHER---
gulp.task('watch', ['browser-sync', 'sass'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});
