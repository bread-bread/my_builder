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
export default () => {
    var moveSlide = function (container, slideNum) {
        var items = container.find('.slider__item'),
            activeSlide = items.filter('.active'),
            reqItem = items.eq(slideNum),
            reqIndex = reqItem.index(),
            list = container.find('.slider__list'),
            duration = 500;
        if (reqItem.length) {
            list.animate({
                'left': -reqIndex * 100 + '%'
            }, duration, function () {
                activeSlide.removeClass('active');
                reqItem.addClass('active');
                $('.slider-dots__item').eq(slideNum).addClass('active').siblings().removeClass('active');
            });
        }
    }
    $('.slider__control').on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
            container = $('.slider__wrap'),
            items = $('.slider__item', container),
            activeItem = items.filter('.active'),
            nextItem = activeItem.next(),
            prevItem = activeItem.prev(),
            existedItem, edgeItem, reqItem;
        if ($this.hasClass('slider__controls-up')) { //слайд вперед
            existedItem = activeItem.next();
            edgeItem = items.first();
        }
        if ($this.hasClass('slider__controls-down')) { //слайд назад
            existedItem = activeItem.prev();
            edgeItem = items.last();
        }
        reqItem = existedItem.length ? existedItem.index() : edgeItem.index();
        moveSlide(container, reqItem);
    })
    $('.slider-dots__link').on('click', function(e) {
      e.preventDefault();
      var $this = $(this),
          href = parseInt($(this).attr('href')),
          container = $('.slider__wrap');
      moveSlide(container, href);
    })
}