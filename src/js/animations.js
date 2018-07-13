
/*
  Trigger Onscroll Animations 
  ___________________________________________________
*/

var winTracker = addEventListener('scroll', function(e){
  var winPointY = window.scrollY;
  var winPointX = window.innerWidth;
   
  // About Page Listener ______________________

  // Animate Egucation Icon
  if(winPointY >= "500" && winPointX >= "778"){
    animeEgucationIcon.play();

  } else if(winPointY >= "600" && winPointX <= "778"){
    animeEgucationIcon.play();
  };

  // Animate Skill Cards
  if(winPointY >= "1286" && winPointX >= "778"){

    card1.play();
    card2.play();
    card3.play();

  };
  // Animate Skill Cards Respansive
  if (winPointY >= "1300" && winPointX <= "778"){
    card1.play();
  };
  
  if (winPointY >= "2016" && winPointX <= "778"){
    card2Respansive.play();
  };

  if (winPointY >= "2526" && winPointX <= "778"){
    card3Respansive.play();
  };

  //  Animate Trading Icon
  if(winPointY >= "1900" && winPointX >= "778"){
    tradingIcon.play();
  };

  if(winPointY >= "1900" && winPointX >= "778"){
    tradingIcon.play();
  };

  if(winPointY >= "2900" && winPointX <= "778"){
    tradingIcon.play();
  };

  //  Animate Design & Coding Icon
  if(winPointY >= "2350" && winPointX >= "778"){
    codingDesignIcons.play();
  };

  if(winPointY >= "3514" && winPointX <= "778"){
    codingDesignIcons.play();
  };

  // Services Page Listener ______________________
  if(winPointY >= "0"  && winPointX >= "778"){
    servicesGroup1Animation.play();
    servicesGroup2Animation.play();
  };

  if(winPointY >= "510"  && winPointX >= "778"){
    servicesGroup3Animation.play();
    servicesGroup4Animation.play();
  };

   // Services Page ( Respansive ) Listener ______________________
   if(winPointY >= "473"  && winPointX <= "778"){
    servicesGroup1Animation.play();
    servicesGroup2Animation.play();
  };

  if(winPointY >= "1343"  && winPointX <= "778"){
    servicesGroup3Animation.play();
    servicesGroup4Animation.play();
  };


  //console.log(winPointX); 
  //console.log(winPointY); 
});











/*
  Below Are the animation Properties
  ___________________________________________________
*/
// ___________________________________________________
// Signature Animations - About Page
var nameStroke = anime({
    targets: '#name .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    stroke: [
      {value: '#039BE5'},
      {value: '#fff'}
    ],
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    
    loop: 0
  });
// Background fill 1
var nameColor1 = anime({
  targets: '#name .lines .st0',
  fill: [
    {value: '#039BE5'}, 
    {value: '#00ACC1'},
    {value: '#039BE5'},
  ],
  easing: 'easeInSine',
  delay: function(el, i) { return i * 350 },
  duration: 5000,
  direction: 'alternate',
  loop: false
});
// background Fill 2
var nameColor2 = anime({
  targets: '#name .lines .st1',
  fill: [
    {value: '#00ACC1'},
    {value: '#039BE5'},
    {value: '#00ACC1'},
  ],
  easing: 'easeInSine',
  delay: function(el, i) { return i * 350 },
  duration: 5000,
  direction: 'alternate',
  loop: false
});


// ___________________________________________________
// Egucation Icon Animations - About Page

var animeEgucationIcon = anime({
  targets: '#educationIcon',
  translateY: [0, -30, 0],
  duration: 2000,
  scale: [1, 1.3, 1],
  rotate: 
    [
      {value: 0},
      {value: 360},
    ],
  
  autoplay: false,
});

// ___________________________________________________
// Skils Animations ( Respansive ) - About Page

var card1 = anime.timeline({
  autoplay: false,
});

var card2 = anime.timeline({
  autoplay: false,
});

var card3 = anime.timeline({
  autoplay: false,
});

// Card 1 - Softwears
card1
  .add({
      targets: '#cardSoftwears',
      translateX: [-50, 0],
      duration: 500,
      easing: [.90, -0.10, .29, 1.90],
      elasticity: 200,
      opacity: [.0, 1],
  })
  // progress-bar
  .add({
    targets: '#cardSoftwears .progress-bar',
    translateX: [-1000, 0],
    easing: 'easeInSine',
    offset: '-=700',
    delay: function(el, i, l){return i * 200},
  })
  // Percentages
  .add({
    targets: '#cardSoftwears .small',
    translateX: [-30, 0],
    opacity:[.0, 1.0],
  });

// Card 2 - Tecnologies 
card2
  .add({
      targets: '#cardTecnologies',
      translateY: [40, 0 ],
      duration: 500,
      easing: [.90, -0.10, .29, 1.90],
      offset: '+=3000',
      opacity: [.0, 1],
  })
   // progress-bar
  .add({
    targets: '#cardTecnologies .progress-bar',
    translateX: [-700, 0],
    easing: 'easeInSine',
    offset: '-=1000',
    delay: function(el, i, l){return i * 200},
  })
  .add({
    targets: '#cardTecnologies .small',
    translateX: [-30, 0],
    opacity:[.0, 1.0],
  });

// Card 3 - Trading
card3
  .add({
    targets: '#cardTrading',
    translateX: [50, 0],
    duration: 500,
    easing: [.90, -0.10, .29, 1.90],
    offset: '+=5500',
    opacity: [.0, 1],
  })
   // progress-bar
  .add({
    targets: '#cardTrading .progress-bar',
    translateX: [-700, 0],
    easing: 'easeInSine',
    offset: '-=1000',
    delay: function(el, i, l){return i * 200},
  })
   // Percentages
  .add({
    targets: '#cardTrading .small',
    translateX: [-30, 0],
    opacity:[.0, 1.0],
  });

// ___________________________________________________
// Skils Animations ( Respansive ) - About Page

var card2Respansive = anime.timeline({
  autoplay: false,
});

var card3Respansive = anime.timeline({
  autoplay: false,
});

// Card 2 - Tecnologies 
card2Respansive
  .add({
      targets: '#cardTecnologies',
      translateY: [40, 0 ],
      duration: 500,
      easing: [.90, -0.10, .29, 1.90],
      opacity: [.0, 1],
  })
   // progress-bar
  .add({
    targets: '#cardTecnologies .progress-bar',
    translateX: [-700, 0],
    easing: 'easeInSine',
    delay: function(el, i, l){return i * 200},
  })
  .add({
    targets: '#cardTecnologies .small',
    translateX: [-30, 0],
    opacity:[.0, 1.0],
  });

// Card 3 - Trading
card3Respansive
  .add({
    targets: '#cardTrading',
    translateX: [50, 0],
    duration: 500,
    easing: [.90, -0.10, .29, 1.90],
    opacity: [.0, 1],
  })
   // progress-bar
  .add({
    targets: '#cardTrading .progress-bar',
    translateX: [-700, 0],
    easing: 'easeInSine',
    delay: function(el, i, l){return i * 200},
  })
   // Percentages
  .add({
    targets: '#cardTrading .small',
    translateX: [-30, 0],
    opacity:[.0, 1.0],
  });




// ___________________________________________________
// Trading Icon Animations - About Page

var tradingIcon = anime.timeline({
  autoplay: false,
});

// Trading Icon Timeline
tradingIcon
  .add({
      targets: '#about-trading svg #graph',
      translateY: [10, 0],
      opacity:[.0, 1.0],
      easing: 'easeInSine',
      delay: function(el, i, l){return i * 500},
  })

  .add({
    targets: '#cardSoftwears .progress-bar',
    targets: '#about-trading svg #graphLine',
    //translateX: [-100, 0],
    opacity:[.0, 1.0],
    easing: 'easeInOutSine',
    offset: '-=500',
  });

// ___________________________________________________
// Coding And Design Icon Animations - About Page
var codingDesignIcons = anime.timeline({
  autoplay: false,
});

// Coding And Design Icon Timeline
codingDesignIcons
  .add({
    targets: '#codingDesignIconGroup .design-icon',
    translateX: [-80, 0],
    scale: [1.4, 1],
    duration: 2000,
    opacity:[.0, 1.0],
  })

  .add({
    targets: '#codingDesignIconGroup .pluse-icon',
    translateY: [-30, 0],
    scale: [1.5, 1],
    duration: 2400,
    offset: '-=1000',
    opacity:[.0, 1.0],
  })

  .add({
    targets: '#codingDesignIconGroup .coding-icon',
    translateX: [80, 0],
    scale: [1.4, 1],
    duration: 2000,
    offset: '-=1800',
    opacity:[.0, 1.0],
  });


  // ___________________________________________________
// Services Animation Group-1- Services Page
var servicesGroup1Animation = anime({
  targets: '#check-group-1 img',
  scale: [0, 1.5, 1],
  opacity:[.0, 1.0],
  easing: 'easeInSine',
  delay: function(el, i, l){return i * 800},
  autoplay:false,
});
var servicesGroup2Animation = anime({
  targets: '#check-group-1 h4',
  opacity:[.0, 1.0],
  easing: 'easeInSine',
  delay: function(el, i, l){return i * 800},
  autoplay:false,
});

// Services Animation Group-2 - Services Page
var servicesGroup3Animation = anime({
  targets: '#check-group-2 img',
  scale: [0, 1.5, 1],
  opacity:[.0, 1.0],
  easing: 'easeInSine',
  delay: function(el, i, l){return i * 800},
  autoplay:false,
});
var servicesGroup4Animation = anime({
  targets: '#check-group-2 h4',
  opacity:[.0, 1.0],
  easing: 'easeInSine',
  delay: function(el, i, l){return i * 800},
  autoplay:false,
});




// ___________________________________________________
// Contact Card - Contact Page
var nameStroke = anime({
  targets: '.form',
  translateX: [-1500, 0],
  opacity:[1],
  duration: 900,
  easing: [.90, -0.10, .29, 1.35],
});
