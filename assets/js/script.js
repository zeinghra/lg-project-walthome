'use strict';

/*
 *  navbar toggler in mobile
 */

const /**  {Node Element} */ $navbar = document.querySelector('[data-navbar]');
const /**  {Node Element} */ $nabarToggler =
    document.querySelector('[data-nav-toggler]');

$nabarToggler.addEventListener('click', () =>
  $navbar.classList.toggle('active')
);

/*
 * Header scroll state
 */

const /** { Node Element } */ $header = document.querySelector('[data-header]');

window.addEventListener('scroll', () => {
  $header.classList[window.scrollY > 50 ? 'add' : 'remove']('active');
});

/*
 *  Add to favorite button toggler
 */

const /** { Node Element } */ $toggleBtns =
    document.querySelectorAll('[data-toggle-btn]');

$toggleBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});
