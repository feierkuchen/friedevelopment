gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

if (true) {
  frieDevelopment();
  //morphIcon();
  logoFlip();
  //heroText();
  heroAnim();
  //wordpressParallax();
  servicesMoreContentMorph();
  //servicesMoreContentScrollVertical();
  // // services();
  welcomeText();
}

function frieDevelopment(param) {
  const tweenpin = gsap.timeline({
    scrollTrigger: {
      trigger: ".frieDevelopment",
      start: "top top",
      end: "+=2000",
      pin: true,
    },
  });
  //timelinge fürs logo erscheinen
  const tween = gsap.timeline({
    scrollTrigger: {
      trigger: ".triggerLogo",
      start: "top top",
      end: "+=1000",
      scrub: 1,
    },
    defaults: { duration: 0.1 },
  });

  let de = gsap.utils.toArray("#fd path");

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
      autoAlpha: 0,
      ease: Linear.easeNone,
    });
  });
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

  gsap.set("#fd", {
    position: "fixed",
    top: "0",
    left: "0",
    right: 0,
    bottom: 0,
    margin: "auto auto",
  });
  gsap.to("#fd", {
    // duration: 10,
    top: "2vh",
    left: "2vw",
    right: "unset",
    height: "5vh",
    margin: "0",
    width: "unset",
    scrollTrigger: {
      trigger: ".triggerCta",
      start: "top top-=2500",
      scrub: 1,
      ease: "none",
    },
  });

  gsap.to(".cta", { autoAlpha: 1 });
}

function heroAnim() {

  friedevLogoAnim("#logo-use", {
    trigger: ".triggerFd",
    start: "top bottom-=200",
    end: "+=500",
    scrub: true,
  });
  const tweenHeroAnim = gsap.timeline({
    scrollTrigger: {
      //  markers:true,
      trigger: ".responsive",
      start: "top bottom",
      end: "+=1500",
      scrub: 1,
    },
  });
  tweenHeroAnim.to(".heroContainer", {
    y: -600,
  });
  tweenHeroAnim.to(
    ".heroContainer i",
    {
      y: -1000,
    },
    0
  );
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
  let container = document.getElementById("moreContent");
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
  console.log(design, service);
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
      console.log("und");
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
function servicesMoreContentScrollVertical() {
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
  console.log(iconPaths);
  console.log(squarePaths);
  let tl1 = gsap.timeline();
  tl1.to(".morphcog", { x: 0, y: 0 });
  $.each(iconPaths, function (indexInArray, valueOfElement) {
    let currentElem = squarePaths[indexInArray];
    console.log(currentElem);
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
