/* ===================================================
   DarkExpert.com — Main JS
   =================================================== */

(function () {
  'use strict';

  // --- Mobile nav toggle ---
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    // Close mobile nav on link click
    links.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  // --- Active nav highlighting ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

  if (sections.length && navLinks.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -75% 0px'
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // --- Copy to clipboard ---
  document.querySelectorAll('.code-block__copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      if (!text) return;

      navigator.clipboard.writeText(text).then(function () {
        var textEl = btn.querySelector('.code-block__copy-text');
        var original = textEl.textContent;
        textEl.textContent = 'Copied';
        btn.classList.add('copied');
        setTimeout(function () {
          textEl.textContent = original;
          btn.classList.remove('copied');
        }, 1500);
      });
    });
  });

})();
