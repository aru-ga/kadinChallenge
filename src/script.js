  const navmob = document.getElementById("nav-mobile");
  const navmobE = document.getElementById("navmob-extend");
  const toggleNavmob = document.getElementById("toggle-navmob");
  const navLeftSide = document.getElementById("left-side");
  const navRightSide = document.getElementById("right-side");
  const backToTopBtn = document.getElementById("backToTopBtn");
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");
  const body = document.querySelector("body");
  const themeToggle = document.querySelector("#theme-toggle");
  let darkTheme = false;

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const hero = document.getElementById("hero");
  const heroOffsetTop = hero.offsetTop;
  const navbarHeight = navbar.offsetHeight;
  const scrollTop = window.scrollY.offsetHeight || document.documentElement.scrollTop;
  
  if (scrollTop > heroOffsetTop) {
    navbar.classList.add("sticky");
    navbar.classList.add("border-b-2");
    navbar.classList.add("border-cyan-500");
    navbar.classList.add("backdrop-blur-lg");
    navbar.classList.add("py-4");
    navbar.classList.add("px-10");
   } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("border-b-2");
    navbar.classList.remove("border-cyan-200");
    navbar.classList.remove("backdrop-blur-lg");
    navbar.classList.remove("py-4");
    navbar.classList.remove("px-10");
  }
});

navmob.addEventListener("click", () => {
  const isBackgroundSet = navbar.classList.contains("bg-slate-900");
  navmobE.classList.toggle("-mt-full");
  navmobE.classList.toggle("duration-500");
  navmob.classList.toggle("text-cyan-400");
});

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  darkTheme = !darkTheme;
  sun.classList.toggle("hidden");
  moon.classList.toggle("hidden");
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTopBtn.classList.remove("hidden");
  }else {
    backToTopBtn.classList.add("hidden");
  }
});

backToTopBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const topElement = document.getElementById("top");
  topElement.scrollIntoView({ behavior: "smooth" });
});