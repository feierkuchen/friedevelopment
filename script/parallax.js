gsap.registerPlugin(ScrollTrigger);

// const tweenpin = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".movparallax",
//       start: "top top",
//       end: "+=100vh",
//       pin: true,
//     },
//   });

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger",
    scrub: 3,
    start: "top top",
    end: "+=500px",
  },
});
let allimgs = gsap.utils.toArray(".part");
let scale = 1;
console.log(allimgs);
allimgs.forEach((img) => {
  scale = scale * 1.3;
  console.log(scale);
});
tl1.to(
  ".blumen",
  {
    scale: 1.3,
  },
  0
);
tl1.to(
  ".blumen",
  {
    y: "-1000px",
  },
  0
);
tl1.to(
  ".baeume",
  {
    scale: 1.3,
  },
  0
);
tl1.to(
  ".baeume",
  {
    y: -600,
  },
  0
);
tl1.to(
  ".bergsee",
  {
    scale: 0.8,
  },
  0
);
tl1.to(
  ".bergsee",
  {
    y: -400,
  },
  0
);
tl1.to(
  ".berg",
  {
    scale: 0.8,
  },
  0
);
tl1.to(
  ".berg",
  {
    y: -300,
  },
  0
);
tl1.to(
  ".himmel",
  {
    y: -200,
  },
  0
);
tl1.to(
  ".blur, .gray",
  {
    y: -600,
  },
  0.05
);
