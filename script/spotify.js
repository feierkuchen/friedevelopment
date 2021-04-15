const amount = 3;
const colors = ["#1d71b8", "#36a9e1", "rgba(26, 188, 156, 1)","rgba(0, 100, 148, 1)", "#EA7D00", "#F4B66E", "#F49F3D"];
const minHeight = 2;
const maxHeight = 5;
const minWidth = 1;
const maxWidth = 10;
const startPosition = { x: 20, y: 90 };
const eases = ["slow","powerIn","powerOut"];
const logoSvg = $("#fd");
const logoJs = document.getElementById("fd");
const logoTop = logoJs.getBoundingClientRect().top;
console.log(logoTop);


addRandomObjects(".frieDevelopment",1,0);
addRandomObjects(".heroContainer",6,200);


function addRandomObjects(selector,dividor,offset){
    //console.log($(selector).height());
    for (let i = 0; i < amount; i++) {
        // let newSquare = $("<svg><rect class='square' ></rect></svg>")
        //   .css("width", gsap.utils.random(minWidth/dividor, maxWidth/dividor) * 10 + "px")
        //   .css("height", gsap.utils.random(minWidth/dividor, maxWidth/dividor) * 10 + "px")
        //   .css("background-color", gsap.utils.random(colors))
        //   .css("top", gsap.utils.random(0,1000)+offset)
        //   .css("left", gsap.utils.random(0,3000))
        //   .css("z-index", gsap.utils.random([-6,0]))
        //   .css("opacity",gsap.utils.random(0.4,1))
        //   ;
//         <svg width="402" height="241" viewBox="0 0 402 241" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="402" height="241" fill="#C4C4C4"/>
// </svg>

        // let newSquare = $("<svg class='square' xmlns='http://www.w3.org/2000/svg'></svg>");
        // $(selector).append(newSquare);
        // let newRect = $("<path></path");
        // newSquare.append(newRect);
        // newRect.attr("fill", gsap.utils.random(colors))
        // .attr("d","M0 0h402v241H0z");
        // // .attr("width",  width + "px")
        // // .attr("height", height + "px"); 
        // let width = gsap.utils.random(minWidth/dividor, maxWidth/dividor) * 10;
        // let height = gsap.utils.random(minWidth/dividor, maxWidth/dividor) * 10;
        // newSquare
        // // .attr("width",  width + "px")
        // // .attr("height", height + "px")
        
        // // .attr("x", gsap.utils.random(0,1000)+offset)
        // // .attr("y", gsap.utils.random(0,3000))
        // .attr("viewBox", "0 0 " + width + " " + height )
        
        // // .css("z-index", gsap.utils.random([-6,0]))
        // // .css("opacity",gsap.utils.random(0.4,1))
        // ;
        
      }
      let tl1 = gsap.timeline();

      gsap.utils.toArray(".square").forEach(element => {
        let width = gsap.utils.random(minWidth/dividor, maxWidth/dividor) * 10;
        let height = gsap.utils.random(minWidth/dividor, maxWidth/dividor) * 10;
        $(element.children[0]).attr("height",height);
        $(element.children[0]).attr("width",width);
        $(element).attr("height",height);
        $(element).attr("width",width);
          //gsap.set(element,{width:width, height:height});
        //  // debugger;
           //gsap.set(element.children[0],{width:width, height:height});
        //   let tween = tl1.to(element,{
        //       x:gsap.utils.random(0,1000),
        //       y:gsap.utils.random(0,3000),
              
        //       duration:20,

        //       //ease:gsap.utils.random(eases)
        //   },0);    
      });
    //   tl1.to(".square",{
    //       scale:"random(1.05,1.1)",
    //       duration:1,
    //       repeat:-1,
    //       yoyo: true
    //   })
}