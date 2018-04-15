function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 5,
        center: { lat: 52.4063, lng: 16.9251 }
    };
    var myMap = new google.maps.Map(element, options);

    var marker = new google.maps.Marker({
        position: { lat: 52.4063, lng: 16.9251 },
        map: myMap
    });
}

$('document').ready(function() {

    $('.testamonials').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        arrows: false,
        centerPadding: '10px',
        zIndex: -1000,
        slidesToShow: 3,
        responsive: [{
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode: true,
                    centerPadding: '80px',
                    slidesToShow: 1
                }
            },
        ]
    });

//sliding menu
var touch = $('.menu');
  var ul = $('.nav');

  $(touch).on('click', function(e){
    e.preventDefault();
    ul.slideToggle();
  });
  $(window).resize(function(){
    var wid = $(window).width();
    if(wid > 1173 && ul.is(':hidden')){
      ul.removeAttr('style');

    }
  });
 //from menu to cross
var Menu = {
  
  el: {
    ham: $('.menu'),
    menuTop: $('.menu-top'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
  }
};

Menu.init();
});