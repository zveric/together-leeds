// Together Leeds — small progressive enhancements. The site works without JavaScript.
(function () {
  "use strict";

  // ---- Quick exit ----------------------------------------------------------
  // Replaces the current history entry so the Back button doesn't return here.
  // Shortcut: press Shift three times quickly (same pattern as GOV.UK "Exit this page").
  var SAFE_URL = "https://www.bbc.co.uk/weather";

  function quickExit(event) {
    if (event) event.preventDefault();
    document.documentElement.style.visibility = "hidden";
    window.location.replace(SAFE_URL);
  }

  document.querySelectorAll("[data-quick-exit]").forEach(function (el) {
    el.addEventListener("click", quickExit);
  });

  var shiftPresses = [];
  document.addEventListener("keyup", function (e) {
    if (e.key !== "Shift") { shiftPresses = []; return; }
    var now = Date.now();
    shiftPresses = shiftPresses.filter(function (t) { return now - t < 1000; });
    shiftPresses.push(now);
    if (shiftPresses.length >= 3) quickExit();
  });

  // ---- Language buttons ----------------------------------------------------
  // Opens this page through Google Translate in the chosen language.
  // (Only works once the site is live on the web, e.g. on GitHub Pages.)
  document.querySelectorAll("[data-translate]").forEach(function (link) {
    var target = link.getAttribute("data-translate");
    var url = "https://translate.google.com/translate?sl=en&u=" + encodeURIComponent(window.location.href);
    if (target) url += "&tl=" + target;
    link.href = url;
  });
})();
