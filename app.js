function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var tp = target.getBoundingClientRect().top;
  var sp = window.pageYOffset;
  var distance = tp - sp;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, sp, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var sec1 = document.querySelector(".section1");
sec1.addEventListener("click", function () {
  smoothScroll(".section2", 1000);
});
var sec2 = document.querySelector(".section2");
sec2.addEventListener("click", function () {
  smoothScroll(".section1", 1000);
});
