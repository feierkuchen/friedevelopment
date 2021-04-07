//gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(Flip);

if (true) {

  //frieDevelopment();

  //logoFlip();
  //heroText();
  heroAnim();
  // servicesMoreContent();
  // // services();
  // welcomeText();
}

// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(MotionPathPlugin);
function frieDevelopment(param) {
  // gsap.set(".fdContainer",
  // {y:50%});
  const tweenpin = gsap.timeline({
    scrollTrigger: {
      //s:true,
      trigger: ".frieDevelopment",
      start: "top top",
      end: "+=4000",
      //scrub:true,
      pin: true,
    },
  });
  //timelinge fürs logo erscheinen und in den header laufen
  const tween = gsap.timeline({
    scrollTrigger: {
      //  markers:true,
      trigger: ".triggerLogo",
      start: "top top",
      end: "+=4000",
      scrub: 1,
      //pin: true
    },
    defaults: { duration: 1 },
  });

  //let de = $("path", "#fd");
   let de = gsap.utils.toArray("#fd path");
   //tween.to(de, { autoAlpha: 1});
   //tween.to(".cta", { autoAlpha: 1});

   gsap.set("#hero-cta-svg", { position: "fixed" });
   gsap.set("#hero-cta-svg", { y: 0 });
   gsap.set("#hero-cta-svg", { x: 0 });
   gsap.set("#hero-cta-svg", { width: "15vw" });
  
  
  $.each(de, function (indexInArray, valueOfElement) {
    let currentElem = $(valueOfElement);
    if (currentElem.hasClass("fd-dev-d"))
      tween.set(".fd-friede-d", { display: "none" });
    if (currentElem.hasClass("fd-dev-e"))
      tween.set(".fd-friede-e2", { display: "none" });
    if (currentElem.hasClass("fd-de-d"))
      tween.set(".fd-dev-d", { display: "none" });
    if (currentElem.hasClass("fd-de-e"))
      tween.set(".fd-dev-e", { display: "none" });

    tween.from(valueOfElement, {
      //duration: 60,
      //duration: 1,
      //display:"none",
      autoAlpha: 0,
      ease: Linear.easeNone
      //delay:10
    });
  });
  tween.to("#hero-cta-svg",
  {duration:20, autoAlpha:1});

  tween.add(logoFlip(),"+=10");
  //tween.add(ctaFlip());
  tween.set("#hero-cta-svg",{position: "absolute"});
 tween.to("#hero-cta-svg",
   {
    position: "fixed",
    duration: 10,
     top:"13px",
     right:"20px",
     left:"unset",
     width:"10vh"
   });//AHA:can is not pinned!!!!(schätz ich=)

    //gsap.set("#hero-cta-svg", { position: "fixed" });
}

function ctaFlip(){
    return gsap.to("#hero-cta-svg",
    {
      duration: 10,
      x:0,
      width:"10vw",
      autoAlpha:0
    });
}

function logoFlip() {
  // let states = [ toInitState, toFirstState, toLastState, toInvertState, toPlayState, toEndState ],
  let stateIndex = 0,
    //stateIndexWrap = gsap.utils.wrap(0, states.length),
    logo = document.querySelector(".fdContainer"),
    cta = document.querySelector(".cta"),
    originalContainerLogo = document.querySelector(".frieDevelopment"),
    originalContainerCta = document.querySelector(".btn-container"),
    finalContainerLogo = document.querySelector(".logo-header");
  finalontainerCta = document.querySelector(".header-cta");

  //gsap.defaults({ duration: 0.4, overwrite: 'auto' });

  let transitionLogo, transitionCta;
  transitionLogo && transitionLogo.kill();
  transitionCta && transitionCta.kill();
  // reset (put back in original container and remove any inline styles)
  	originalContainerLogo.appendChild(logo);
//    originalContainerCta.appendChild(cta);
  logo.style.cssText = "";
  cta.style.cssText = "";

  // grab the original state
  const stateLogo = Flip.getState(logo);
  const stateCta = Flip.getState(cta);
  gsap.to(".cta",
  {autoAlpha:1});
  // put into the new container
   finalContainerLogo.appendChild(logo);
   //finalontainerCta.appendChild(cta);
	// //originalContainerLogo.appendChild(logo);
  // // FLIP!
  transitionLogo = Flip.from(stateLogo, {
    duration: 10,
    ease: "none"
  })
  // transitionCta = Flip.from(stateCta, {
  //   duration: 10,
  //   ease: "none"
  // })
  //transitionLogo.add(transitionCta);
  return transitionLogo;
  return transitionCta;
}

function heroAnim() {
  const tweenpinhero = gsap.timeline({
    scrollTrigger: {
      //s:true,
      trigger: ".heroText",
      start: "top top+=100",
      end: "+=3500",
      //scrub:true,
      pin: true,
    },
  });
  const tweenHeroAnim = gsap.timeline({
    scrollTrigger: {
      //  markers:true,
      trigger: ".responsive-anim",
      start: "top top",
      end:"+=1500",
     scrub:true
    },
  });
  tweenHeroAnim.to(".heroContainer",
  {
    y:-300
  });
}
function heroText() {
  wordpressParallax();

  const tweenpinhero = gsap.timeline({
    scrollTrigger: {
      //s:true,
      trigger: ".heroText",
      start: "top top",
      end: "+=1500",
      //scrub:true,
      pin: true,
    },
  });

  const tweenHeroText = gsap.timeline({
    scrollTrigger: {
      //  markers:true,
      trigger: ".heroContainer",
      start: "top top",
      //end:"bottom bottom",
      //scrub:true,
    },
  });

  let heroText = $("div", ".heroText");

  $.each(heroText, function (indexInArray, valueOfElement) {
    let currentElem = $(valueOfElement);

    tweenHeroText.from(valueOfElement, {
      duration: 0.2,
      autoAlpha: 0,
      ease: "none",
    });
  });
  // tweenHeroText.to(".hrT-wp", {
  //   duration: 0.2,
  //   display: "none",
  //   ease: Linear.easeNone,
  // });
}

function welcomeText(param) {
  // scrollTweenObject = gsap.from(".welcomeText .imgMove", {

  //     scrollTrigger:{
  //      markers:true,
  //     trigger:".welcomeText",
  //     start:"top bottom",
  //     end:"bottom center",
  //     scrub:true,
  // 	},
  //   	// motionPath: {
  // 	  //   path: "#scrollPath",
  // 	  //   align: "#scrollPath",
  // 	  //   autoRotate: true,
  // 	  //   start: 1,
  // 	  //   end: 0
  //   	// },
  //     motionPath:[{left:100, top:250}, {left:300, top:0}, {left:500, top:400}],
  //   	ease: "linear",
  // });
  // const tweenWlecomeTextPin = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".welcomeText",
  //     start: "top top",
  //     end: "+=2500",
  //     pin: true,
  //   },
  // });
  const tweenWlecomeText = gsap.timeline({
    scrollTrigger: {
      //markers: true,
      trigger: ".welcomeContainer",
      start: "top top",
      // end: "+=5000px",
      //scrub: true
      // pin: true
    },
  });

  let welcome = $("h2, p, img", ".welcomeContainer");

  tweenWlecomeText.from(".imgOverlay", {
    //duration: 0.1,
    opacity: 1,
    ease: "none",
  });
  tweenWlecomeText.to(".imgMove img", {
    //duration: 0.1,
    scale: 1.3,
  });
  tweenWlecomeText.to(".imgMove img", {
    //duration: 0.1,
    scale: 1,
  });
  // gsap.from(".welcomeContainer .imgMove", {
  //   duration: 0.2,
  //   y: "-=100vh",
  //   //opacity:0,
  //   ease: Linear.easeNone,
  //   scrollTrigger: {
  //     //  markers:true,
  //     trigger: ".welcomeContainer",
  //     start: "top bottom",
  //     end: "bottom center",
  //     scrub: true,
  //     // pin: true
  //   },
  // });
}

function servicesMoreContent() {
  let container = document.getElementById("moreContent");
  const tweenServicesPin = gsap.timeline({
    scrollTrigger: {
      trigger: ".service",
      start: "top +=70vh",
      end: "+=" + (container.offsetWidth + 100),
      pin: true,
    },
  });

  if (container) {
    const tweenServices = gsap.to(".moreContent", {
      x: () => -container.scrollWidth + "px",
      ease: "none",
      scrollTrigger: {
        trigger: ".service",
        start: "top +=100vh",
        invalidateOnRefresh: true,
        //pin: true,
        scrub: 1,
        snap: 0.2,
        end: () => "+=" + container.offsetWidth,
      },
    });
  }
}
function services() {
  const tweenServicesPin = gsap.timeline({
    scrollTrigger: {
      trigger: ".service",
      start: "top top",
      end: "+=2500",
      pin: true,
    },
  });
  const tweenServices = gsap.timeline({
    scrollTrigger: {
      // markers:true,
      id: "scrollServices",
      trigger: ".service-container",
      start: "top top",
      //end:"+=2000",
      //scrub:true
    },
  });

  let services = $("i, .service-title", ".services");

  $.each(services, function (indexInArray, valueOfElement) {
    let currentElem = $(valueOfElement);

    tweenServices.from(valueOfElement, {
      //duration: 0.6,
      yPercent: 1000,
      // ease:
      // CustomEase.create("custom", "M0,0 C0.378,0.003 0.609,0.612 0.824,0.948 0.936,0.898 0.973,0.961 1,1 ")
    });
  });

  // gsap.to(".service-background", {
  //   backgroundPosition: `50% ${innerHeight / 2}px`,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".service",
  //     scrub: true,
  //   },
  // });
}
$(".more").click(function (e) {
  $(".extended-content").show();
  $(".services").addClass("moreContent");
  ScrollTrigger.getById("scrollServices").kill();
  //$(".service").css("height", "auto");
  $("i, .service-title", ".service").css("transform", "unset");
});

function wordpressParallax(param) {
  // const tweenWordpress = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".heroText",
  //     start: "top top",
  //     scrub: true
  //     //pin: true
  //   }
  // });
  gsap.to(".wordpress", {
    duration: 0.2,
    yPercent: -80,
    ease: "none",
    scrollTrigger: {
      trigger: ".heroText",
      scrub: true,
      //pin: true
    },
  });
}
