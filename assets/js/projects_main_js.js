let controller;
let pageScene;
let slideScene;
let spacingScene;
let aboutScene;

function animateSlides() {
  //init controller
  controller = new ScrollMagic.Controller();

  // select DOMs
  const sliders = document.querySelectorAll(".slide");

  // Loop over each slide
  sliders.forEach((slide, index, slides) => {
    let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];

    const pageTl = new gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    pageTl.fromTo(nextSlide, { y: "0%" }, { y: "15%" });
    pageTl.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 });
    pageTl.fromTo(nextSlide, { y: "15%" }, { y: "0%" }, "-=0.75");
    pageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0,
    })
      .setPin(slide)
      .setTween(pageTl)
      // INDICATORS HIDDEN
      // .addIndicators({
      //     colorStart: "white",
      //     colorTrigger: "white",
      //     name: "page"
      //     // indent: 200
      // })
      .addTo(controller);
  });

  // new animation experience
  const li = document.querySelectorAll(".li-job");

  li.forEach((li) => {
    const jobTitle = li.querySelector(".exp-job-title");
    const desc = li.querySelector(".desc");

    const spacingTl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });

    spacingTl.fromTo(
      jobTitle,
      { letterSpacing: "-.1rem" },
      { letterSpacing: "0.5rem" },
      "-=1"
    );
    spacingTl.fromTo(
      desc,
      { y: "-50%", opacity: 0 },
      { y: "10%", opacity: 1 },
      "-=1"
    );
    //create scene with scrollmagic
    // spacingTl.reverse();
    spacingScene = new ScrollMagic.Scene({
      triggerElement: li,
      triggerHook: 0.35,
    })
      .setTween(spacingTl)
      // INDICATORS HIDDEN
      // .addIndicators({
      //     colorStart: "white",
      //     colorTrigger: "white",
      //     name: "spacing"
      // })
      .addTo(controller);
  });

  // new animation experience
  const about = document.querySelector(".about");
  const aboutHeading = about.querySelector("#about-heading");
  const aboutText = about.querySelector(".about-text");

  const aboutTl = gsap.timeline({
    defaults: { duration: 1, ease: "power2.inOut" },
  });

  aboutTl.fromTo(
    aboutHeading,
    { x: "10%", fontSize: "1rem", opacity: 0 },
    { x: "15%", fontSize: "3rem", opacity: 1 },
    "-=1"
  );
  aboutTl.fromTo(
    aboutText,
    { y: "-50%", opacity: 0 },
    { y: "10%", opacity: 1 },
    "-=0.5"
  );
  //create scene with scrollmagic
  // aboutTl.reverse();
  aboutScene = new ScrollMagic.Scene({
    triggerElement: about,
    triggerHook: 0.1,
  })
    .setTween(aboutTl)
    // INDICATORS HIDDEN
    // .addIndicators({
    //     colorStart: "white",
    //     colorTrigger: "white",
    //     name: "about"
    // })
    .addTo(controller);
}

// animateSlides();

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
function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    header.style.transform = "translateY(0.5rem)";
  } else {
    header.style.transform = "translateY(-12rem)";
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    console.log("scrollisworking");
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
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
