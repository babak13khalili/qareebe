// 1. FAB Toggle
const fabContainer = document.querySelector(".fab-container");
const fabMain = document.getElementById("fab-main");

fabMain.addEventListener("click", () => {
  fabContainer.classList.toggle("active");
  fabMain.textContent = fabContainer.classList.contains("active") ? "×" : "-";
});

// 2. Theme Toggle
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);

  const isRtl = document.documentElement.dir === "rtl";
  if (newTheme === "dark") {
    themeBtn.textContent = isRtl ? "روشن" : "Day";
  } else {
    themeBtn.textContent = isRtl ? "تاریک" : "Night";
  }
});

// 3. Language Toggle
const langBtn = document.getElementById("lang-toggle");
langBtn.addEventListener("click", () => {
  const isRtl = document.documentElement.dir === "rtl";
  if (isRtl) {
    document.documentElement.dir = "ltr";
    langBtn.textContent = "FA";
    document.getElementById("main-title").textContent = "Thoughts & Memories";
    document.getElementById("main-desc").textContent =
      "To record, review, and legacy";
    document.getElementById("footer-text").textContent = "By Babak";
  } else {
    document.documentElement.dir = "rtl";
    langBtn.textContent = "EN";
    document.getElementById("main-title").textContent =
      "افکار، احوال و روزمرگی‌ها";
    document.getElementById("main-desc").textContent = "برای ثبت، مرور و میراث";
    document.getElementById("footer-text").textContent = "ساخت بابک";
  }
});
