import anime from "animejs";

function preloaderAnime() {
  // Set the initial state of the circles
  document.querySelectorAll('.preloader-circle').forEach(circle => {
    circle.style.transform = 'scale(0)';
    circle.style.opacity = '0';
  });

  anime({
    targets: '.preloader-circle',
    scale: [
      { value: 0.5, duration: 0 }, // Initial state
      { value: 1, duration: 1550, easing: 'easeOutQuart' }
    ],
    opacity: [
      { value: 0, duration: 0 }, // Initial state
      { value: 0.5, duration: 1000, easing: 'easeOutExpo' }, // Fade in
      { value: 0, duration: 500, easing: 'easeInOutSine' } // Fade out (ends with scale)
    ],
    delay: anime.stagger(-200, { start: 300 * (document.querySelectorAll('.preloader-circle').length - 1) }),
    complete: function() {
      document.querySelector('#loader-trigger').click();
    }
  });
  
}

export default preloaderAnime;
