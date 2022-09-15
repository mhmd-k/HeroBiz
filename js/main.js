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
// portfolio filter
const portfolioBtns = document.querySelectorAll(
  ".portfolio .container-fluid ul li"
);
const portfolioPics = document.querySelectorAll(
  ".portfolio .container-fluid .row .pic"
);
portfolioBtns.forEach((e) => {
  e.addEventListener("click", () => {
    portfolioBtns.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    portfolioPics.forEach((ele) => {
      if (e.getAttribute("data-filter") === "all") {
        ele.style.setProperty("display", "block");
        return;
      }
      if (ele.getAttribute("data-filter") === e.getAttribute("data-filter")) {
        ele.style.setProperty("display", "block");
      } else {
        ele.style.setProperty("display", "none");
      }
    });
  });
});
// portfolio images zoom
const PortZoomBtns = document.querySelectorAll(".portfolio .pic-info a");
const closeImagesBtn = document.querySelector(".opacity button");
PortZoomBtns.forEach((e) => {
  e.addEventListener("click", (link) => {
    link.preventDefault();
    document.querySelector("body > .opacity").classList.remove("d-none");
    document.querySelector("body > .port-slid").classList.remove("d-none");
    let pics = document.querySelectorAll(".port-slid img");
    for (let i = 0; i < pics.length; i++) {
      if (
        e.parentElement.parentElement.firstElementChild.getAttribute("src") ===
        pics[i].getAttribute("src")
      ) {
        pics.forEach((pic) => {
          pic.parentElement.classList.remove("active");
        });
        pics[i].parentElement.classList.add("active");
      }
    }
  });
});
closeImagesBtn.addEventListener("click", () => {
  document.querySelector("body > .opacity").classList.add("d-none");
  document.querySelector("body > .port-slid").classList.add("d-none");
});
