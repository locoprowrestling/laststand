// The Last Stand at the Lodge: results page behavior.
// The pre-show countdown was retired after the event (August 30, 2026).
(function () {
  // Click-to-play YouTube facades. The poster image and the link work without
  // JavaScript; with it, the first click swaps in the embed on demand.
  var facades = document.querySelectorAll('.video-facade[data-video-id]');
  for (var i = 0; i < facades.length; i += 1) {
    facades[i].addEventListener('click', function (event) {
      var facade = event.currentTarget;
      var id = facade.getAttribute('data-video-id');
      if (!id) return;
      event.preventDefault();
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
      iframe.title = facade.getAttribute('aria-label') || 'YouTube video';
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      iframe.setAttribute('allowfullscreen', '');
      while (facade.firstChild) facade.removeChild(facade.firstChild);
      facade.appendChild(iframe);
      facade.classList.add('is-playing');
    });
  }

  // Scroll reveal. Opt-in per element, skipped for reduced motion, and never
  // required for the content to be visible.
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll('.result, .aftermath-card, .venue-card, .about-text, .about-media, .poster-figure');
  var observer = new IntersectionObserver(function (entries) {
    for (var j = 0; j < entries.length; j += 1) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add('is-visible');
        observer.unobserve(entries[j].target);
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  for (var k = 0; k < targets.length; k += 1) {
    targets[k].classList.add('reveal');
    observer.observe(targets[k]);
  }
}());
