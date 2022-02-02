//Glitches: 
//      - Swiper Double Scrolls through some slides... Why?
//      - White Background (looks like from vid 3) flickers into the lower pages... why?
//      - Sometimes the videos don't play again after going back into viewBox 
//      - Possibly because of incorrect Swiper Size
//      - Video doesn't resize smoothly. Possibly because of wrong comparison


const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'vertical',
    loop: false,
    centeredSlides: true,  
    speed: 500,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      },
      clickable: 'true',
    },
    
    //Keyboard Control
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      
    //Mousewheel
    mousewheel: {
        
    },
    
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
    breakpoints: {

      480: {
        noSwiping: false,
        grabCursor: true
      },
  
      992: {
        noSwiping: false
      },
  
      1024: {
        noSwiping: true
      },
      1920 : {
        noSwiping: true
      }
    }

  });

  var hidden = document.getElementById("promo-video");
  var el;

    /*IF play-button is pressed, load video*/
 

    var bg = document.getElementById("bgvideo");
    var bg2 = document.getElementById("bgvideo2");
    var bg3 = document.getElementById("bgvideo3");
    /*IF mfp-close is pressed, pause video*/
    function pauseVid() {
       bg.pause();
       console.log("Pause 1");
    }
    function playVid() {
        bg.play();
        console.log("Play 1");
    }
    
    function pauseVid2() {
      bg2.pause();
      console.log("Pause 2");
   }
   function playVid2() {
       bg2.play();
       console.log("Play 2");
   }

   function pauseVid3() {
    bg3.pause();
    console.log("Pause 3");
 }
 function playVid3() {
     bg3.play();
     console.log("Play 3");
 }
    function loadVid() {
      document.querySelector(".pop-vid").load();
  }

/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */

var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
  console.log(window.innerHeight);
  console.log(document.documentElement.clientHeight);
  console.log(distance.top);
  console.log(distance.left);

	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
    distance.bottom <= (window.innerHeight + 330 || document.documentElement.clientHeight + 330) 
		//distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

var page_1 = document.querySelector('#page1');
var page_2 = document.querySelector('#page2');
var page_3 = document.querySelector('#page3');
var page_4 = document.querySelector('#page4');
var page_5 = document.querySelector('#page5');
var page_6 = document.querySelector('#page6');
var page_7 = document.querySelector('#page7');
var page_8 = document.querySelector('#page8');
var page_9 = document.querySelector('#page9');

var mfp_container;

document.addEventListener('click', function() {mfp_container = document.querySelector(".mfp-content"); 
  mfp_container.addEventListener('click', function(){
        document.querySelector(".pop-vid").pause();
    });
  });







window.addEventListener('load', function () {
  document.addEventListener('click', function() {
    if(isInViewport(page_3)) {
      playVid3();
    } else {
      pauseVid3();
    }
  }, false);

  swiper.on('resize', function() {
      if (swiper.height > bg.style.height) {
          bg.style.height = swiper.height;
          bg.style.width = "auto";
      } else {
          bg.style.width = "100%";
          bg.style.height = "auto";  
      }
  });


  swiper.on('transitionEnd', function() {
              if(isInViewport(page_1)) {
                playVid();
              } else {
                pauseVid();
              }
  }, false); 

  swiper.on('transitionEnd', function() {
    if(isInViewport(page_2)) {
      playVid2();
    } else {
      pauseVid2();
    }
  }, false); 

  swiper.on('transitionEnd', function() {
    if(isInViewport(page_3)) {
      playVid3();
    } else {
      pauseVid3();
    }
  }, false); 

  swiper.on('transitionEnd', function() {
    if(isInViewport(page_4)) {
      document.querySelector(".quote").style.width = "100%";
      console.log("animated");
    } 
  }, false);

});

/*
swiper.on('transitionEnd', function() {
  if(isInViewport(page_4)) {
    playVid();
    console.log("Playing Video");
  } else {
    pauseVid();
    console.log("Pausing Video");
  }
}, false); 

swiper.on('transitionEnd', function() {
  if(isInViewport(page_5)) {
    playVid();
    console.log("Playing Video");
  } else {
    pauseVid();
    console.log("Pausing Video");
  }
}, false); 

swiper.on('transitionEnd', function() {
  if(isInViewport(page_6)) {
    playVid();
    console.log("Playing Video");
  } else {
    pauseVid();
    console.log("Pausing Video");
  }
}, false); 

swiper.on('transitionEnd', function() {
  if(isInViewport(page_7)) {
    playVid();
    console.log("Playing Video");
  } else {
    pauseVid();
    console.log("Pausing Video");
  }
}, false); 

swiper.on('transitionEnd', function() {
  if(isInViewport(page_8)) {
    playVid();
    console.log("Playing Video");
  } else {
    pauseVid();
    console.log("Pausing Video");
  }
}, false); 

swiper.on('transitionEnd', function() {
  if(isInViewport(page_9)) {
    playVid();
    console.log("Playing Video");
  } else {
    pauseVid();
    console.log("Pausing Video");
  }
}, false); */
