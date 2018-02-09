/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// tooltip
var createQtip = function createQtip(element, direction) {
    var _hide;

    direction = direction || 'left';
    var position = {
        left: {
            my: 'center right',
            at: 'center left'
        },
        right: {
            my: 'center left',
            at: 'center right'
        },
        bottom: {
            my: 'top center',
            at: 'bottom center'
        },
        top: {
            my: 'bottom center',
            at: 'top center'
        }
    };
    element.qtip({
        content: {
            text: function text() {
                return $(this).data('content');
            }
        },
        show: {
            event: 'show'
        },
        hide: (_hide = {
            event: 'keydown click hideTooltip'
        }, _defineProperty(_hide, 'event', 'focus'), _defineProperty(_hide, 'inactive', 1800), _hide),

        position: position[direction],
        style: {
            classes: 'qtip-mystyle qtip-rounded',
            tip: {
                height: 7,
                width: 10
            }
        }
    }).trigger('show');
};
var addError = function addError(element) {
    element.addClass('error');
    createQtip(element, element.data('position'));
};
var validation = function validation(form) {
    var inputs = $(form).find('input[data-content]');
    var flag = true;
    $(inputs).each(function (ndx, element) {
        if ($(element).val() == '') {
            flag = false;
            addError($(element));
            // $('#success').find('.modal__text').text($(element).data('content'));
            // $('#success').fadeIn(300);
        }
    });
    return flag;
};
exports.default = validation;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _preloader = __webpack_require__(2);

var _preloader2 = _interopRequireDefault(_preloader);

var _main_menu = __webpack_require__(3);

var _main_menu2 = _interopRequireDefault(_main_menu);

var _flipper = __webpack_require__(4);

var _flipper2 = _interopRequireDefault(_flipper);

var _parallax_scroll = __webpack_require__(5);

var _parallax_scroll2 = _interopRequireDefault(_parallax_scroll);

var _main_parallax = __webpack_require__(6);

var _main_parallax2 = _interopRequireDefault(_main_parallax);

var _google_maps = __webpack_require__(7);

var _google_maps2 = _interopRequireDefault(_google_maps);

var _validation = __webpack_require__(0);

var _validation2 = _interopRequireDefault(_validation);

var _form = __webpack_require__(8);

var _form2 = _interopRequireDefault(_form);

var _slider = __webpack_require__(9);

var _slider2 = _interopRequireDefault(_slider);

var _blog_menu = __webpack_require__(10);

var _blog_menu2 = _interopRequireDefault(_blog_menu);

var _circleAnimate = __webpack_require__(11);

var _circleAnimate2 = _interopRequireDefault(_circleAnimate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
$(document).ready(function () {
  (0, _preloader2.default)();
  (0, _flipper2.default)();
  (0, _main_parallax2.default)();
  (0, _main_menu2.default)();
  (0, _form2.default)();
  (0, _slider2.default)();
  (0, _blog_menu2.default)();
  (0, _circleAnimate2.default)();
});

//- init Scroll Parallax
//
if (window.innerWidth >= 1200) {
  window.addEventListener('scroll', function () {
    var wScroll = window.pageYOffset;
    (0, _parallax_scroll2.default)().init(wScroll);
  });
} else {
  window.removeEventListener('scroll', function () {
    var wScroll = window.pageYOffset;
    (0, _parallax_scroll2.default)().init(wScroll);
  });
}
//- init GoogleMaps
if ($('#map').length) {
  google.maps.event.addDomListener(window, 'load', (0, _google_maps2.default)().init);
}
//- scroll to top
var scrollUp = $('.callback__scroll');
var scrollDown = $('.first-screen__scroll');
var scrollTo = $('.wrapper').find('.section');
if (scrollUp.length) {
  scrollUp.on('click', function (e) {
    e.preventDefault();
    $('html').animate({ scrollTop: 0 }, 1500);
  });
}
if (scrollDown.length) {
  scrollDown.on('click', function (e) {
    e.preventDefault();
    $('html').animate({ scrollTop: $(scrollTo[1]).offset().top }, 800);
  });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var percentTotal = 0;
var preloader = $('.preloader');

var imgPaths = $('*').map(function (ndx, element) {
  var isImg = $(element).is('img');
  var background = $(element).css('background-image');

  var path = '';

  if (background != 'none') {
    path = background.replace('url("', '').replace('")', '');
  }
  if (isImg) {
    path = $(element).attr('src');
  }
  if (path) return path;
});
var setPercents = function setPercents(total, current) {
  var percents = Math.ceil(current / total * 100);

  $('.preloader__percents').text(percents + '%');

  if (percents >= 100) preloader.fadeOut();
};
var loadImages = function loadImages(images) {
  if (!images.length) return;

  images.forEach(function (img, i, images) {
    var fakeImg = $('<img>', {
      attr: {
        src: img
      }
    });
    fakeImg.on('load error', function () {
      percentTotal++;
      setPercents(images.length, percentTotal);
    });
  });
};
var imgs = imgPaths.toArray();

exports.default = function () {
  loadImages(imgs);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  $('.nav-trigger').on('click', function (e) {
    e.preventDefault();
    $('.nav-trigger').toggleClass('nav-trigger_active');
    $('.main-menu').slideToggle(300);
  });
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var flipper = document.querySelector('.flipper-wrap'),
      button = document.querySelector('.auth-btn'),
      authLink = document.querySelector('.auth__link'),
      wrap = document.querySelector('.hello-wrap');
  if (button, authLink) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      flipper.classList.toggle('clicked');
      button.classList.toggle('auth-btn__hidden');
    });
    authLink.addEventListener('click', function (e) {
      e.preventDefault();
      flipper.classList.toggle('clicked');
      button.classList.toggle('auth-btn__hidden');
    });
  };
  if (wrap) {
    wrap.addEventListener('click', function (e) {
      if (e.target == this && flipper.classList.contains('clicked') && !e.target.classList.contains('auth-btn')) {
        flipper.classList.toggle('clicked');
        button.classList.toggle('auth-btn__hidden');
      }
    });
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var bg = document.querySelector('.first-screen__bg-wrap'),
      user = document.querySelector('.user'),
      sectionPic = document.querySelector('.section-pic');

  return {
    move: function move(block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var transformStr = 'translate3d(0, ' + strafe + ', 0)';

      var style = block.style;

      style.transform = transformStr;
      style.webkitTransform = transformStr;
    },
    init: function init(wScroll) {
      this.move(bg, wScroll, -50);
      this.move(sectionPic, wScroll, 20);
      this.move(user, wScroll, 6);
    }
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var helloParallaxCont = document.querySelector('.hello-bg'),
      layers;
  if (helloParallaxCont) {
    layers = helloParallaxCont.children;
  }

  var moveLayers = function moveLayers(e) {
    var initialX = window.innerWidth / 2 - e.pageX;
    var initialY = window.innerHeight / 2 - e.pageY;

    [].slice.call(layers).forEach(function (layer, i) {
      var divider = i / 100,
          positionX = initialX * divider,
          positionY = initialY * divider,
          bottomPosition = window.innerHeight / 2 * divider,
          transformStr = 'translate(' + positionX + 'px,' + positionY + 'px)',
          image = layer.firstElementChild;

      layer.style.transform = transformStr;
      image.style.bottom = -bottomPosition + 'px';
    });
  };
  if (helloParallaxCont) {
    window.addEventListener('mousemove', moveLayers);
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var init = function init() {
    var uluru = {
      lat: 59.917508,
      lng: 30.295066
    };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: uluru,
      scrollwheel: false,
      styles: [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#444444"
        }]
      }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
          "color": "#f2f2f2"
        }]
      }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
          "saturation": -100
        }, {
          "lightness": 45
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
          "visibility": "simplified"
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
          "color": "#0465b0"
        }, {
          "visibility": "on"
        }]
      }]
    });
    var icon = {
      position: {
        icon: {
          url: './assets/img/decor/map_marker.svg',
          size: new google.maps.Size(28, 40),
          scaledSize: new google.maps.Size(28, 40)
        }
      }
    };
    var features = {
      position: new google.maps.LatLng(59.878985, 30.332613),
      type: 'position',
      contentString: 'Here i am',
      content: 'La La La'
    };
    var infowindow = new google.maps.InfoWindow();

    var marker = new google.maps.Marker({
      position: features.position,
      icon: icon[features.type].icon,
      map: map,
      animation: google.maps.Animation.DROP,
      title: features.contentString
    });
    marker.addListener('click', function () {
      infowindow.setContent(features.content);
      infowindow.open(map, marker);
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        marker.setAnimation(null);
      }, 1400);
    });
  };
  return {
    init: init
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validation = __webpack_require__(0);

var _validation2 = _interopRequireDefault(_validation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default () => {
//     const f = $('#feedback');
//     f.on('submit', function(event){
//         event.preventDefault();
//         let data = {};
//         if(validation(this)){
//             console.log('Mail was sent')
//         }
//     });
// };

/* Trying */
exports.default = function () {
    var f = $('#feedback');
    f.on('submit', function (event) {
        event.preventDefault();
        if ((0, _validation2.default)(this)) {
            var fData = f.serialize();
            $.ajax({
                url: '../../mailer.php',
                type: "POST",
                data: fData,
                success: function success(data) {
                    var modal = data.status ? "#success" : '#error';
                    $(modal).fadeIn(300);
                }
            });
        }
    });
    var inputs = f.find('input[data-content]');
    f.on('reset', function () {
        this.reset();
        $(inputs).each(function (ndx, element) {
            $(element).removeClass('error');
            $(element).trigger('hideTooltip');
        });
    });
    inputs.on('focus', function () {
        $(this).removeClass('error');
        $(this).trigger('hideTooltip');
    });
    $('.modal__button').on('click', function (event) {
        event.preventDefault();
        $(this).parent().fadeOut(300, function () {
            f.trigger('reset');
        });
    });
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

// let items = $('.slider__controls-listDown').find('.slider__controls-item');
// let activeItem = items.filter('.active');


// ------------------------------------------ // ---------------------------------------------- //
// const duration = 500;
// let counter = 1;
// let inProgress = false;

// const moveSlides = function(container, direction){
//     let items = container.find('.slider__controls-item');
//     let activeItem = items.filter('.active');
//     let strafeTopPercesnts = direction === 'down' ? 100 : -100;

//   if (counter >= items.length) counter = 0;

//     const reqItem = items.eq(counter);

//   activeItem.animate({
//     'top': `${strafeTopPercesnts}%`
//   }, duration);

//   reqItem.animate({
//     top: 0
//   }, duration, function () {
//     activeItem.removeClass('active')
//       .css('top', `${-strafeTopPercesnts}%`);
//     $(this).addClass('active');

//     inProgress = false;
//   });
// }

// const run = () => {
//   $('.slider__controls-up').on('click', function (e) {
//     e.preventDefault()
//     if (inProgress) return;
//     inProgress = true;

//     moveSlides($('.slider__controls-listDown'), 'down');
//     moveSlides($('.slider__controls-listUp'), 'up');
//     counter++;

//   });
//   $('.slider__controls-down').on('click', function (e) {
//     e.preventDefault()
//     if (inProgress) return;
//     inProgress = true;

//     moveSlides($('.slider__controls-listUp'), 'up');
//     moveSlides($('.slider__controls-listDown'), 'down');
//     counter++;

//   });
// }

// export default run;

/*-----------------------||--------------------------*/
// export default () => {
//     var moveSlide = function (container, slideNum) {
//         var items = container.find('.slider__item'),
//             activeSlide = items.filter('.active'),
//             reqItem = items.eq(slideNum),
//             reqIndex = reqItem.index(),
//             list = container.find('.slider__list'),
//             duration = 500;
//         if (reqItem.length) {
//             list.animate({
//                 'left': -reqIndex * 100 + '%'
//             }, duration, function () {
//                 activeSlide.removeClass('active');
//                 reqItem.addClass('active');
//                 $('.slider-dots__item').eq(slideNum).addClass('active').siblings().removeClass('active');
//             });
//         }
//     }
//     $('.slider__control').on('click', function (e) {
//         e.preventDefault();
//         var $this = $(this),
//             container = $('.slider__wrap'),
//             items = $('.slider__item', container),
//             activeItem = items.filter('.active'),
//             nextItem = activeItem.next(),
//             prevItem = activeItem.prev(),
//             existedItem, edgeItem, reqItem;
//         if ($this.hasClass('slider__controls-up')) { //слайд вперед
//             existedItem = activeItem.next();
//             edgeItem = items.first();
//         }
//         if ($this.hasClass('slider__controls-down')) { //слайд назад
//             existedItem = activeItem.prev();
//             edgeItem = items.last();
//         }
//         reqItem = existedItem.length ? existedItem.index() : edgeItem.index();
//         moveSlide(container, reqItem);
//     })
//     $('.slider-dots__link').on('click', function(e) {
//       e.preventDefault();
//       var $this = $(this),
//           href = parseInt($(this).attr('href')),
//           container = $('.slider__wrap');
//       moveSlide(container, href);
//     })
// }

// another version
exports.default = function () {
    var activeDot = function activeDot(container) {
        var items = container.closest('.slider__wrap').find('.slider__item');
        container.find('.slider-dots__item').eq(items.filter('.active').index()).addClass('active').siblings().removeClass('active');
    };
    var flag = true;
    var moveSlide = function moveSlide(item, direction, container) {
        var items = container.find('.slider__item'),
            activeItem = items.filter('.active'),
            itemWidth = item.width(),
            duration = 500,
            reqPosition,
            reqStrafe;
        if (flag) {
            flag = false;
            if (direction === 'forward') {
                reqPosition = itemWidth;
                reqStrafe = -itemWidth;
            } else if (direction === 'back') {
                reqPosition = -itemWidth;
                reqStrafe = itemWidth;
            }
            item.css('left', reqPosition).addClass('inprocess');
            var movableItem = items.filter('.inprocess');
            activeItem.animate({ 'left': reqStrafe }, duration);
            movableItem.animate({ 'left': 0 }, duration, function () {
                var $this = $(this);
                items.css('left', '0').removeClass('active');
                $this.toggleClass('inprocess active');

                activeDot(container.find('.slider-dots'));

                flag = true;
            });
        }
    };
    $('.slider__control').on('click', function (e) {
        e.preventDefault();

        var $this = $(this),
            container = $('.slider__wrap'),
            items = container.find('.slider__item'),
            activeItem = items.filter('.active'),
            nextItem = activeItem.next(),
            prevItem = activeItem.prev(),
            firstItem = items.first(),
            lastItem = items.last();
        if ($this.hasClass('slider__controls-up')) {
            // вперед
            if (nextItem.length) {
                moveSlide(nextItem, 'forward', container);
            } else {
                moveSlide(firstItem, 'forward', container);
            }
        }
        if ($this.hasClass('slider__controls-down')) {
            // назад
            if (prevItem.length) {
                moveSlide(prevItem, 'back', container);
            } else {
                moveSlide(lastItem, 'back', container);
            }
        }
    });
    var createDots = function createDots() {
        var container = $('.slider__wrap'),
            dots = '<li class="slider-dots__item"><a class="slider-dots__link" href="#"></a></li>';
        container.each(function () {
            var $this = $(this),
                items = $this.find('.slider__item'),
                dotsContainer = $this.find('.slider-dots');
            items.each(function () {
                dotsContainer.append(dots);
            });
            activeDot(dotsContainer);
        });
    };
    createDots();
    $('.slider-dots__link').on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
            dots = $this.closest('.slider-dots').find('.slider-dots__item'),
            activeDot = dots.filter('.active'),
            dot = $this.closest('.slider-dots__item'),
            currentDotNdx = dot.index(),
            direction = activeDot.index() < currentDotNdx ? 'forward' : 'back',
            reqItem = $this.closest('.slider__wrap').find('.slider__item').eq(currentDotNdx);

        moveSlide(reqItem, direction, $('.slider__wrap'));
    });
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    $('.sidebar__trigger').on('click', function (e) {
        e.preventDefault();
        $('.sidebar').css('width', '60%');
        $('.sidebar').addClass('active');
    });
    $(document).on('click', function (e) {
        var $this = $(e.target);
        if (!$this.closest('.sidebar').length && $('.sidebar').hasClass('active')) {
            $('.sidebar').css('width', '0');
            $('.sidebar').removeClass('active');
        }
    });

    // scroll
    $('.side-nav__link').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 50,
            $this = $(this);
        $('html').animate({ scrollTop: top }, 800, function () {
            $this.parent().addClass('side-nav__item_active').siblings().removeClass('side-nav__item_active');
        });
    });
    $(window).on('scroll', function () {
        if (window.innerWidth > 768 && $('#article_1').length) {
            var topScroll = $('#article_1').offset().top;
            $(window).scrollTop() > topScroll ? $('.sidebar').addClass('sidebar_fixed') : $('.sidebar').removeClass('sidebar_fixed');
        }
        var menu_selector = ".side-nav";
        var scroll_top = $(document).scrollTop();
        $(menu_selector + " .side-nav__item").each(function () {
            var hash = $(this).children().attr("href");
            var target = $(hash);
            if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                $(menu_selector + " side-nav__item.side-nav__item_active").removeClass("side-nav__item_active");
                $(this).addClass("side-nav__item_active");
            } else {
                $(this).removeClass("side-nav__item_active");
            }
        });
    });
    ////////////////////////////////////////////////////////

    // var blog=document.querySelector('#blog');
    // var listTextBlock=blog.querySelectorAll('.text-block');
    // var menuBlog=document.querySelector('#menu-blog');

    // listTextBlock.forEach(function(item,i){ 
    // //Добавляем пункты меню для каждого текстового блока в блоге
    // item.id="text"+(i+1).toString();
    // var newLi=document.createElement('li');
    // newLi.id="menu-"+item.id;
    // newLi.innerText=item.querySelector('h3').innerText;  
    // // первый пункт активный
    // if (i==0) {
    //     newLi.classList.add('menu-blog-active');
    // }
    // menuBlog.appendChild(newLi);
    // });

    // //обработчик события прокрутки блога
    // blog.addEventListener('scroll', function(){
    // // по всем текстовым блокам блога
    //     listTextBlock.forEach(function(item, i){
    //     // начало оболасти активности блока
    //     var startActive=blog.scrollTop;
    //     // конец области активности блока
    //     var endActive=blog.scrollTop+100;
    //     //если верхняя граница текстового блока сверху в верхних 100px блога, то блок активный
    //         if (startActive <= item.offsetTop && endActive > item.offsetTop) {
    //         setActiveTextBlok(listTextBlock[i]);
    //     }
    // });
    // })

    // // назначаем активный класс для бока и его пункта меню
    // function setActiveTextBlok(curTextBlock) {
    // listTextBlock.forEach(function(item){
    //     if (item != curTextBlock){
    //     //удаляем активный класс у всех остальных текстовых блоков
    //     item.classList.remove('text-block-active');
    //     document.querySelector('#menu-'+item.id).classList.remove('menu-blog-active');
    //     }
    // });
    // //добавляем активный класс к текущему текстовому блоку
    // curTextBlock.classList.add('text-block-active');  
    // document.querySelector('#menu-'+curTextBlock.id).classList.add('menu-blog-active');
    // }
    //////////////////////////////////////////////////////////////////


    // var menu_selector = ".side-nav__list"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
    // function onScroll(){
    //     var scroll_top = $(document).scrollTop(),
    //         menuLink = $(menu_selector).find('a');
    //     $(menuLink).each(function(){
    //         var hash = $(this).attr("href");
    //         var target = $(hash);
    //         if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
    //             $(menuLink).parent('.side-nav__item_active').removeClass('side-nav__item_active');
    //             $(this).parent().addClass('side-nav__item_active');
    //         } else {
    //             $(this).parent().removeClass('side-nav__item_active');
    //         }
    //     });
    // }

    // $(document).on('scroll', onScroll);

    // $("a[href^=#]").click(function(e){
    //     e.preventDefault();

    //     $(document).off("scroll");
    //     $(menu_selector + " a.active").removeClass("active");
    //     $(this).addClass("active");
    //     var hash = $(this).attr("href");
    //     var target = $(hash);

    //     $("html, body").animate({
    //         scrollTop: target.offset().top
    //     }, 500, function(){
    //         window.location.hash = hash;
    //         $(document).on("scroll", onScroll);
    //     });

    // });
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var section = document.querySelector('.about');
    var circles = document.getElementsByClassName('circles');
    window.onscroll = function () {
        if (section && window.pageYOffset > section.offsetTop - 450) {
            for (var i = 0; i < circles.length; i++) {
                circles[i].classList.remove('circles_clear');
            }
        } else {
            for (var i = 0; i < circles.length; i++) {
                circles[i].classList.add('circles_clear');
            }
        }
    };
};

/***/ })
/******/ ]);