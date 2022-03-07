$('a.nav__link').hover(
    function () {
      $(this).siblings('a').addClass('rest');
    },
    function () {
      $(this).siblings('a').removeClass('rest');
    }
);

const alterNav = document.querySelector('.alter')

const burger = document.querySelector('.nav__burger')
burger.addEventListener('click', function () {
    this.classList.toggle('active');
    alterNav.classList.toggle('open');
  });