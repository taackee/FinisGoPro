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

  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 5);
  });

  const abTxt = document.querySelector('.about__title')
  const letters = abTxt.textContent.split("")

  abTxt.textContent = ""

  letters.forEach((letter) => {
    abTxt.innerHTML += '<span class="letter">' + letter + '</span>'
  })
  gsap.set('.letter', {display: 'inline-block'})
  gsap.registerPlugin(ScrollTrigger)  
  // const abTl = gsap.timeline({defaults: {duration: 0.75, ease: 'power1.out'}})
  gsap.fromTo('.letter',{y: 100}, {scrollTrigger: {
    trigger: '.about__title',
    start: 'center 90%'
  }, y: 0, stagger: 0.1})