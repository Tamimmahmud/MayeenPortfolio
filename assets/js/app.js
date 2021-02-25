let controller;
let pageScene;
let slideScene;
let spacingScene;
let aboutScene;

function animateSlides() {
    //init controller
    controller = new ScrollMagic.Controller();

    // select DOMs
    const sliders = document.querySelectorAll('.slide')

    // Loop over each slide
    sliders.forEach((slide,index,slides) => {

        let nextSlide = slides.length -1 === index ? 'end' : slides[index+1];

        const pageTl = new gsap.timeline({
            defaults: {duration:1, ease: "power2.inOut"}
        });
        pageTl.fromTo(nextSlide, {y: "0%"}, {y: "15%"})
        pageTl.fromTo(slide, {opacity:1,scale:1},{opacity:0, scale: 0.5})
        pageTl.fromTo(nextSlide, {y: "15%"}, {y: "0%"}, "-=0.75")
        pageScene = new ScrollMagic.Scene({
            triggerElement: slide,
            duration: "100%",
            triggerHook: 0
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
    })

    // new animation experience 
    const li = document.querySelectorAll(".li-job")

    li.forEach((li) => {
        const jobTitle = li.querySelector('.exp-job-title')
        const desc = li.querySelector('.desc')

        const spacingTl = gsap.timeline({
            defaults: { duration: 1, ease: "power2.inOut"}
        });

        spacingTl.fromTo(jobTitle,{letterSpacing:"-.1rem"},{letterSpacing:"0.5rem"}, "-=1" )
        spacingTl.fromTo(desc,{y:"-50%",opacity:0},{y:"10%", opacity:1}, "-=1")
                //create scene with scrollmagic 
        // spacingTl.reverse();
        spacingScene = new ScrollMagic.Scene({
            triggerElement: li,
            triggerHook: 0.35

        })
        .setTween(spacingTl)
        // INDICATORS HIDDEN
        // .addIndicators({
        //     colorStart: "white",
        //     colorTrigger: "white",
        //     name: "spacing"
        // })
        .addTo(controller);
    })

        // new animation experience 
        const about = document.querySelector(".about")
        const aboutHeading = about.querySelector('#about-heading')
        const aboutText = about.querySelector('.about-text')

        const aboutTl = gsap.timeline({
            defaults: { duration: 1, ease: "power2.inOut"}
        });

        aboutTl.fromTo(aboutHeading,{x:"10%",fontSize:'1rem',opacity:0},{x:"15%",fontSize:'3rem',opacity:1},"-=1")
        aboutTl.fromTo(aboutText,{y:"-50%",opacity:0},{y:"10%", opacity:1},"-=0.5")
                //create scene with scrollmagic 
        // aboutTl.reverse();
        aboutScene = new ScrollMagic.Scene({
            triggerElement: about,
            triggerHook: .1

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




function navToggle(e) {
    console.log(e.target)
    if(!e.target.classList.contains('active')){
        e.target.classList.add('active');
        gsap.to(".line1",0.5,{rotate : "45", y: "5", background: 'black'});
        gsap.to(".line2",0.5,{rotate: "-45",y: "-5", background: 'black'})
        gsap.to("#logo",1,{color:'black'});
        gsap.to(".nav-bar", 1, {clipPath: "circle(2500px at 100% -10%)"})
        document.body.classList.add('hide')

    }
    else{
        e.target.classList.remove('active');
        gsap.to(".line1",0.5,{rotate : "0", y: "0", background: 'white'});
        gsap.to(".line2",0.5,{rotate: "0",y: "0", background: 'white'});
        gsap.to("#logo",1,{color:'white'});
        gsap.to(".nav-bar", 1, {clipPath: "circle(50px at 100% -10%)"}) 
        document.body.classList.remove('hide')
    }
    
}



// animateSlides();

// window.addEventListener('mousemove', cursor);
// window.addEventListener('mouseover', activeCursor);

// HomePage SideNavbar active toggle

const internal_navLinks = document.querySelectorAll('.internal_navigation .nav_home li')
const navLink_a = document.querySelectorAll('.internal_navigation .nav_home li a')

function navChange(e) {
    const link = e.target;
    const li = link.parentElement;
    const internal_navLinks_active = document.querySelectorAll('.internal_navigation .nav_home .active')
    internal_navLinks_active.forEach((navLink_active) => navLink_active.classList.remove('active'))
    li.classList.toggle('active');
    const sectionURL = link.dataset.section;
    // history.pushState({},(''),sectionURL)
}

navLink_a.forEach((link) => {
    link.addEventListener('click', navChange)
})

// NAVBAR translateY on Scroll Direction

const header = document.querySelector('header');
function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    header.style.transform = "translateY(0.5rem)"
  } else {
    header.style.transform = "translateY(-12rem)";
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

let scrollableElement = document.body;

scrollableElement.addEventListener('wheel', checkScrollDirection);

const homeHeight = document.querySelector('#home').clientHeight;
const aboutHeight= document.querySelector('#about').clientHeight;
const experienceHeight=  document.querySelector('#experience').clientHeight;;
const skillsHeight= document.querySelector('#skills').clientHeight;;


function urlChange() {
        // init controller
	let controller = new ScrollMagic.Controller();

	// build scenes
	new ScrollMagic.Scene({
        triggerElement: "#home",
        duration:homeHeight})
					.setClassToggle("#liHome", "active") // add class toggle
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller);
	new ScrollMagic.Scene({
        triggerElement: "#about",
        duration:aboutHeight})
					.setClassToggle("#liAbout", "active") // add class toggle
					
                    // .addIndicators() // add indicators (requires plugin)
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#experience", duration:experienceHeight })
					.setClassToggle("#liExperience", "active") // add class toggle
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#skills",duration:skillsHeight})
					.setClassToggle("#liSkills", "active") // add class toggle
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller);
    
}

urlChange()