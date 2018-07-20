var gulp        = require('gulp');
var browserSync = require('browser-sync').create(),
	reload = browserSync.reload;
var sass        = require('gulp-sass');
var del = require('del');
var $ = require('gulp-load-plugins')({ lazy: true }),

//HTML partial structure
html = {
	partials: ['./src/_partials/**/*'],
	in: ['./src/*.html'],
	watch: ['./src/*.html', './src/_partials/**/*'],
	out: ['app/']
}

source = './',
dest = 'app/';

// Clean tasks
gulp.task('clean', function() {
  del([
    dest + '*'
  ]);
});

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "app/",
        open: false,
        injectChanges: true,
	    notify: true
    });
    $.watch([dest + '**/*.css'], $.batch(function (events, done) {
	  gulp.start(browserSync.stream(), done);
	}));
});

// Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//     return gulp.src()
// 		.pipe($.sourcemaps.init())
// 		.pipe($.plumber())
//         .pipe(sass())
//         .pipe($.sourcemaps.write('./maps'))
//         .pipe(gulp.dest("app/css"))
//         .pipe(browserSync.stream());
// });

gulp.task('sass', [], function() {
  return gulp.src("src/scss/styles.scss")
    .pipe($.sourcemaps.init())
    .pipe($.plumber())
    .pipe($.sass())
    .pipe($.sourcemaps.write('./maps'))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

// build HTML files
gulp.task('html', function() {
  var page = gulp.src(html.in)
             .pipe($.preprocess())
  return page
     .pipe(gulp.dest(dest));
});

//Watch Task
gulp.task('watch', function() {

  // html changes
  gulp.watch(html.watch, ['html', reload]);
  gulp.watch([source + 'src/scss/**/*.scss'], ['sass']);

  // gulp.watch(['src/scss/*.scss'], ['sass']);
  // gulp.watch(['src/*.html', 'src/_partials/**/*']).on('change', browserSync.reload);
});

gulp.task('default', ['serve','html', 'watch']);