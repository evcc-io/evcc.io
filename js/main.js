(() => {
  // <stdin>
  function updateTheme(isDark) {
    const $html = document.querySelector(":root");
    $html.classList.toggle("dark", isDark);
  }
  var darkModeMatcher = window.matchMedia("(prefers-color-scheme: dark)");
  darkModeMatcher.addEventListener("change", () => updateTheme(darkModeMatcher.matches));
  updateTheme(darkModeMatcher.matches);
  document.querySelectorAll("[data-theme]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      updateTheme(el.getAttribute("data-theme") === "dark");
    });
  });
})();
