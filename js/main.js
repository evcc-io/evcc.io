(() => {
  // <stdin>
  function updateTheme(isDark) {
    const $html = document.querySelector(":root");
    $html.classList.toggle("dark", isDark);
  }
  var darkModeMatcher = window.matchMedia("(prefers-color-scheme: dark)");
  darkModeMatcher.addEventListener(
    "change",
    () => updateTheme(darkModeMatcher.matches)
  );
  updateTheme(darkModeMatcher.matches);
  document.querySelectorAll("[data-theme]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      updateTheme(el.getAttribute("data-theme") === "dark");
    });
  });
  document.querySelectorAll("a[href^='./#'], a[href^='../en/#']").forEach((el) => {
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
  var $community = document.querySelector(".community_container");
  var $communityInner = document.querySelector(".community_inner");
  var $communityLeft = document.querySelector(".community_page_left");
  var $communityRight = document.querySelector(".community_page_right");
  var $personLink = document.querySelector("a[href$='#community-person']");
  var $techLink = document.querySelector("a[href$='#community-tech']");
  if ($community) {
    const updateButtonVisibility = () => {
      const scrollLeft = $communityInner.scrollLeft;
      const maxScrollLeft = $communityInner.scrollWidth - $communityInner.clientWidth;
      $communityLeft.style.display = scrollLeft > 0 ? "block" : "none";
      $communityRight.style.display = scrollLeft < maxScrollLeft ? "block" : "none";
    };
    const scrollBy = 330;
    $communityLeft.addEventListener("click", () => {
      const current = $communityInner.scrollLeft;
      const left = Math.max(0, current - scrollBy);
      $communityInner.scrollTo({ left, behavior: "smooth" });
    });
    $communityRight.addEventListener("click", () => {
      const current = $communityInner.scrollLeft;
      const max = $communityInner.scrollWidth;
      const left = Math.min(max, current + scrollBy);
      $communityInner.scrollTo({ left, behavior: "smooth" });
    });
    $communityInner.addEventListener("scroll", updateButtonVisibility);
    window.addEventListener("resize", updateButtonVisibility);
    updateButtonVisibility();
    $personLink.addEventListener("click", () => {
      $community.classList.remove("community--tech");
      $personLink.classList.add("community-selected");
      $techLink.classList.remove("community-selected");
    });
    $techLink.addEventListener("click", () => {
      $community.classList.add("community--tech");
      $techLink.classList.add("community-selected");
      $personLink.classList.remove("community-selected");
    });
    $personLink.classList.add("community-selected");
  }
})();
