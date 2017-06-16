'use strict';

module.exports = function() {
  $.gulp.task('sprite', function() {
    let spriteGen = $.gulp.src('./source/images/icons/*.{png, gif}')
    .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    }));
    let images = spriteGen.img
    .pipe($.gulp.dest($.config.root + '/assets/img'));
    let styles = spriteGen.css
    .pipe($.gp.csso())
    .pipe($.gulp.dest($.config.root + '/assets/css'));
    return images, styles;
  })
};