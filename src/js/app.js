import ScrollReveal from 'scrollreveal';
import Siema from 'siema';

// scroll
window.sr = ScrollReveal({
  duration: 300,
  reset: false,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  scale: 1,
  opaicty: 1,
  viewFactor: 0.00001
});

// landing
sr.reveal('.js-reveal-topbar', {
  delay: 400,
  duration: 300,
  distance: '-80px'
});

sr.reveal('.js-reveal-landing', {
  delay: 100,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-buttons', {
  delay: 200,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-screenshots', {
  delay: 300,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-benefits', {
  delay: 300,
  duration: 500,
  distance: '80px'
});

sr.reveal('.js-reveal-free', {
  delay: 500,
  duration: 500,
  distance: '80px'
});

sr.reveal('.js-reveal-team-title', {
  delay: 100,
  duration: 500,
  distance: '80px'
});

sr.reveal('.js-reveal-team-first', {
  delay: 200,
  duration: 500,
  distance: '80px'
});

sr.reveal('.js-reveal-team-second', {
  delay: 300,
  duration: 500,
  distance: '80px'
});

sr.reveal('.js-reveal-team-third', {
  delay: 400,
  duration: 500,
  distance: '80px'
});

sr.reveal('.js-reveal-contacts', {
  delay: 200,
  duration: 500,
  distance: '80px'
});

sr.reveal('.js-reveal-donate', {
  delay: 300,
  duration: 500,
  distance: '80px'
});

// siema
const siema = new Siema({
    selector: '.js-carousel',
    duration: 500,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    perPage: 1,
    startIndex: 0,
    threshold: 20,
    draggable: true,
    loop: false
});

const dots = [].map.call(document.querySelectorAll('.js-carousel--dot'), obj => obj);
const slides = [].map.call(document.querySelectorAll('.js-carousel--screen'), obj => obj);

const setActive = (collection, index) => {
    const element = collection[index];
    const className = element.className
    collection.map(el => el.classList.remove('active'));
    element.classList.toggle('active');
}

setActive(dots, 0);
setActive(slides, 0);

dots.map((dot, i) => {
    dot.addEventListener('click', () => {
        setActive(dots, i);
        setActive(slides, i);
        return siema.goTo(i);
    });
});
