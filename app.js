// NovaLeads - Landing Page
// Navbar sticky, mobile menu, and active section highlighting

(function () {
  'use strict';

  // Navbar shadow on scroll
  var nav = document.getElementById('nav');

  // Mobile menu
  var burger = document.getElementById('burger');
  var drawer = document.getElementById('drawer');
  var iconOpen = document.getElementById('burgerOpen');
  var iconClose = document.getElementById('burgerClose');

  // Button text based on active language
  function label(key, fallback) {
    return window.I18N ? window.I18N.t(key) : fallback;
  }

  function syncBurgerLabel() {
    if (!burger || !drawer) return;
    var open = !drawer.hidden;
    burger.setAttribute('aria-label', open
      ? label('nav.menuClose', 'Close menu')
      : label('nav.menuOpen', 'Open menu'));
  }

  function setMenu(open) {
    if (!drawer || !burger) return;
    drawer.hidden = !open;
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (iconOpen) iconOpen.hidden = open;
    if (iconClose) iconClose.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
    syncBurgerLabel();
  }

  // Update label on language change
  if (window.I18N) window.I18N.onChange(syncBurgerLabel);

  if (burger) {
    burger.addEventListener('click', function () { setMenu(drawer.hidden); });
  }

  if (drawer) {
    drawer.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && drawer && !drawer.hidden) setMenu(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 860 && drawer && !drawer.hidden) setMenu(false);
  });

  // Active section in navbar
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
  var sections = navLinks
    .map(function (link) {
      var el = document.getElementById(link.getAttribute('href').slice(1));
      return el ? { link: link, el: el } : null;
    })
    .filter(Boolean);

  function onScroll() {
    if (nav) nav.classList.toggle('is-stuck', window.scrollY > 8);

    var probe = window.scrollY + (window.innerHeight * 0.35);
    var active = null;

    sections.forEach(function (item) {
      if (item.el.offsetTop <= probe) active = item.link;
    });

    navLinks.forEach(function (link) {
      link.classList.toggle('is-active', link === active);
    });
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { onScroll(); ticking = false; });
  }, { passive: true });

  onScroll();
})();