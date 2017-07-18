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
export default () => {
    var activeDot = function(container) {
        var items = container.closest('.slider__wrap').find('.slider__item');
            container.find('.slider-dots__item').eq(items.filter('.active').index()).addClass('active').siblings().removeClass('active');
    };
    var flag = true;
    var moveSlide = function(item, direction, container) {
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
    $('.slider__control').on('click', function(e){
        e.preventDefault();

        var $this = $(this),
        container = $('.slider__wrap'),
        items = container.find('.slider__item'),
        activeItem = items.filter('.active'),
        nextItem = activeItem.next(),
        prevItem = activeItem.prev(),
        firstItem = items.first(),
        lastItem = items.last();
        if($this.hasClass('slider__controls-up')) { // вперед
            if (nextItem.length) {
                moveSlide(nextItem, 'forward', container);
            }
            else {
                moveSlide(firstItem, 'forward', container);
            }
        } 
        if($this.hasClass('slider__controls-down')) { // назад
            if (prevItem.length) {
                moveSlide(prevItem, 'back', container);
            }
            else {
                moveSlide(lastItem, 'back', container);
            }
        }
    });
    var createDots = function(){
        var container = $('.slider__wrap'),
            dots = '<li class="slider-dots__item"><a class="slider-dots__link" href="#"></a></li>';
        container.each(function(){
            var $this = $(this),
                items = $this.find('.slider__item'),
                dotsContainer = $this.find('.slider-dots');
            items.each(function(){
                dotsContainer.append(dots);
            })
            activeDot(dotsContainer);
        })
    };
    createDots();
    $('.slider-dots__link').on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
        dots = $this.closest('.slider-dots').find('.slider-dots__item'),
        activeDot = dots.filter('.active'),
        dot = $this.closest('.slider-dots__item'),
        currentDotNdx = dot.index(),
        direction = (activeDot.index() < currentDotNdx) ? 'forward' : 'back',
        reqItem = $this.closest('.slider__wrap').find('.slider__item').eq(currentDotNdx);

            moveSlide(reqItem, direction, $('.slider__wrap'));
    });
}