// let items = $('.slider__controls-listDown').find('.slider__controls-item');
// let activeItem = items.filter('.active');


// ------------------------------------------ // ---------------------------------------------- //
const duration = 500;
let counter = 1;
let inProgress = false;

const moveSlides = function(container, direction){
    let items = container.find('.slider__controls-item');
    let activeItem = items.filter('.active');
    let strafeTopPercesnts = direction === 'down' ? 100 : -100;

  if (counter >= items.length) counter = 0;

    const reqItem = items.eq(counter);

  activeItem.animate({
    'top': `${strafeTopPercesnts}%`
  }, duration);

  reqItem.animate({
    top: 0
  }, duration, function () {
    activeItem.removeClass('active')
      .css('top', `${-strafeTopPercesnts}%`);
    $(this).addClass('active');

    inProgress = false;
  });
}

const run = () => {
  $('.slider__controls-up').on('click', function (e) {
    e.preventDefault()
    if (inProgress) return;
    inProgress = true;

    moveSlides($('.slider__controls-listDown'), 'down');
    moveSlides($('.slider__controls-listUp'), 'up');
    counter++;

  });
  $('.slider__controls-down').on('click', function (e) {
    e.preventDefault()
    if (inProgress) return;
    inProgress = true;
    
    moveSlides($('.slider__controls-listUp'), 'up');
    moveSlides($('.slider__controls-listDown'), 'down');
    counter++;

  });
}

export default run;