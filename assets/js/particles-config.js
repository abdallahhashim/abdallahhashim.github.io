/* Particles network — نقط موصلة بتتحرك مع الماوس زي 0xislvm */
(function initParticles() {
  function start() {
    if (typeof particlesJS === 'undefined') return false;
    var el = document.getElementById('particles-js');
    if (!el) return true;
    particlesJS('particles-js', {
      particles: {
        number: { value: 90, density: { enable: true, value_area: 800 } },
        color: { value: ['#00ff9d', '#ffffff', '#00b4ff'] },
        shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
        opacity: { value: 0.75, random: true, anim: { enable: false } },
        size: { value: 3.5, random: true, anim: { enable: false } },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#00ff9d',
          opacity: 0.35,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.4,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 0.7 } },
          push: { particles_nb: 4 },
          repulse: { distance: 120, duration: 0.4 }
        }
      },
      retina_detect: true
    });
    return true;
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (start()) return;
    // CDN لسه بيحمل — حاول تاني
    var tries = 0;
    var t = setInterval(function () {
      tries++;
      if (start() || tries > 20) clearInterval(t);
    }, 300);
  });
})();
