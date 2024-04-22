const animations = [
  { selector: '.animate-on-load-first', delay: 500 },
  { selector: '.animate-on-load-second', delay: 1200 },
  { selector: '.animate-on-load-third', delay: 1900 }
];

function applyAnimation(selector, delay) {
  const elementsToAnimate = document.querySelectorAll(selector);

  elementsToAnimate.forEach(function(element) {
      setTimeout(function() {
          element.style.opacity = '1';
      }, delay);
  });
}

document.addEventListener('DOMContentLoaded', function() {

  animations.forEach(function(animation) {
    applyAnimation(animation.selector, animation.delay);
  });
  
  const flashingElements = document.querySelectorAll('.animate-light');
  flashingElements.forEach(function(element) {
    setTimeout(function() {
        element.style.opacity = '1';
    }, 4000); 
  });

});