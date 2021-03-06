gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, SplitText, MotionPathPlugin);
const colors = ["#36a9e1", "#1abc9c", "#006494"];

if (true) {
  frieDevelopment();
  logoFlip();
  //morphIcon();
  sunshine();
  //heroText();
  //firstSkit();
  //heroAnim();
  //wordpressParallax();
  //servicesMoreContentMorph();
  servicesScrollVertical();
  //servicesMoreContentScrollVertical();
  //specialOffer();
  techSkills();
  pictures();

  titleLikeLogo();
  contact();

  // // services();
  // welcomeText();
  // cta();
}

function sunshine() { 
  const tlsunshine = gsap.timeline({
    scrollTrigger: {
      trigger: "#fd-content",
      start: "top center",
      end: "+=2000vh",
      scrub: 1,
    },
  });
  tlsunshine.set(
    ".fd-content-container",
    {
      background:"#7f9cb9"  
    }
  )
  tlsunshine.to(
    ".fd-content-container",
    {
      background:"#03090f"  
    }
  )
  tlsunshine.from(
    ".fd-content-text",
    {
      autoAlpha:0  
    }
    ,"0"
  )
  tlsunshine.to(
      ".fd-content-text",
      {
        autoAlpha: 0
      }
      , ">2"
    );
 }
function contact() { 
  gsap.set(
        "#contact .card-background",
        {
          background: "#ff3a3af5",
          autoAlpha: 0,
        }
      )
 


      
      const tlsunshine = gsap.timeline({
        paused: true,
      })
   tlsunshine.set(
        "#contact .card-background",
        {
          background: "#ff3a3af5",
          autoAlpha: 0,
        }
      )
      tlsunshine.to(
        "#contact .card-background",
        {
          autoAlpha: 1
        }
        , "0"
      )
      tlsunshine.to(
        "#contact .card-background",
        {
          background: "#1d1919f5",
          duration:5
        },
        ">"
  )
  // const tlsunshineReversed = gsap.timeline({
  //       paused: true,
  //     })
      
  //     // tlsunshineReversed.to(
  //     //   "#contact .card-background",
  //     //   {
  //     //     background: "#1d1919f5",
  //     //     duration:duration
  //     //   },
  //     //   ">"
  // //)
  // tlsunshineReversed.from(
  //       "#contact .card-background",
  //       {
  //         autoAlpha: 1
  //       }
  //       , "0"
  //     )

  ScrollTrigger.create({
  trigger: "#contact",
  start: "top center",
      end: "+=400vh",
      scrub: 1,
    onEnter: self => {
       const tlsunshine = gsap.timeline({
        paused: true,
      })
   tlsunshine.set(
        "#contact .card-background",
        {
          background: "#ff3a3af5",
          autoAlpha: 0,
        }
      )
      tlsunshine.set(
        "#contact .card-background .container",
        {
          width:'160%',
        },
  )
      tlsunshine.to(
        "#contact .card-background",
        {
          autoAlpha: 1
        }
        , "0"
      )
      tlsunshine.to(
        "#contact .card-background",
        {
          background: "#1d1919f5",
          duration:5
        },
        ">"
      )
      tlsunshine.to(
        "#contact .card-background .container",
        {
          width:'40%',
          duration:2
        },
        "<"
  )
      tlsunshine.play();
      console.log("enter")
    },
    
     onLeaveBack: self => {
      gsap.to(
        "#contact .card-background",
        {
          autoAlpha: 0,
          duration:4
        }
        , "0"
      )
 gsap.set(
        "#contact .card-background .container",
        {
          width:'160%',
        },
  )
       console.log("leaveback")
    },
     
  onUpdate: self => {
    console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
  }
  });
  // tlsunshine.to(
  //     "#contact .card-background",
  //     {
  //       autoAlpha: 0
  //     }
  //     , ">2"
  //   );
 }

function specialOffer(params) {
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#special-offer",
      start: "top center",
      end: "+=1000vh",
      scrub: 1,
    },
  });
  tl1.fromTo(
    "#special-offer .star-1",
    {
      y: "60%",
    },
    {
      y: "-60%",
    },
    0
  );
  tl1.fromTo(
    "#special-offer .star-2",
    {
      y: "70%",
    },
    {
      y: "-70%",
    },
    0
  );
  tl1.fromTo(
    "#special-offer .star-3",
    {
      y: "75%",
    },
    {
      y: "-75%",
    },
    0
  );
  // tl1.from(
  //   ".tech-skills .line.second",
  //   {
  //     y: "-10%",
  //   },
  //   {
  //     y: "10%",
  //   },
  //   0
  // );
}
function techSkills(params) {

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#technologien",
      // start: "top bottom",
      // end: "bottm top",
      scrub: 1,
    },
  });
  // tl1.set(
  //   ".tech-skills .icon-wraper", {
  //     autoAlpha:0
    
  // });
  tl1.to(
    "#technologien h2", {
      autoAlpha:1
    
  });
  // tl1.to(
  //   ".tech-skills .line.first",
  //   {
  //     x: "-10%",
  //   },
  //   {
  //     x: "10%",
  //   }
  // );
  // tl1.from(
  //   ".tech-skills .line.second",
  //   {
  //     x: "-10%",
  //   },
  //   {
  //     x: "10%",
  //   },
  //   0
  // );
  // tl1.from(
  //   ".tech-skills .line.third",
  //   {
  //     x: "-20%",
  //   },
  //   {
  //     x: "20%",
  //   },
  //   0
  // );
  tl1.to(
    ".tech-skills .icon-wraper", {
      autoAlpha:1
    
  });
    tl1.to(".tech-skills .icon-wraper", {
     motionPath: {
        path: [{ x: 100, y: 100 }, { x: 700, y: 200 },{ x: 1400, y: 100 }],
        // align: "#path",
        // alignOrigin: [0.5, 0.5],
        // autoRotate: true
       ease:"none"
    },
    duration: 5,
    }, 0)
  tl1.from(
    ".tech-skills .icon-wraper", {
      autoAlpha: 0,
      duration:3
    
  });
    tl1.to(
    "#technologien h2", {
      autoAlpha:0    
    });
  
}
function pictures(params) {
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".pictures",
      start: "top bottom",
      end: "+=1000vh",
      scrub: true,
    },
  });
   tl1.to(
    "#friede h2", {
      autoAlpha:1
    
  });
  tl1.to(
    ".pictures .line.first",
    {
      x: "-30%",
    },
    {
      x: "30%",
    }
  );
  tl1.from(
    ".pictures .line.second",
    {
      x: "-20%",
    },
    {
      x: "20%",
    },
    0
  );
  tl1.to(
    ".pictures .line.third",
    {
      x: "-40%",
    },
    {
      x: "40%",
    },
    0
  );
   tl1.to(
    "#friede h2", {
      autoAlpha:0
    
  });
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
  //timelinge f??rs logo erscheinen
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
      end: "+=2000vh",
      pin: true,
    },
  });

  //timelinge f??rs logo erscheinen
  //timelinge f??rs logo erscheinen
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

  // tl2.from(
  //   ".hero-text, .hero-kontakt",
  //   {
  //     // duration: 10,
  //     autoAlpha: 0,
  //     ease: Linear.easeNone,
  //     duration: 100,
  //   },
  //   0
  // );
  // tl2.to(
  //   ".fd-dev",
  //   {
  //     opacity: 0,
  //     ease: Linear.easeNone,
  //   },
  //   0
  // );
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
      start: "+=2000vh",
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

  // gsap.set("#fd", {
  //   position: "fixed",
  //   top: "34%",
  //   left: "0",
  //   right: 0,
  //   //bottom: 0,
  //   margin: "auto auto",
  // });
  // tl1.to(
  //   "#fd",
  //   {
  //     position: "fixed",
  //     //duration: 0.9,
  //     top: "1vh",
  //     left: "2vw",
  //     right: "unset",
  //     //height: "calc(clamp(20px,2vw,30px) + 2vh)",
  //     width: "clamp(10px, 80vw, 300px)",
  //     //width: "90vw",
  //     margin: "0",
  //     //width: "unset",
  //   },
  //   0
  // );


  tl1.to(
    "#fd", {
      background: "#0000",
      duration:0.2
  } ,0
  )

  gsap.set(".fd", {
    position: "relative",
    marginLeft: "2vw",
  });
  tl1.from(
    "#fd",
    {
      width: "70vw",
      marginLeft: "10vw",
      y: "+29vh",
      left: "2vw",
      right: 0,
      position: "absolute",
    },
    ">"
  );
  tl1.set(".fd", { marginLeft: "0vw" });
  tl1.set(".fd", { width: "clamp(20px, 80vw, 350px)" });
  tl1.to(
    ".js-navigation",
    {
      opacity: 1,
    },
    "<"
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

function servicesScrollVertical() {
  gsap.set("#all-services-conainer", {
    left:"2000px"
  });
  let tweenServicesTiles = gsap.timeline( {

      scrollTrigger: {
        trigger: ".service-container",
        //start: "top top-=600vh",
        invalidateOnRefresh: true,
        id: "scrollServicesTiles",
        //pin: true,
        scrub: 1,
        snap: 0.2,
        //end: () => "+=" + container.offsetWidth + "vh",
        end: () => "+=1000vh",
    }
  }
  );
    // gsap.set(
    //   ".moreContent", {autoAlpha:0}
    // )
    tweenServicesTiles.to(
    "#services h2", {
      autoAlpha:1
    
  });
    //  tweenServicesTiles.to(
    //   ".moreContent", {autoAlpha:1, duration:1}
    // )
  

  tweenServicesTiles.to("#all-services-conainer", {
    left: "-2000px",
    ease: "none",
  }, 0)
  
  tweenServicesTiles.to(
    "#services h2", {
      autoAlpha:0
    
  });
  // let tweenServicesBackground = gsap.to("body", {
  //     background:"#00649400",
  //     ease: "none",
  //     //paused: true,
  //     scrollTrigger: {
  //       trigger: ".service-container",
  //       start: "top top-=600vh",
  //       invalidateOnRefresh: true,
  //       id: "scrollServicesTiles",
  //       //pin: true,
  //       scrub: 1,
  //       snap: 0.2,
  //       //end: () => "+=" + container.offsetWidth + "vh",
  //       end: () => "+=1000vh",
  //   }
  // }
  // );
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
        end: "+=" + (container.offsetWidth + 3200 + "vh"),
        //end: "+=" + container.offsetWidth ,
        pin: true,
      },
    });
    

    //if (container) {
    let tweenServices = gsap.timeline( {
    
      scrollTrigger: {
        trigger: ".service-container",
        start: "top top-=600vh",
        invalidateOnRefresh: true,
        id: "scrollServices",
        //pin: true,
        scrub: 1,
        snap: 0.2,
        //end: () => "+=" + container.offsetWidth + "vh",
        end: () => "+=" + (container.offsetWidth + 1500) + "vh",
      },
    });

    tweenServices.to(".moreContent", {
      x: () => -container.scrollWidth + "px",
      ease: "none",
    })


    
    return tweenServices;
  };
  //};
  $(".card").click(function (e) {
    $(".vertical-scroll-container").removeClass("tiles");
    // if (!tweenVertical)

    tweenVertical = anim();
    serviceEndSkit();
  });
  $(".details-close").click(function (e) {
    console.log(this);
    ScrollTrigger.getById("scrollServicesPin").kill(true);
    ScrollTrigger.getById("scrollServices").kill(true);
    window.location.href = "#services";
    tweenVertical.pause(0).kill(true);
    tweenServicesPin.pause(0).kill(true);
    $(".vertical-scroll-container").addClass("tiles");
  });
}

function serviceEndSkit(params) {
  console.log("serviceendkit");
  const tweenServicesEnd = gsap.timeline({
    scrollTrigger: {
      // markers:true,
      trigger: ".service-container",
      start: "+=7000vh",

      end: "+=2000",
      scrub: true,
    },
  });
  tweenServicesEnd.to(".service-container h2", {
    autoAlpha: 0,
  });
  tweenServicesEnd.to(
    ".more-container",
    {
      rotate: "180deg",
    },
    0
  );
  tweenServicesEnd.to(
    ".more-container",
    {
      // scaleX: 0.1,
      // scaleY: 0.3,
      scale: 10,
      borderRadius: "50%",
    },
    0
  );
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
