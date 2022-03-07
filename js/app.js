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

const tl = gsap.timeline({defaults:{duration: 0.75, ease: 'power1.out'}})

// gsap.set('.hero__txt1',{display: block})

tl.fromTo('.hero__txt1',{x: -10, opacity: 0}, {x: 0, opacity: 1})