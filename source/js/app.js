//
import preloader from './modules/preloader';
import mainMenu from './modules/main_menu';
import flipper from './modules/flipper';
import parallaxScroll from './modules/parallax_scroll';
import parallaxMain from './modules/main_parallax';
import mapGoogle from './modules/google_maps';
import validation from './modules/validation';
import form from './modules/form';
import slider from './modules/slider';
import sidebar from './modules/blog_menu';
//
$(document).ready(() => {
  preloader();
  flipper();
  parallaxMain();
  mainMenu();
  form();
  slider();
  sidebar();
});
//- init Scroll Parallax
if (window.innerWidth >= 1200) {
  window.addEventListener('scroll', function () {
    var wScroll = window.pageYOffset;
    parallaxScroll().init(wScroll);
  })
} else {
  window.removeEventListener('scroll', function () {
    var wScroll = window.pageYOffset;
    parallaxScroll().init(wScroll);
  })
}
//- init GoogleMaps
if ($('#map').length) {
  google.maps.event.addDomListener(window, 'load', mapGoogle().init);
}