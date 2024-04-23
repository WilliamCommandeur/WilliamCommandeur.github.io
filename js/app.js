const animations = [
  { selector: '.animate-on-load-first', delay: 500 },
  { selector: '.animate-on-load-second', delay: 1200 },
  { selector: '.animate-on-load-third', delay: 1900 },
  { selector: '.animate-on-load-fourth', delay: 2600 },
  { selector: '.animate-on-load-fifth', delay: 3300},
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
  
  setTimeout(function() {
        document.querySelector('#line').classList.add('line-animation');
    }, 1200);

});