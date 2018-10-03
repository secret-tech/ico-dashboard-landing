import ScrollReveal from 'scrollreveal';
import Siema from 'siema';
import zenscroll from 'zenscroll';

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
  delay: 100,
  duration: 300,
  distance: '-80px'
});

sr.reveal('.js-reveal-landing--name', {
  delay: 200,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-landing--description', {
  delay: 300,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-landing--buttons', {
  delay: 400,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-carousel', {
  delay: 500,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-carousel--control', {
  delay: 200,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-features', {
  delay: 200,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-feature-1', {
  delay: 250,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-feature-2', {
  delay: 300,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-feature-3', {
  delay: 350,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-feature-4', {
  delay: 400,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-feature-5', {
  delay: 450,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-feature-6', {
  delay: 500,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-feature-7', {
  delay: 550,
  duration: 300,
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

sr.reveal('.js-reveal-about--title', {
  delay: 200,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-about--text', {
  delay: 300,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-benefit--icon-1', {
  delay: 200,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-benefit--icon-2', {
  delay: 250,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-benefit--icon-3', {
  delay: 300,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-benefit--title-1', {
  delay: 250,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-benefit--title-2', {
  delay: 300,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-benefit--title-3', {
  delay: 350,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-benefit--text-1', {
  delay: 300,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-benefit--text-2', {
  delay: 350,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-benefit--text-3', {
  delay: 400,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-contacts--title', {
  delay: 200,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-contact-1', {
  delay: 250,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-contact-2', {
  delay: 300,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-contact-3', {
  delay: 350,
  duration: 300,
  distance: '80px'
});

sr.reveal('.js-reveal-donate', {
  delay: 300,
  duration: 500,
  distance: '80px'
});

sr.reveal('.js-reveal-footer', {
  delay: 200,
  duration: 300,
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
    draggable: false,
    loop: true
});

const prevButton = document.querySelector('.js-carousel-prev');
const nextButton = document.querySelector('.js-carousel-next');

prevButton.addEventListener('click', () => siema.prev());
nextButton.addEventListener('click', () => siema.next());

// smooth scroll
const contactsSection = document.querySelector('.js-contacts-section');
const contactsButton = document.querySelector('.js-contacts-button');
const customButton = document.querySelector('.js-custom-button');

contactsButton.addEventListener('click', () => zenscroll.to(contactsSection));
customButton.addEventListener('click', () => zenscroll.to(contactsSection));

const topbarSection = document.querySelector('.js-topbar-section');
const backToTopButton = document.querySelector('.js-toTop-button');

backToTopButton.addEventListener('click', () => zenscroll.to(topbarSection));
