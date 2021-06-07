gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, SplitText);
const colors = ["#36a9e1", "#1abc9c", "#006494"];

if (true) {
  frieDevelopment();
  //morphIcon();

  logoFlip();

  //heroText();
  //firstSkit();
  heroAnim();
  //wordpressParallax();
  //servicesMoreContentMorph();

  servicesMoreContentScrollVertical();
  titleLikeLogo();

  // // services();
  welcomeText();
  cta();
}

function firstSkit() {
  const tweenpin = gsap.timeline({
    scrollTrigger: {
      trigger: ".skit",
      start: "top top",
      end: "+=2100vh",
      pin: true,
    },
  });
  //timelinge fürs logo erscheinen
  const tween = gsap.timeline({
    scrollTrigger: {
      trigger: ".skit.first",
      start: "top top",
      end: "+=3000vh",
      scrub: 1,
    },
    defaults: { duration: 0.1 },
  });
  // tween.from(".skew", {
  //   autoAlpha: 0,
  //   duration: 0,
  // });
  tween.from(".skew", {
    autoAlpha: 0,
    visibility: 0,
    skewX: "-60deg",
    //skewY: "-60deg",
    // scaleY: -1,
    translate: "65px",
  });
}
function cta(param) {
  gsap.set(".funnytext", {
    background: () => {
      return gsap.utils.random(colors);
    },
  });
  const cst = gsap.timeline({
    scrollTrigger: {
      trigger: ".neon-button",
      start: "top top",
      end: "+=3000vh",
      scrub: 3,
    },
  });
  gsap.to(".dfunnytext, .dlightanim", {
    duration: 4,
    rotateX: 160,
    // background: () => {
    //   console.log("sdf");
    //   return gsap.utils.random(colors);
    // },
    ease: "none",
    repeatRefresh: true,
    yoyo: true,
    repeat: -1,
  });
}

function titleLikeLogo(param) {
  //$(".frieDevelopment, .hero").hide();

  //tl.from(chars, {duration: 0.8, className:"darkBl", opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.1}, "+=0");
  //tl.from(chars, {duration: 0.8, className:"darkBl", opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.1}, "+=0");
  let allTitles = gsap.utils.toArray(".service-title");
  allTitles.forEach((servicetitle) => {
    var tl = gsap.timeline(),
      mySplitText = new SplitText(servicetitle, { type: "words,chars" }),
      chars = mySplitText.chars; //an array of all the divs that wrap each character
    //let shortchars[]
    let length = chars.length;
    let firstBreak = length * 0.25;
    let secondBreak = length * 0.75;
    let firstLetters = chars.slice(0, firstBreak);
    let secondLetters = chars.slice(firstBreak, secondBreak);
    let thirdLetters = chars.slice(secondBreak, length);
    //console.log(chars, firstBreak, firstLetters);
    gsap.set(".service-title", { perspective: 400 });
    firstLetters.forEach((letter) => {
      tl.from(letter, { duration: 0.8, className: "darkBl" });
    });
    secondLetters.forEach((letter) => {
      tl.from(letter, { duration: 0.8, className: "lightBl" });
    });
    thirdLetters.forEach((letter) => {
      tl.from(letter, { duration: 0.8, className: "middleBl" });
    });
  });
}

function frieDevelopment(param) {
  gsap.set(".hero-text, .hero-kontakt", { autoAlpha: 1 });
  const tweenpin = gsap.timeline({
    scrollTrigger: {
      trigger: ".start",
      start: "top top",
      end: "+=6000vh",
      pin: true,
    },
  });

  //timelinge fürs logo erscheinen
  //timelinge fürs logo erscheinen
  const tween = gsap.timeline({
    scrollTrigger: {
      trigger: ".triggerLogo",
      start: "top top",
      end: "+=1000vh",
      scrub: 1,
    },
    defaults: { duration: 0.1 },
  });

  let de = gsap.utils.toArray("#fd path");

  gsap.set("#hero-cta-svg", { position: "fixed" });
  gsap.set("#hero-cta-svg", { y: 0 });
  gsap.set("#hero-cta-svg", { x: 0 });
  gsap.set("#hero-cta-svg", { width: "15vw" });

  tween.to(".scroll", { autoAlpha: 0 });

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
      autoAlpha: 0,
      ease: Linear.easeNone,
    });
  });

  let tl2 = new gsap.timeline({
    defaults: { duration: 10 },
    scrollTrigger: {
      trigger: ".triggerLogo",
      start: "+=3000vh",
      end: "+=1000vh",
      scrub: 1,
    },
  });

  tl2.from(
    ".hero-text, .hero-kontakt",
    {
      // duration: 10,
      autoAlpha: 0,
      ease: Linear.easeNone,
      duration: 100,
    },
    0
  );
  tl2.to(
    ".fd-dev",
    {
      opacity: 0,
      ease: Linear.easeNone,
    },
    0
  );
}

function friedevLogoAnim(selector, scrollTrigger) {
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
      ease: Linear.easeNone,
      //delay:10
    });
  });
}

function logoFlip() {
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".triggerLogo",
      //start: "+=4000vh",
      start: "+=5000vh",
      //start: "top bottom+200vh",
      //end: "+=50vh",
      end: "+=1500vh",
      scrub: 1,
      ease: "none",
    },
  });
  let allParallaxed = gsap.utils.toArray(".hero-text, .hero-kontakt");
  var offset = -500;
  allParallaxed.forEach((item) => {
    const depth = item.dataset.depth;
    console.log(depth);
    const vdepth = item.dataset.vdepth;
    const movement = -(item.offsetHeight * depth);
    //const movement = -(item.offsetHeight * (depth * 3));
    console.log(movement);
    tl1.to(
      item,
      {
        y: movement,
        autoAlpha: 0,
        ease: "none",
      },
      0
    );
  });

  gsap.set("#fd", {
    position: "fixed",
    top: "30%",
    left: "0",
    right: 0,
    //bottom: 0,
    margin: "auto auto",
  });
  tl1.to(
    "#fd",
    {
      position: "fixed",
      //duration: 0.9,
      top: "1vh",
      left: "2vw",
      right: "unset",
      height: "clamp(8px,4vh,50px)",
      margin: "0",
      width: "unset",
    },
    0
  );

  tl1.to(
    ".js-navigation",
    {
      opacity: 1,
    },
    0
  );
  tl1.to(".fd-dev", {
    opacity: 1,
  });
  // tl1.from(
  //   "header",
  //   {
  //     background: "none",
  //   },
  //   ">"
  // );
}

function heroAnim() {
  friedevLogoAnim("#logo-use", {
    trigger: ".triggerFd",
    start: "top bottom",
    end: "+=400",
    scrub: true,
  });
  const tweenHeroAnim = gsap.timeline({
    scrollTrigger: {
      //  markers:true,
      trigger: ".responsive",
      start: "top bottom-=100",
      end: "+=1500",
      scrub: 1,
    },
  });
  tweenHeroAnim.to(".heroContainer", {
    //y: -600,
    y: "-50%",
  });
  //wordpress
  tweenHeroAnim.to(
    ".heroContainer i",
    {
      y: -1000,
    },
    0
  );

  // const tweenHeroAnim2 = gsap.timeline({
  //   scrollTrigger: {
  //     //  markers:true,
  //     trigger: ".responsive",
  //     start: "top bottom-=100",
  //     end: "+=1500",
  //     scrub: 1,
  //   },
  // });

  // tweenHeroAnim2.to(
  //   "#desktop",
  //   {
  //     y: -600,
  //     ease: "none",
  //   },
  //   0
  // );
  // tweenHeroAnim2.to(
  //   "#laptop",
  //   {
  //     y: -400,
  //     ease: "none",
  //   },
  //   0
  // );
  // tweenHeroAnim2.to(
  //   "#tablet",
  //   {
  //     y: -200,
  //     ease: "none",
  //   },
  //   0
  // );
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
}
function servicesMoreContentMorph() {
  let container = document.getElementById("all-services-conainer");
  const colors = [
    "#1d71b8",
    "#36a9e1",
    "rgba(26, 188, 156, 1)",
    "rgba(0, 100, 148, 1)",
    "#EA7D00",
    "#F4B66E",
    "#F49F3D",
  ];
  const blues = [
    "#1d71b8",
    "#36a9e1",
    "rgba(26, 188, 156, 1)",
    "rgba(0, 100, 148, 1)",
  ];
  MorphSVGPlugin.convertToPath(".icon line");
  MorphSVGPlugin.convertToPath(".icon rect");
  const tweenServicesPin = gsap.timeline({
    scrollTrigger: {
      trigger: ".service",
      start: "top top+=80vh",
      end: "+=5000",
      pin: true,
    },
  });
  let tl1 = gsap.timeline({
    scrollTrigger: {
      //trigger:"#v-spacer-1",
      trigger: ".moreContent",

      scrub: 1,
      //start: "top top",
      start: "+=200",
      end: "+=2000",
    },
  });
  let design = gsap.utils.shuffle(gsap.utils.toArray("#design path"));
  let service = gsap.utils.shuffle(gsap.utils.toArray("#services path"));
  let shop = gsap.utils.shuffle(gsap.utils.toArray("#shop path"));
  let seo = gsap.utils.shuffle(gsap.utils.toArray("#seo path"));
  //console.log(design, service);
  //tl1.from(".icon #design path", {duration:200,stagger: 0.1, drawSVG: 0},"+=50");
  tl1.to(
    ".service-d",
    {
      autoAlpha: 0,
      duration: 200,
    },
    "+=50"
  );
  tl1.to(
    ".service-background",
    {
      "background-image": "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)",
      duration: 200,
    },
    "+=50"
  );
  tl1.to(
    ".service-fs",
    {
      autoAlpha: 1,
      duration: 200,
    },
    "+=50"
  );

  tl1.to(
    ".service-fs",
    {
      autoAlpha: 0,
      duration: 200,
    },
    "+=50"
  );
  tl1.to(
    ".service-background",
    {
      "background-image": "linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)",

      //background:"red",
      duration: 200,
    },
    "+=50"
  );
  tl1.to(
    ".service-os",
    {
      autoAlpha: 1,
      duration: 200,
    },
    "+=50"
  );
  tl1.to(
    ".service-os",
    {
      autoAlpha: 0,
      duration: 200,
    },
    "+=50"
  );
  tl1.to(
    ".service-background",
    {
      "background-image":
        "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",

      //background:"red",
      duration: 200,
    },
    "+=50"
  );
  tl1.to(
    ".service-seo",
    {
      autoAlpha: 1,
      duration: 200,
    },
    "+=50"
  );

  design.forEach((path, i) => {
    if ($(service[i]).hasClass("transp")) return;
    if (service[i] == undefined) {
      // console.log("und");
      tl1.set(path, { autoAlpha: 0 }, "1");
    } else {
      tl1.to(
        path,
        {
          morphSVG: service[i],
          duration: 600,
          fill: gsap.utils.random(blues),
        },
        "1"
      );

      tl1.fromTo(
        path,
        {
          morphSVG: service[i],
          duration: 600,
          fill: gsap.utils.random(colors),
        },
        {
          morphSVG: shop[i],
          immediateRender: false,
          duration: 600,
          fill: gsap.utils.random(colors),
        },
        "900"
      );

      tl1.fromTo(
        path,
        {
          morphSVG: service[i],
          duration: 600,
          fill: gsap.utils.random(colors),
        },
        {
          morphSVG: seo[i],
          immediateRender: false,
          duration: 600,
          fill: gsap.utils.random(colors),
        },
        "900"
      );
    }
  });
}
var tweenVertical;
var tweenServicesPin;
function servicesMoreContentScrollVertical() {
  let anim = function () {
    let container = document.getElementById("all-services-conainer");
    tweenServicesPin = gsap.timeline({
      // paused: true,
      scrollTrigger: {
        trigger: ".service",
        start: "top top+=50vh",
        id: "scrollServicesPin",
        //end: "+=" + (container.offsetWidth + 1200 + "vh"),
        end: "+=" + container.offsetWidth,
        pin: true,
      },
    });

    //if (container) {
    let tweenServices = gsap.to(".moreContent", {
      x: () => -container.scrollWidth + "px",
      ease: "none",
      //paused: true,
      scrollTrigger: {
        trigger: ".service-container",
        start: "top top-=600vh",
        invalidateOnRefresh: true,
        id: "scrollServices",
        //pin: true,
        scrub: 1,
        snap: 0.2,
        //end: () => "+=" + container.offsetWidth + "vh",
        end: () => "+=" + container.offsetWidth + "vh",
      },
    });

    return tweenServices;
  };
  //};
  $(".card").click(function (e) {
    $(".vertical-scroll-container").removeClass("tiles");
    // if (!tweenVertical)
    tweenVertical = anim();
  });
  $(".details-close").click(function (e) {
    console.log(this);
    ScrollTrigger.getById("scrollServicesPin").kill(true);
    ScrollTrigger.getById("scrollServices").kill(true);
    window.location.href = "#services";
    tweenVertical.pause(0).kill(true);
    tweenServicesPin.pause(0).kill(true);
    $(".vertical-scroll-container").addClass("tiles");

    // gsap.set(".moreContent", {
    //   x: 0,
    // });

    // if (tweenVertical) {
    //   console.log("kill", tweenVertical);
    //   tweenVertical.pause();
    //   console.log("kill", tweenVertical.isActive());
    //   ScrollTrigger.refresh();
    // }
  });
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
  //ScrollTrigger.getById("scrollServices").disable();

  let services = $("i, .title", ".services");

  $.each(services, function (indexInArray, valueOfElement) {
    let currentElem = $(valueOfElement);

    tweenServices.from(valueOfElement, {
      //duration: 0.6,
      yPercent: 1000,
      // ease:
      // CustomEase.create("custom", "M0,0 C0.378,0.003 0.609,0.612 0.824,0.948 0.936,0.898 0.973,0.961 1,1 ")
    });
  });
}

function wordpressParallax(param) {
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

function morphIcon(element) {
  // MorphSVGPlugin.convertToPath("#responsive circle, #responsive rect");
  // MorphSVGPlugin.convertToPath("#fd circle, #fd rect");
  gsap.set("#Cog path", { visibility: "hidden" });
  let squarePaths = gsap.utils.toArray(".square path");
  let iconPaths = gsap.utils.toArray("#Cog path");
  //MorphSVGPlugin.convertToPath(".square rect");
  // console.log(iconPaths);
  // console.log(squarePaths);
  let tl1 = gsap.timeline();
  tl1.to(".morphcog", { x: 0, y: 0 });
  $.each(iconPaths, function (indexInArray, valueOfElement) {
    let currentElem = squarePaths[indexInArray];
    //console.log(currentElem);
    $(valueOfElement).addClass("pujnm");
    tl1.to(
      ".morphcog",
      {
        //morphSVG:responsivePaths[indexInArray],
        morphSVG: {
          shape: valueOfElement,
          type: "rotational",
          origin: "20% 60%", //or "20% 60%,35% 90%" if there are different values for the start and end shapes.
        },
        duration: 20,
        // scrollTrigger: {
        //   trigger: ".service-background",
        //   scrub: true,
        //   //pin: true
        // }
      },
      ">"
    );
  });
}
