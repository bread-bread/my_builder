export default () => {
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
};