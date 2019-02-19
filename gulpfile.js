const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('sass', function(){
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// Watch Sass & Server
gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server: "./src"
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
  gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Move JS Files to src/js
gulp.task('js', function(){
  return gulp.src([
    
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js.map',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js', 
    'node_modules/popper.js/dist/umd/popper.min.js.map', 
    'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
    'node_modules/animejs/anime.min.js',
    'node_modules/chart.js/dist/Chart.bundle.min.js',
    'node_modules/ekko-lightbox/dist/ekko-lightbox.min.js',
    'node_modules/masonry-layout/dist/masonry.pkgd.min.js',

  ])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
});

// Move CSS Files to src/css
gulp.task('css', function(){
  return gulp.src([
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/ekko-lightbox/dist/ekko-lightbox.css',
    'node_modules/animate.css/animate.min.css',

  ])
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// Move Fonts Folder to src/fonts
gulp.task('fonts', function(){
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest("src/fonts"));
});

gulp.task('default', ['js', 'serve', 'css', 'fonts',]);
