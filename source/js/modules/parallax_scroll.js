export default () => {
  var bg = document.querySelector('.first-screen__bg-wrap'),
    user = document.querySelector('.user'),
    sectionPic = document.querySelector('.section-pic');

  return {
    move: function (block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var transformStr = 'translate3d(0, ' + strafe + ', 0)';

      var style = block.style;

      style.transform = transformStr;
      style.webkitTransform = transformStr;

    },
    init: function (wScroll) {
      this.move(bg, wScroll, (-50));
      this.move(sectionPic, wScroll, 20);
      this.move(user, wScroll, 6);
    }
  }

};