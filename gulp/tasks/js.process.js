'use strict';

// module.exports = function() {
//   $.gulp.task('js:process', function() {
//     return $.gulp.src($.path.app)
//       .pipe($.gp.sourcemaps.init())
//       .pipe($.gp.concat('app.js'))
//       .pipe($.gp.sourcemaps.write())
//       .pipe($.gulp.dest($.config.root + '/assets/js'))
//   })
// };
var webpack = require('webpack');
var webpackStream = require('webpack-stream');

module.exports = function () {
  $.gulp.task('js:process', function () {
    return $.gulp.src($.path.app)
      .pipe($.gp.sourcemaps.init())
      .pipe(webpackStream( require('../../webpack.config.js'), webpack))
      .on('error', function handleError() {
        this.emit('end'); // Recover from errors
      })
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};