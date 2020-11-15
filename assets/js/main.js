function toggleDarkmode() {
  document.documentElement.classList.toggle("dark");
}

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
darkModeMediaQuery.addListener((e) => {
  const isDark = e.matches;
  document.documentElement.classList.toggle("dark", isDark);
});

document.querySelector(".darkmode").addEventListener("click", toggleDarkmode);
