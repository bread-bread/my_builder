export default () => {
  var helloParallaxCont = document.querySelector('.hello-bg'),
    layers;
  if (helloParallaxCont) {
    layers = helloParallaxCont.children;
  }

  var moveLayers = function (e) {
    var initialX = (window.innerWidth / 2) - e.pageX;
    var initialY = (window.innerHeight / 2) - e.pageY;


    [].slice.call(layers).forEach(function (layer, i) {
      var divider = i / 100,
        positionX = initialX * divider,
        positionY = initialY * divider,
        bottomPosition = (window.innerHeight / 2) * divider,
        transformStr = 'translate(' + positionX + 'px,' + positionY + 'px)',
        image = layer.firstElementChild;

      layer.style.transform = transformStr;
      image.style.bottom = -bottomPosition + 'px';
    })
  };
  if (helloParallaxCont) {
    window.addEventListener('mousemove', moveLayers);
  }
};