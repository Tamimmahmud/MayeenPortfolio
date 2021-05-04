let controller;
let pageScene;
let slideScene;
let spacingScene;
let aboutScene;

// INTERNAL NAVBAR Active class toggle on SCROLL

const techforiaHeight = document.querySelector("#techforia").clientHeight;
const oceanGroveHeight = document.querySelector("#oceanGrove").clientHeight;
const myGpHeight = document.querySelector("#myGp").clientHeight;
const ilmLibraryHeight = document.querySelector("#ilmLibrary").clientHeight;
const sucroseHeight = document.querySelector("#sucrose").clientHeight;

function toggleActiveOnScroll() {
  // init controller
  let controller = new ScrollMagic.Controller();
  // build scenes
  new ScrollMagic.Scene({
    triggerElement: "#techforia",
    duration: techforiaHeight,
  })
    .setClassToggle("#liTechforia", "active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#oceanGrove",
    duration: oceanGroveHeight,
  })
    .setClassToggle("#liOceanGrove", "active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#myGp",
    duration: myGpHeight,
  })
    .setClassToggle("#liMyGp", "active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#ilmLibrary",
    duration: ilmLibraryHeight,
  })
    .setClassToggle("#liIlmLibrary", "active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: "#sucrose",
    duration: sucroseHeight,
  })
    .setClassToggle("#liSucrose", "active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
}

toggleActiveOnScroll();

// TOP header translateY on Scroll Direction

const header = document.querySelector("header");

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    console.log("scrollisworking");
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    header.style.transform = "translateY(0.5rem)";
  } else {
    header.style.transform = "translateY(-12rem)";
  }
}

let scrollableElement = document.body;
scrollableElement.addEventListener("wheel", checkScrollDirection);

// Mobile - header Burger active toggle

const burger = document.querySelector(".burger");
function burgerToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotate: "45", y: 6, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "-45", y: 0, background: "black" });
    gsap.to("#logo", 1, { color: "black" });
    gsap.to(".burger-nav-bar", 0.5, {
      clipPath: "circle(2500px at 100% -10%)",
    });
    gsap.to(".internal_navigation", { transform: "translateY(100px)" });
    document.querySelector(".content_social_fixed").classList.toggle("show");
    document.querySelector(".content_social_fixed").classList.toggle("hide");
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "white" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "white" });
    gsap.to("#logo", 1, { color: "white" });
    gsap.to(".burger-nav-bar", 0.5, { clipPath: "circle(50px at 100% -10%)" });
    gsap.to(".internal_navigation", { transform: "translateY(0px)" });
    document.querySelector(".content_social_fixed").classList.toggle("show");
    document.querySelector(".content_social_fixed").classList.toggle("hide");
    document.body.classList.remove("hide");
  }
}

burger.addEventListener("click", burgerToggle);
