export default () => {
    let section = document.querySelector('.about');
    let circles = document.getElementsByClassName('circles');
    window.onscroll = function(){
      if(section && window.pageYOffset > (section.offsetTop - 450)) {
        for(var i = 0; i < circles.length; i++){
            circles[i].classList.remove('circles_clear');
        }
      } else {
        for(var i = 0; i < circles.length; i++){
            circles[i].classList.add('circles_clear');
        }
      }
    };
};