'use strict';

module.exports = function() {
  $.gulp.task('sprite', function() {
    let spriteGen = $.gulp.src('./source/images/icons/*.{png, gif}')
    .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss'
    }));
    let images = spriteGen.img
    .pipe($.gulp.dest($.config.root + '/assets/img'));
    let styles = spriteGen.css
    .pipe($.gulp.dest('./source/style/common'));
    return images, styles;
  })
};