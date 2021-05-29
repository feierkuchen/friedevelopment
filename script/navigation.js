$(".burger").click(function (e) {
  console.log("startNavigationAnimation");
  startNavigationAnimation();
});

gsap.set(".menu-item", { autoAlpha: 1 });
gsap.set(".burger-close", { autoAlpha: 0 });
gsap.set(".burger-menu", { autoAlpha: 1 });
let tl1 = gsap.timeline({ paused: true, reversed: true });
let menuItems = gsap.utils.toArray(".menu-item");
burger = document.querySelector(".burger");
let postitionBurger = burger.getBoundingClientRect();
// menuItems.forEach((item) => {
//   tl1.from(
//     item,
//     {
//       duration: 0.3,
//       autoAlpha: 0,
//       x: 100,
//       y: () => {
//         var rect = item.getBoundingClientRect();
//         console.log(rect.top, rect.right, rect.bottom, rect.left);

//         let offset = rect.top - postitionBurger.top;
//         return -offset;
//       },
//       scale: 0,
//     },
//     "-=0.02"
//   );
// });
tlburger = gsap.to(".burger-menu", { autoAlpha: 0, paused: true });
tlburgerClose = gsap.to(".burger-close", { autoAlpha: 1, paused: true });

tl1 = gsap.from(".menu-item", {
  duration: 0.3,
  autoAlpha: 0,
  x: (index, target, targets) => {
    var rect = target.getBoundingClientRect();
    //(rect.top, rect.right, rect.bottom, rect.left);

    let offset = rect.right - postitionBurger.right;
    return -offset;
  },
  y: (index, target, targets) => {
    var rect = target.getBoundingClientRect();
    // console.log(rect.top, rect.right, rect.bottom, rect.left);

    let offset = rect.top - postitionBurger.top;
    return -offset;
  },
  stagger: 0.02,
  scale: 0,
  paused: true,
});

let startNavigationAnimation = function (param) {
  if (tl1.paused() || tl1.reversed()) {
    tl1.play();
    tlburger.play();
    tlburgerClose.play();
    gsap.set("header", { zIndex: 2 });
    gsap.set("main", { opacity: 0.3 });
  } else {
    tl1.reverse();
    tlburger.reverse();
    tlburgerClose.reverse();
    gsap.set("header", { zIndex: 0 });
    gsap.set("main", { opacity: 1 });
  }
};
