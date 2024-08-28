function updateTheme(isDark) {
  const $html = document.querySelector(":root");
  $html.classList.toggle("dark", isDark);
}

const darkModeMatcher = window.matchMedia("(prefers-color-scheme: dark)");
darkModeMatcher.addEventListener("change", () =>
  updateTheme(darkModeMatcher.matches)
);
updateTheme(darkModeMatcher.matches);

document.querySelectorAll("[data-theme]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    updateTheme(el.getAttribute("data-theme") === "dark");
  });
});

document
  .querySelectorAll("a[href^='./#'], a[href^='../en/#']")
  .forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(
        el.getAttribute("href").split("#").pop()
      );
      console.log(el.getAttribute("href").split("#").pop());
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
