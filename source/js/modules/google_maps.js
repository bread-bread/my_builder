export default () => {
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
}