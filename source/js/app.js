////////////////////////////////////////////////////
(function(){
  let flipper = document.querySelector('.flipper-wrap'),
      button = document.querySelector('.auth-btn'),
      authLink = document.querySelector('.auth__link');
  if (button, authLink) {
    button.addEventListener('click', function(e){
      e.preventDefault();
      flipper.classList.toggle('clicked');
      button.classList.toggle('auth-btn__hidden');
    })
    authLink.addEventListener('click', function(e){
      e.preventDefault();
      flipper.classList.toggle('clicked');
      button.classList.toggle('auth-btn__hidden');
    })
  };
}());
//////////////////////////////////////////////////////
(function(){
  let triggerBtn = document.querySelector('.nav-trigger');

  if (triggerBtn) {
  triggerBtn.addEventListener('click', function(e){
    e.preventDefault();
    triggerBtn.classList.toggle('nav-trigger_active');
  })
  }
}());

///////////////////////////////////////////////////////////
var parallax = (function(){
  var bg = document.querySelector('.first-screen__bg-wrap'),
      user = document.querySelector('.user'),
      sectionPic = document.querySelector('.section-pic');

  return {
    move: function(block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var transformStr = 'translate3d(0, '+ strafe +', 0)';

      var style = block.style;

      style.transform = transformStr;
      style.webkitTransform = transformStr;

    },
    init: function(wScroll) {
      this.move(bg, wScroll, 55);
      this.move(sectionPic, wScroll, 25);
      this.move(user, wScroll, 3);
    }
  }

}());
if (window.innerWidth >= 1200) {
  window.addEventListener('scroll', function(){
    var wScroll = window.pageYOffset;
    parallax.init(wScroll);
  })
}
else {
  window.removeEventListener('scroll', function(){
    var wScroll = window.pageYOffset;
    parallax.init(wScroll);
  })
}
  
////////////////////////////////////////////////////

var helloParallaxCont = document.querySelector('.hello-bg'),
    layers = helloParallaxCont.children;

var moveLayers = function(e) {
  var initialX = (window.innerWidth / 2) - e.pageX;
  var initialY = (window.innerHeight / 2) - e.pageY;


  [].slice.call(layers).forEach(function(layer, i){
    var divider = i/100,
        positionX = initialX * divider,
        positionY = initialY * divider,
        bottomPosition = (window.innerHeight / 2) * divider,
        transformStr = 'translate('+ positionX +'px,'+ positionY +'px)',
        image = layer.firstElementChild;

    layer.style.transform = transformStr;
    image.style.bottom = -bottomPosition + 'px';
  })
}
window.addEventListener('mousemove', moveLayers);