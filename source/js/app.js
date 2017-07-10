//preloader (не понял как?))
(function () {
  let percentTotal = 0;
  const preloader = $('.preloader');

  const imgPaths = $('*').map((ndx, element) => {
    const isImg = $(element).is('img');
    const background = $(element).css('background-image');

    let path = '';

    if (background != 'none') {
      path = background.replace('url("', '').replace('")', '');
    }
    if (isImg) {
      path = $(element).attr('src');
    }
    if (path) return path;
  });
  const setPercents = (total, current) => {
    const percents = Math.ceil(current / total * 100);

    $('.preloader__percents').text(`${percents}%`);

    if (percents >= 100) preloader.fadeOut();
  }
  const loadImages = (images) => {
    if (!images.length) return;

    images.forEach((img, i, images) => {
      const fakeImg = $('<img>', {
        attr: {
          src: img
        }
      });
      fakeImg.on('load error', () => {
        percentTotal++;
        setPercents(images.length, percentTotal);
      });
    })
  }
  const imgs = imgPaths.toArray();
  $(document).ready(() => {
    loadImages(imgs);
  });
}());
////////////////////////////////////////////////////
(function () {
  let flipper = document.querySelector('.flipper-wrap'),
    button = document.querySelector('.auth-btn'),
    authLink = document.querySelector('.auth__link');
  if (button, authLink) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      flipper.classList.toggle('clicked');
      button.classList.toggle('auth-btn__hidden');
    })
    authLink.addEventListener('click', function (e) {
      e.preventDefault();
      flipper.classList.toggle('clicked');
      button.classList.toggle('auth-btn__hidden');
    })
  };
}());
///////////////////////////////////////////////////////////
var parallax = (function () {
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

}());
if (window.innerWidth >= 1200) {
  window.addEventListener('scroll', function () {
    var wScroll = window.pageYOffset;
    parallax.init(wScroll);
  })
} else {
  window.removeEventListener('scroll', function () {
    var wScroll = window.pageYOffset;
    parallax.init(wScroll);
  })
}

////////////////////////////////////////////////////
(function () {
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
}());
// validation
var validation =
  (function () {
    var memory = [];
    var validateForm = function (form) {
      // навешиваем обработчики и запоминаем
      var id = form.attr('id');
      if (memory[id] == void 0) {
        memory[id] = true;
        setUpListener(form);
      }
      // проверяем поля на пустоту
      var elements = form.find('input[data-content]').not('input[type="hidden"]');
      var valid = true;
      $.each(elements, function (index, element) {
        var $element = $(element);
        var value = $element.val();
        // сам момент проверки
        if (!value.length) {
          addError($element);
          valid = false;
        }
      });
      return valid;
    };
    // навешиваем обработчки
    function setUpListener(form) {
      // прослушиваем все события и удаляем ошибку
      $(form).on('keydown', '.error', removeError);
      $(form).on('click', '.error', removeError);
      $(form).on('reset', clearForm);
    };
    // ф-ция удаления класса с элемента с ошибкой
    function removeError(element) {
      $(this).removeClass('error');
    };
    // добавление класса error
    function addError(element) {
      element.addClass('error');
      createQtip(element, element.data('position'));
    };
    // удаление класса error и обводки по reset
    function clearForm() {
      var $form = $(this);
      $form.find('.error').removeClass('error');
      $form.find('input[data-content]').trigger('hideTooltip');
    };
    // создаем тултипы
    function createQtip(element, direction) {
      direction = direction || 'left';
      position = {
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
          text: function () {
            return $(this).data('content');
          }
        },
        show: {
          event: 'show'
        },
        hide: {
          event: 'keydown click hideTooltip',
          event: 'unfocus'
        },
        position: position[direction],
        style: {
          classes: 'qtip-default qtip-rounded',
          tip: {
            height: 7,
            widht: 10
          }
        }
      }).trigger('show');
    }
    return {
      validateForm: validateForm
    };
  }());

// form //
var MyForm = function (form, url) {
  this.form = form;
  this.url = url;
  this.init = function () {
    this.addListener(this.form);
  }
};
MyForm.prototype.addListener = function (form) {
  $('.form').on('submit', $.proxy(this.submitForm, this));
};
MyForm.prototype.submitForm = function (e) {
  e.preventDefault();
  var $form = $(this.form),
    defObject = this.ajaxForm($form, this.url);
  if (defObject) {
    defObject.done(function (ans) {
      // var mes = ans.mes, status = ans.status;

      if ( /*status === 'OK'*/ ans.status) {
        // $form.trigger('reset');
        // $form.find('#success').text(mes).show();
        $.fancybox.open([{
          href: '#success'
        }], {
          type: "inline",
          maxWidth: 280,
          fitToView: false,
          padding: 0,
          afterClose: function () {
            $form.trigger('reset');
          }
        })
      } else {
        // $form.find('#error').text(mes).show();
        $.fancybox.open([{
          href: '#error'
        }], {
          type: "inline",
          maxWidth: 280,
          fitToView: false,
          padding: 0,
          afterClose: function () {
            $form.trigger('reset');
          }
        })
      }
      $(".modal__button").on("click", function (e) {
        e.preventDefault();
        $.fancybox.close();

      });
    });
  }
};

MyForm.prototype.ajaxForm = function (form, url) {
  if (!validation.validateForm(form)) {
    return false;
  }
  var data = form.serialize();
  return $.ajax({
    type: 'POST',
    url: this.url,
    dataType: 'JSON',
    data: data
  }).fail(function (ans) {
    console.log('Проблемы в PHP');
    // form.find('#error').text('На сервере произошла ошибка').show();
  });
}
//
if ($('#feedback').length) {
  var formMail = new MyForm($('#feedback'), '/../../mailer.php');
  formMail.init();
};

// main menu
(function () {
  $('.nav-trigger').on('click', function (e) {
    e.preventDefault();
    $('.nav-trigger').toggleClass('nav-trigger_active')
    $('.main-menu').slideToggle(300);
  })
}());

// GoogleMap
var mapGoogle = (function () {
  var init = function () {
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
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{
            "color": "#f2f2f2"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{
              "saturation": -100
            },
            {
              "lightness": 45
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
              "color": "#0465b0"
            },
            {
              "visibility": "on"
            }
          ]
        }
      ]
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

  }
  return {
    init: init
  };
}())

if ($('#map').length) {
  google.maps.event.addDomListener(window, 'load', mapGoogle.init);
}