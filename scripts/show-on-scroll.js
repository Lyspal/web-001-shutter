// author: Sylvain Laporte
// program: show-on-scroll.js
// date: 2019-08-08
// object: Implements animations on scroll.
// reference: https://cssanimation.rocks/scroll-animations/

const callback = function(entries) {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-visible");
    });
  };
  
const observer = new IntersectionObserver(callback);
  
const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(function(target) {
    observer.observe(target);
});