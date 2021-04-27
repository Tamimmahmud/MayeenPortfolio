let controller;
let imgScene;

// TOP header translateY on Scroll Direction

const header = document.querySelector("header");
function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    header.style.transform = "translateY(0rem)";
  } else {
    header.style.transform = "translateY(-20vh)";
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

let scrollableElement = document.body;

scrollableElement.addEventListener("wheel", checkScrollDirection);

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
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "black" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "black" });
    gsap.to("#logo", 1, { color: "white" });
    gsap.to(".burger-nav-bar", 0.5, { clipPath: "circle(50px at 100% -10%)" });
    gsap.to(".internal_navigation", { transform: "translateY(0px)" });
    document.querySelector(".content_social_fixed").classList.toggle("show");
    document.querySelector(".content_social_fixed").classList.toggle("hide");
    document.body.classList.remove("hide");
  }
}

burger.addEventListener("click", burgerToggle);

function animateImg() {
  let demoImg = document.querySelector(".demo_img");
  let demoImgSection = document.querySelector("section.projectSample");
  let wireFrameSection = document.querySelector("section.wireFrame");
  controller = new ScrollMagic.Controller();

  const imgMoveTl = new gsap.timeline({
    defaults: { duration: 1.5, ease: "power2.inOut" },
  });
  const imgMoveTl2 = new gsap.timeline({
    defaults: { duration: 1.5, ease: "power2.inOut" },
  });
  console.log(demoImg);
  imgMoveTl.fromTo(demoImg, { top: "3rem" }, { top: "-3rem" });

  imgScene = new ScrollMagic.Scene({
    triggerElement: demoImg,
    duration: "0%",
    triggerHook: 0.5,
  })
    .setTween(imgMoveTl)
    // INDICATORS HIDDEN
    .addIndicators({
      colorStart: "black",
      colorTrigger: "black",
      name: "demoImg",
      // indent: 200
    })
    .addTo(controller);
}
animateImg();
