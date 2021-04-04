

if(true){
  frieDevelopment();

}

// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(MotionPathPlugin);
function frieDevelopment(param) {  

    const tween = gsap.timeline(
        {

        scrollTrigger:{
        //  markers:true,
        trigger:".frieDevelopment",
        start:"top top",
        //end:"bottom bottom",
        scrub:true,
        pin: true
        
    }}
    );

    let de = $("path", "#fd");
    
      
    $.each(de, function (indexInArray, valueOfElement) { 

      let currentElem = $(valueOfElement);
      if (currentElem.hasClass("fd-dev-d"))
        $(".fd-friede-d").hide();
        if (currentElem.hasClass("fd-dev-e"))
        $(".fd-friede-e2").hide();
        if (currentElem.hasClass("fd-de-d"))
        $(".fd-dev-d").hide();
        if (currentElem.hasClass("fd-de-e"))
        $(".fd-dev-e").hide();
        
      tween.to(valueOfElement, {
        duration: 0.2,
        display:"initial",
        ease:Linear.easeNone  
      });  
      
    });
  }


