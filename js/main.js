// navbar down arrow icon rotation
document.querySelectorAll("li.dropdown a").forEach((e) => {
  e.addEventListener("click", () => {
    if (e.nextElementSibling.classList.contains("show")) {
      e.firstElementChild.classList.add("rotate");
    } else {
      e.firstElementChild.classList.remove("rotate");
    }
  });
});
document.addEventListener("click", () => {
  document.querySelectorAll("li.dropdown a svg").forEach((e) => {
    e.classList.remove("rotate");
  });
});
// navbar color white onscroll
window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    document.querySelector("nav").classList.add("bg-light", "shadow");
  } else {
    document.querySelector("nav").classList.remove("bg-light", "shadow");
  }
});
// client slider
const slider = document.querySelector(".clients .container .slider-parent");
let counter = 0;
let slidDestance = 200;
let n = setInterval(() => {
  if (counter === 8) {
    counter = 0;
    slidDestance = 200;
    slider.style.setProperty("transition", "none");
    slider.style.setProperty("transform", `translateX(0px)`);
    setTimeout(() => {
      slider.style.setProperty("transition", "0.3s ease-in-out");
      slider.style.setProperty("transform", `translateX(-${slidDestance}px)`);
      counter++;
      slidDestance += 200;
    }, 100);
  } else {
    slider.style.setProperty("transition", "0.3s ease-in-out");
    slider.style.setProperty("transform", `translateX(-${slidDestance}px)`);
    counter++;
    slidDestance += 200;
  }
}, 5000);
// testomenials slider
const testImges = document.querySelectorAll(".services .carousel-item");
const testBtns = document.querySelectorAll(
  ".services .carousel-indicators button"
);
function testSlide() {
  let active;
  for (let i = 0; i < testImges.length; i++) {
    if (testImges[i].classList.contains("active")) {
      active = i;
    }
    testImges[i].classList.remove("active");
    testBtns[i].classList.remove("active");
  }
  active++;
  if (active === testImges.length) {
    active = 0;
  }
  testImges[active].classList.add("active");
  testBtns[active].classList.add("active");
}
let test = setInterval(testSlide, 5000);
testBtns.forEach((e) => {
  e.addEventListener("click", () => {
    clearInterval(test);
  });
});
