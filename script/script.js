//gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(Flip, MorphSVGPlugin);

if (true) {

  frieDevelopment();

  //logoFlip();
  //heroText();
  heroAnim();
  //wordpressParallax();
   servicesMoreContent();
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
      end: "+=1800",
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
      end: "+=1000",
      scrub: 1,
      //pin: true
    },
    defaults: { duration: 0.1 },
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
      tween.set(".fd .fd-friede-d", { display: "none" });
    if (currentElem.hasClass("fd-dev-e"))
      tween.set(".fd .fd-friede-e2", { display: "none" });
    if (currentElem.hasClass("fd-de-d"))
      tween.set(".fd .fd-dev-d", { display: "none" });
    if (currentElem.hasClass("fd-de-e"))
      tween.set(".fd .fd-dev-e", { display: "none" });

    tween.from(valueOfElement, {
      //duration: 60,
      //duration: 1,
      //display:"none",
      autoAlpha: 0,
      ease: Linear.easeNone
      //delay:10
    });
  });

//   //MorphSVGPlugin.convertToPath("#responsive circle, #responsive rect");
//  // MorphSVGPlugin.convertToPath("#fd circle, #fd rect");
//   let logoPaths = gsap.utils.toArray("#fd path");
//   let responsivePaths = gsap.utils.toArray("#responsive path");
// console.log(logoPaths);
// console.log(responsivePaths);
//   // tween.set(".fd",{attr: {viewBox: "0 0 2000 200"}});
//   // tween.set(".fd path",{autoAlpha:1});
// console.log("responsivePaths.length ", responsivePaths.length);
//   $.each(logoPaths, function (indexInArray, valueOfElement) {
//     let currentElem = $(valueOfElement);
//     let currentTarget = $(responsivePaths[indexInArray]);
//     // console.log(indexInArray);
//     // console.log(currentElem.is(":visible"));
//     // console.log(currentElem);
//     // console.log(currentElem.attr("class"));
//     // console.log(currentTarget);
   
//     //   console.log(currentTarget.attr("class"));
      
//     // if (currentTarget.hasClass("screen"))
//     // {
//     //  console.log("hasscreen--------------------------------YYYYYYYYY"); 
//     // // currentElem.parent().append('<foreignObject class="screen" transform="translate(-55.98 -97.41)" width="718.25" height="412.39"><div class="heroContainer"><div class="hrT-wp light">Wordpress</div><div class="hrT-ws middle">Webseiten</div><div class="hrT-sa dark">mit Spaß und Anspruch</div> <i class="fab fa-wordpress-simple wordpress parallax"></i> </div></foreignObject> ');
//     //   //console.log("currentTarget.parent()",currentTarget.parent());
//     //   return;
//     // }
//     if (responsivePaths[indexInArray] && 
//       (indexInArray <= responsivePaths.length) 
//      // && $(responsivePaths[indexInArray]).prop("tagName") != "foreignObject"
//       // && $(responsivePaths[indexInArray]).prop("tagName") != "circle"
//       // && currentElem.is(":visible")
//       //(currentElem.is(":visible") || currentElem.hasClass("ph") ) 
    
//     )
//     {
//       tween.to(currentElem, {
//         //morphSVG:responsivePaths[indexInArray],
//         morphSVG: {
//           shape: responsivePaths[indexInArray],
//           type: "rotational",
//           origin: "20% 60%" //or "20% 60%,35% 90%" if there are different values for the start and end shapes.
//       },
//         onComplete:function(el, target){
//           console.log("el", el);
//           console.log("d,",target);
//           el.addClass(target.attr("class"));
//         },
//         onCompleteParams:[currentElem,currentTarget],
//         duration:0.2
//       });
      
     
      
//     }
    
//     console.log("--------------........................-");

//   });
//   // tween.set(".phone-screen foreignObject",{width:"143.41", height:"206.31"});
//   // tween.set(".phone-screen",{x:"580.55px",y:"831.33px"});
//   tween.to("#responsive .screen", {autoAlpha:1});
//   tween.to(".hide", {autoAlpha:0});


  // tween.to(".fd-friede-f", {morphSVG:"#desktop .morph"});
  // tween.set("#desktop",{autoAlpha:1});
  // tween.to(".fd-friede-r", {morphSVG:"#phone .morph"});
  // tween.set("#phone",{autoAlpha:1});
  // tween.to(".fd-friede-i", {morphSVG:"#tablet .morph"});
  // tween.set("#tablet",{autoAlpha:1});
  // tween.to(".fd-friede-e", {morphSVG:"#laptop .morph"});
  // tween.set("#laptop",{autoAlpha:1});
  // tween.to(".fd-de-d", {morphSVG:"#watch .morph"});
  // tween.set("#watch",{autoAlpha:1});
  // tween.to(".fd-de-e", {morphSVG:"#ipod .morph"});
  // tween.set("#ipod",{autoAlpha:1});


  // tween.to("#hero-cta-svg",
  // {duration:20, autoAlpha:1});

  // tween.add(logoFlip(),"+=10");
//   tween.set("#hero-cta-svg",{position: "absolute"});
//  tween.to("#hero-cta-svg",
//    {
//     position: "fixed",
//     duration: 10,
//      top:"13px",
//      right:"20px",
//      left:"unset",
//      width:"10vh"
//    });

}

function friedevLogoAnim(selector, scrollTrigger){
  const tween = gsap.timeline({
    scrollTrigger: scrollTrigger,
    defaults: { duration: 0.1 },
  });

 //  let de = gsap.utils.toArray("#fd path");
  let de = $("path", selector);
  // tween.set(paths,{autoAlpha:0});
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
  // const tweenpinhero = gsap.timeline({
  //   scrollTrigger: {
  //     //s:true,
  //     trigger: ".hero",
  //     start: "top top+=100",
  //     end: "+=3500",
  //     //scrub:true,
  //     pin: true,
  //   },
  // });
  friedevLogoAnim("#logo-use",{
    //  markers:true,
    trigger: ".triggerFd",
    start: "top bottom-=200",
    end:"+=500",
    scrub:true
  });
  const tweenHeroAnim = gsap.timeline({
    scrollTrigger: {
      //  markers:true,
      trigger: ".responsive",
      start: "top bottom",
      end:"+=1500",
    scrub:1
    },
  });
  tweenHeroAnim.to(".heroContainer",
  {
    y:-600
  });
  tweenHeroAnim.to(".heroContainer i",
  {
    y:-1000
  },0);
}
function heroText() {
  

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

// $("#spotiframe").on("load", function() {
//   console.log(this.style);
//   let head = $("#spotiframe").contents().find("head");
//   let body = $("#spotiframe").contents().find("body");
//   $("#spotiframe").contents().find("#main").addClass("hidden");
//   head = $("")
//   console.log($("#spotiframe").contents());
//   console.log(body);
//   //body.attr("style", "")
//   let css = '<style>#main{visibility:hidden;}</style>';
//   $(head).append(css);

//   body.append("<div></div>");
// });
// window.onload = function() {
//   let frameElement = document.getElementById("spotiframe");
//   let doc = frameElement.contentDocument;
//   doc.body.innerHTML = doc.body.innerHTML + '<style>#main {visibility:hidden;}</style>';
// }