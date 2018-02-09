export default () => {
    let flipper = document.querySelector('.flipper-wrap'),
      button = document.querySelector('.auth-btn'),
      authLink = document.querySelector('.auth__link'),
      wrap = document.querySelector('.hello-wrap');
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
    if (wrap) {
      wrap.addEventListener('click', function (e) {
        if (e.target == this && flipper.classList.contains('clicked') && !e.target.classList.contains('auth-btn')) {
          flipper.classList.toggle('clicked');
          button.classList.toggle('auth-btn__hidden');
        }
      })
    }
};