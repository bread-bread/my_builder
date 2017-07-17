export default () => {
  $('.nav-trigger').on('click', function (e) {
    e.preventDefault();
    $('.nav-trigger').toggleClass('nav-trigger_active')
    $('.main-menu').slideToggle(300);
  })
};