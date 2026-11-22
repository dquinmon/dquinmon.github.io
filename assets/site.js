(function () {
  var btn = document.querySelector(".menu-btn");
  var panel = document.getElementById("menu-panel");
  if (!btn || !panel) return;
  btn.addEventListener("click", function () {
    var open = panel.hasAttribute("hidden");
    if (open) { panel.removeAttribute("hidden"); } else { panel.setAttribute("hidden", ""); }
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
