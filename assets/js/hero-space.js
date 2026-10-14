/* Hacker mouse parallax — الكوكب والنص بيتحركوا مع الماوس */
document.addEventListener('DOMContentLoaded', function () {
  var hero = document.getElementById('hero');
  var planet = document.getElementById('planet');
  if (!hero || !planet) return;

  var baseY = -50; // planet uses translateY(-50%)
  hero.addEventListener('mousemove', function (e) {
    var r = hero.getBoundingClientRect();
    var x = (e.clientX - r.left) / r.width - 0.5;   // -0.5 .. 0.5
    var y = (e.clientY - r.top) / r.height - 0.5;
    planet.style.transform =
      'translateY(' + baseY + '%) translate(' + (x * 46) + 'px,' + (y * 46) + 'px)';
    var content = hero.querySelector('.hero-content');
    if (content) {
      content.style.transform =
        'translate(' + (x * -16) + 'px,' + (y * -16) + 'px)';
    }
    var floats = hero.querySelectorAll('.code-float');
    floats.forEach(function (f, i) {
      var depth = (i % 3 + 1) * 12;
      f.style.marginLeft = (x * depth) + 'px';
      f.style.marginTop = (y * depth) + 'px';
    });
  });

  // click = pulse على الكوكب
  hero.addEventListener('click', function () {
    planet.style.boxShadow =
      '0 0 180px rgba(0,255,157,0.45), 0 0 340px rgba(0,180,255,0.2), inset -50px -40px 120px rgba(0,0,0,0.95)';
    setTimeout(function () { planet.style.boxShadow = ''; }, 350);
  });
});
