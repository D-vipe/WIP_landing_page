import * as ScrollMagic from 'scrollmagic';
import { gsap, TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

window.onload = () => {

  function lightTitle() {
    console.log('light bg');
    $('.title').addClass('white-logo');
    $('.subtitle').addClass('white-logo');
  }

  function darkTitle() {
    console.log('dark bg');
    $('.title').removeClass('white-logo');
    $('.subtitle').removeClass('white-logo');
  }

  //set blocks to initial animation position

  //fourth slide
  gsap.set('#digitalArchive .section-title', {y: 600, opacity: 0});
  gsap.set('#digitalArchive .boast-block', {y: 600, opacity: 0});
  gsap.set('#digitalArchive .styled-list', {y: 800, opacity: 0});
  gsap.set('.boast-block__circle', {rotate: -200});
  //fifth slide
  gsap.set('#signalTransmission .fourth-ring', {opacity: 0});
  gsap.set('#signalTransmission .third-ring', {opacity: 0});
  gsap.set('#signalTransmission .second-ring', {opacity: 0});
  //sixth slide
  gsap.set('.outer-ring__brick', {opacity: 0})
  gsap.set('.triangle-object', {opacity: 0})
  gsap.set('#promoSection .section-title', {y: 600, opacity: 0});
  gsap.set('#promoSection .boast-block', {y: 500, opacity: 0});
  gsap.set('#promoSection .styled-list', {y: 800, opacity: 0});
  gsap.set('.boast-block__circle', {rotate: -200});
  //seventh slide
  gsap.set('.overlay-title__container .section-title:nth-child(1)', {x: -1000, opacity: 0});
  gsap.set('.overlay-title__container .section-title:nth-child(2)', {x: -900, opacity: 0});
  gsap.set('.overlay-title__container .section-title:nth-child(3)', {x: -800, opacity: 0});
  //eighth slide
  gsap.set('#integrationSlide .triangle-right', {opacity: 0, x: -100});
  gsap.set('#integrationSlide .triangle-right .custom-list', {opacity: 0, x: -60});



  //Values for running numbers
  let initialVal = {val: 0},
    initialSecond = {val: 0},
    initialThird = {val: 0},
    initialFourth = {val: 0},
    firstCounter = 10000,
    secondCounter = 20,
    thirdCounter = 50;


  let initialScreenTl = new TimelineMax();
  console.log('initial timeline');
  console.log(window.scrollY);
  initialScreenTl.fromTo('.fixed-navbar', {zIndex: -1}, {zIndex: 6, delay: .6});
  if (window.scrollY > 200) {
    console.log('remove fucking info text');
    initialScreenTl.to('.header-info__text', .1, {y: 120, opacity: 0});
  } else {
    initialScreenTl.fromTo('.header-info__text', 1, {y: 120, opacity: 0}, {y: 0, opacity: 1})
  }

  initialScreenTl.fromTo('#firstSlideButton', 1, {y: 120}, {y: 0}, '<0')
    .fromTo('.logo__top', 1, {x: 70, y:0, opacity:0}, {x: 0, y:0, opacity:1}, '<0')
    .fromTo('.logo__bottom', 1, {x: -70, y:0, opacity:0}, {x: 0, y:0, opacity:1}, '<0')
    .set('#sectionClients .advantages__item, #sectionClients .owl-stage-outer, #sectionClients .dotted-title, ' +
      '#sectionClients .owl-nav', {opacity: 0})
    .set('#sectionConstructor section-title, #sectionConstructor .styled-list', {opacity: 0});


  let firstSlideLeave = new TimelineMax({paused: true});
  firstSlideLeave.to('#slidingPart', {x: 0, duration: .8})
    .to('.subtitle', {y: 0, duration: .5}, 0)
    .fromTo('.header-info__text', 1, {y: 0, opacity: 1}, {y: -500, opacity: 0}, 0)
    .fromTo('.logo__top', {x: 0, y: 0}, {x: 4500, y: -1000, duration: 2}, 0)
    .fromTo('.logo__bottom', {x: 0, y: 0}, {x: -3800, y: -600, duration: 2}, 0)
    .to('.title', {opacity: 1, duration: .4}, 0);

  let advantagesTl = new TimelineMax({paused: true});
  advantagesTl.fromTo('.advantages__item:nth-child(1)', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 3})
    .to(initialVal, 2.7, {val: firstCounter, roundProps: "val",
    onUpdate:function() {document.getElementById("firstCounter").innerHTML=initialVal.val}
  }, '<.1')
    .fromTo('.advantages__item:nth-child(2)', {y: 750, opacity: 0}, {y: 0, opacity: 1, duration: 3}, 0)
    .to(initialSecond, 2.5, {val: secondCounter, roundProps: "val",
    onUpdate:function() {document.getElementById("secondCounter").innerHTML=initialSecond.val}
  }, '<.1')
    .fromTo('.advantages__item:nth-child(3)', {y: 1000, opacity: 0}, {y: 0, opacity: 1, duration: 3}, 0)
    .to(initialThird, 2.8, {val: thirdCounter, roundProps: "val",
    onUpdate:function() {document.getElementById("thirdCounter").innerHTML=initialThird.val}
  }, '<.1')
    .fromTo('.advantages__item:nth-child(4)', {y: 1250, opacity: 0}, {y: 0, opacity: 1, duration: 3}, 0)
    .to(initialFourth, 2.9, {val: secondCounter, roundProps: "val",
    onUpdate:function() {document.getElementById("fourthCounter").innerHTML=initialFourth.val}
  }, '<.1')
    .fromTo('#sectionClients .dotted-title', {y: 600, opacity: 0} , {y: 0, opacity: 1, duration: 2.7}, 0)
    .fromTo('#sectionClients .owl-stage-outer', {x: 1500, opacity: 0}, {x: 0, opacity: 1, duration: 1, delay: 1.5}, 0)
    .fromTo('#sectionClients .owl-nav', {y: 160, opacity: 0}, {y: 0, opacity: 1, duration: 1.2}, '<.5');



  let controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  let firstScene = new ScrollMagic.Scene({
    offset:200
  });
  firstScene.on("start", function (event) {
    gsap.set('.advantages__item, #sectionClients .owl-stage-outer .dotted-title, .owl-nav', {opacity: 0});

    if (event.scrollDirection === 'FORWARD') {
      firstSlideLeave.play(0);
      // $('.video-bg').find('video').hide();
      $('#sectionClients').removeClass('lighten');
      darkTitle();
      // $('html, body').animate({scrollTop: ($('#sectionClients').offset().top) +"px"}, 800);
    } else if (event.scrollDirection === 'REVERSE') {
      $('.video-bg').find('video').show();
      lightTitle();
      let reverseHeaderSection = new TimelineMax();
      reverseHeaderSection.fromTo('.header-info__text', 1, {y: 120}, {y: 0, opacity: 1})
        .fromTo('.logo__top', 1, {x: 70, y:0, opacity:0}, {x: 0, y:0, opacity:1}, 0)
        .fromTo('.logo__bottom', 1, {x: -70, y:0, opacity:0}, {x: 0, y:0, opacity:1}, 0)
        .to('#slidingPart', {x: -140, duration: .8}, 0)
        .to('.subtitle', {y: -10, duration: .5}, 0);
    }
  });

  let secondScene = new ScrollMagic.Scene({
    triggerElement: '#sectionClients',
    offset: 0,
  })
    .on('enter', function (event) {
      if ( !$('#sectionClients').hasClass('animated') ) {
        advantagesTl.play(0);
        $('#sectionClients').addClass('animated');
      }
  });

  let thirdScene = new ScrollMagic.Scene({
    triggerElement: '#clientSlider',
    offset: .8
  })
    .on('enter', function(event) {
      if ( !$('#sectionConstructor').hasClass('animated') ) {
        $('#sectionClients').addClass('lighten');

        let logoTl = gsap.timeline();
        // if(!$('.title').hasClass('white-logo')) {
        //   logoTl.fromTo('.title', {opacity: 1}, {opacity: 0, duration: .4, onComplete: lightTitle});
        //   logoTl.to('.title', {opacity: 1, duration: 1.2});
        // }

        new TimelineMax()
          .fromTo('#sectionConstructor .section-title', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 2})
          .fromTo('#sectionConstructor .styled-list', {y: 800, opacity: 0}, {y: 0, opacity: 1, duration: 2}, '<.2');

        let figureHub = new TimelineMax();
        figureHub.set('#bottomRighthub', {rotate: -90, y: 23})
          .set('.long-black-line', {rotate: 90, x: 90, y: 120})
          .set('#sectionConstructor .triangle', {opacity: 0})
          .set('.black-circle', {x: -90, y: -335})
          .fromTo('.green-square', {y: 300, rotate: 125, scale: 0}, {y: 0, rotate: 0, scale: 1, duration: .5, delay: .8})
          .fromTo('.short-black-line', {width: 0, rotate: -90}, {width: 130, x: -50, y:-50, duration: .5, delay: .8}, 0)
          .to('.short-black-line', {rotate: 0, x:0, y: 0, duration: .4}, '<.3')
          .to('#bottomRighthub', {rotate: 0, y: 0, duration: .5})
          .to('.long-black-line', {x: 90, y: -53, duration: .5}, '<.3')
          .to('.long-black-line', {x: 60, y: -93, rotate: 70, duration: .2})
          .to('.long-black-line', {x: 20, y: -80, rotate: 50, duration: .2})
          .to('.long-black-line', {x: 0, y:0, rotate: 0, duration: .2});

        figureHub.fromTo('#sectionConstructor .triangle', 1, {rotate: -345, scale: 0, x: -400}, {rotate: 0, scale: 1, x: 0, opacity: 1} )
          .to('.black-circle', .4, {y: -75})
          .to('.black-circle', .1, {x: -70, y: -70})
          .to('.black-circle', .2, {x: -25, y: -120})
          .to('.black-circle', .4, {x: 0, y: 35})
          .to('.short-black-line', .3, {y: 10}, '<.1')
          .to('.black-circle', .3, {x: 0, y: 0})
          .to('.short-black-line', .2, {y: -5}, '<.1')
          .to('.short-black-line', .3, {y: 0});

        $('#sectionConstructor').addClass('animated');
      }
    });


  //object animation
  let figureHub = new TimelineMax({paused: true})
    .set('.brick', {opacity: 0})
    .set('.line.bottom', {opacity: 0, y: -90})
    .set('.line.middle', {opacity: 0, y: -20})
    .set('.top-line', {borderLeft: 0, borderRight: 0, y: -350, width: 0, rotate: 245})
    .to('.top-line', .3, {width: 257, rotate: 0, y: 80, delay: .8})
    .to('.top-line', .3, {y: 250})
    .to('.line.bottom', .3, {opacity: 1, y: 0})
    .to('.top-line', .3, {y: 160}, '<.2')
    .set('.line.middle', {opacity: 1})
    .to('.line.middle', .3, {y: 0, opacity: 1})
    .to('.top-line', .3, {y: 0, borderRight: 20, borderLeft: 20}, '<.2')
    .to('.brick', {
      opacity: 1,
      stagger: .1
    });

  let fourthScene = new ScrollMagic.Scene({
    triggerElement: '#sectionConstructor',
    offset: 400,
    triggerHook: 0,
  })
    .on('enter', function(event) {
      if (!$('#digitalArchive').hasClass('animated')) {
        console.log('trigger fourth slide animation');
        gsap.fromTo('#digitalArchive .section-title', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 2});
        gsap.fromTo('#digitalArchive .boast-block', 2.5, {y: 600, opacity: 0}, {y: 0, opacity: 1}, '<.2');
        gsap.fromTo('#digitalArchive .styled-list', 2.2, {y: 800, opacity: 0}, {y: 0, opacity: 1});
        gsap.fromTo('.boast-block__circle', 3, {rotate: -200}, {rotate: 0});
        figureHub.play(0);
        $('#digitalArchive').addClass('animated');
      }
    });
    // .on('leave', function(event) {
    //   console.log('trigger fourth leave animation');
    //   gsap.to('#digitalArchive .section-title', 2, {y: 600, opacity: 0});
    //   gsap.to('#digitalArchive .boast-block', 2.5, {y: 600, opacity: 0});
    //   gsap.to('#digitalArchive .styled-list', 2.2, {y: 800, opacity: 0});
    //   gsap.to('.boast-block__circle', 3, {rotate: -200});
    // });


  gsap.fromTo('#signalTransmission .section-title', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 2});
  gsap.fromTo('#signalTransmission .styled-list', {y: 800, opacity: 0}, {y: 0, opacity: 1, duration: 2}, '<.3');

  let circleHub = new TimelineMax({paused: true})
    .fromTo('#signalTransmission .section-title', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 2})
    .fromTo('#signalTransmission .styled-list', {y: 800, opacity: 0}, {y: 0, opacity: 1, duration: 2}, '<.3')
    .to('#signalTransmission .fourth-ring', 1, {opacity: 1}, '<.8')
    .fromTo('#signalTransmission .fourth-ring', 1.5, {rotate: 395}, {rotate: 50}, '<.2')
    .fromTo('#signalTransmission .third-ring', 1.5, {rotate: -395}, {rotate: 50, opacity: 1}, '<.3')
    .fromTo('#signalTransmission .second-ring', 1.5, {rotate: 395}, {rotate: 50, opacity: 1}, '<.3');

  let fifthScene = new ScrollMagic.Scene({
    triggerElement: '#digitalArchive',
    offset: 400,
    triggerHook: 0
  })
    .on('enter', function() {
      if ( !$('#signalTransmission').hasClass('animated') ) {
        console.log('trigger fifth slide');
        circleHub.play(0);
        $('#signalTransmission').addClass('animated');
      }
    });



  let triangleAnimation = new TimelineMax({paused: true})
    .to('#firstRing .outer-ring__brick', .5, {opacity: 1, delay: .8})
    .fromTo('#firstRing .outer-ring__brick:nth-child(1)', .8, {y: 130}, {y: 0, opacity: 1}, '<.2')
    .fromTo('#firstRing .outer-ring__brick:nth-child(2)', .8, {x: 135}, {x: 0, opacity: 1}, '<0')
    .fromTo('#firstRing .outer-ring__brick:nth-child(3)', .8, {x: -135}, {x: 0, opacity: 1}, '<0')
    .fromTo('#firstRing .outer-ring__brick:nth-child(4)', .8, {y: -140}, {y: 0, opacity: 1}, '<0')
    .fromTo('.triangle-object', .6, {rotate:-90, opacity: 0, scale: 0}, {x: -20, y: -30,
    scale: .8, opacity: 1})
    .to('#firstRing', .8, {rotate: -90}, '<.1')
    .to('#secondRing .outer-ring__brick', .3, {opacity: 1}, '<.2')
    .fromTo('#secondRing', .8, {rotate: -45}, {rotate: 45}, '<.1')
    .to('.triangle-object', .8, {rotate: 0, x:0, y: 0, scale: 1}, '<0')
    .fromTo('#secondRing .outer-ring__brick:nth-child(1) .outer-ring__cover', .8, {y: 60}, {y: 0}, '>.2')
    .fromTo('#secondRing .outer-ring__brick:nth-child(2) .outer-ring__cover', .8, {y: -60}, {y: 0}, '<0')
    .fromTo('#secondRing .outer-ring__brick:nth-child(3) .outer-ring__cover', .8, {y: 60}, {y: 0}, '<0')
    .fromTo('#secondRing .outer-ring__brick:nth-child(4) .outer-ring__cover', .8, {y: -60}, {y: 0}, '<0')
    .to('.triangle-object', .3, {scale: .9}, '<0')
    .to('#secondRing .outer-ring__brick:nth-child(1) .outer-ring__cover', .8, {y: -60}, '>.5')
    .to('#secondRing .outer-ring__brick:nth-child(2) .outer-ring__cover', .8, {y: 60}, '<0')
    .to('#secondRing .outer-ring__brick:nth-child(3) .outer-ring__cover', .8, {y: -60}, '<0')
    .to('#secondRing .outer-ring__brick:nth-child(4) .outer-ring__cover', .8, {y: 60}, '<0')
    .to('.triangle-object', .3, {scale: 1}, '<.2');


  let sixthScene = new ScrollMagic.Scene({
    triggerElement: '#promoSection',
    // triggerHook: 0,
  })
    .on('enter', function() {
      if ( !$('#promoSection').hasClass('animated') ) {
        gsap.fromTo('#promoSection .section-title', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 2});
        gsap.fromTo('#promoSection .boast-block', {y: 500, opacity: 0}, {y: 0, opacity: 1, duration: 3}, '<.2');
        gsap.fromTo('#promoSection .styled-list', {y: 800, opacity: 0}, {y: 0, opacity: 1, duration: 2}, '<.3');
        gsap.fromTo('.boast-block__circle', {rotate: -200}, {rotate: 0, duration: 3.5});
        triangleAnimation.play(0);
        $('#promoSection').addClass('animated');
      }
    });

  let seventhSlide = new ScrollMagic.Scene({
    triggerElement: '#PMLSection',
    offset: -300,
    triggerHook: 1,
  })
    .on('enter', function() {
      console.log('7 slide');
      if ( !$('#PMLSection').hasClass('animated') ) {
        if (screen.width > 768) {
        setTimeout(()=>{
          $('#PMLSection').find('video').get(0).play();
        }, 800);
        }
        $('#presentationVid').find('video').show();
        let titleLine = gsap.timeline()
          .fromTo('.overlay-title__container .section-title:nth-child(1)', 1, {x: -1000, opacity: 0}, {x: 0, opacity: 1})
          .fromTo('.overlay-title__container .section-title:nth-child(2)', 1, {x: -900, opacity: 0}, {x: 0, opacity: 1}, '<.2')
          .fromTo('.overlay-title__container .section-title:nth-child(3)', 1, {x: -800, opacity: 0}, {x: 0, opacity: 1}, '<.2');
        $('#PMLSection').addClass('animated');
      }
    });

  let eighthSlide = new ScrollMagic.Scene({
    triggerElement: '#integrationSlide',
    triggerHook: 1,
  })
    .on('enter', function() {
      console.log('8 slide');
      if ( !$('#integrationSlide').hasClass('animated') ) {
        lightTitle();
        let integrationLine = gsap.timeline();
        integrationLine.to('#integrationSlide .triangle-right', 1.4, {opacity: 1, x: 0, stagger: .6, delay: .1});
        integrationLine.to('#integrationSlide .triangle-right .custom-list', .8, {opacity: 1, x: 0, stagger: .6}, '<.8');
        $('#integrationSlide').addClass('animated');
      }
    });

  let ninthSlide = new ScrollMagic.Scene({
    triggerElement: '#integrationExperienceSlide',
    triggerHook: 1,
  })
    .on('enter', function() {
      console.log('9 slide');
      darkTitle();
      if ( !$('#integrationSlide').hasClass('animated') ) {
        if (screen.width > 768) {
          $('#integrationExperienceSlide').find('video').get(0).play();
        }
        $('.video-bg').find('video').show();
        gsap.fromTo('#integrationExperienceSlide .dotted-title', .6, {opacity: 0}, {opacity: 1, delay: .6});
        gsap.fromTo('#integrationExperienceSlide .owl-stage-outer', 1, {x: 1500, opacity: 0}, {x: 0, opacity: 1, delay: 1});

        if (screen.width < 768) {
          gsap.fromTo('#integrationExperienceSlide .dotted-title', .6, {opacity: 0}, {opacity: 1, delay: .6});
          gsap.fromTo('#integrationExperienceSlide .owl-stage-outer, .owl-nav', 1, {x: 1500, opacity: 0}, {x: 0, opacity: 1, delay: 1});
        }
        $('#integrationSlide').addClass('animated');
      }
    })
    .on('leave', function() {
      lightTitle();
    });

  controller.addScene([
    firstScene,
    secondScene,
    thirdScene,
    fourthScene,
    fifthScene,
    sixthScene,
    seventhSlide,
    eighthSlide,
    ninthSlide,
  ]);


};

$(document).ready(() => {

  // $("#fullpage").onepage_scroll({
  //   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
  //   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
  //                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  //   animationTime: 1500,             // AnimationTime let you define how long each section takes to animate
  //   pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
  //   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  //   beforeMove: function(index) {

  //
  //     if (index === 1) {
  //       $('.video-bg').find('video').show();
  //       if (screen.width >= 768) {
  //         gsap.to('#slidingPart', {x: -140, duration: .8});
  //         gsap.to('.subtitle', {y: -10, duration: .5});
  //         gsap.fromTo('.header-info__text', {y: -500}, {y: 0, duration: 1});
  //       }
  //       gsap.fromTo('.logo__top', {x: 4500, y: -1000}, {x: 0, y: 0, duration: 1});
  //       gsap.fromTo('.logo__bottom', {x: -3800, y: -600}, {x: 0, y: 0, duration: 1});
  //     }
  //     if (index === 2) {
  //       $('.video-bg').find('video').hide();
  //       $('#sectionClients').removeClass('lighten');
  //       darkTitle();
  //
  //       let logoSlide = gsap.timeline();
  //       logoSlide.to('#slidingPart', {x: 0, duration: .8});
  //       logoSlide.to('.subtitle', {y: 0, duration: .5});
  //
  //       let initialVal = {val: 0},
  //         initialSecond = {val: 0},
  //         initialThird = {val: 0},
  //         initialFourth = {val: 0},
  //         firstCounter = 10000,
  //         secondCounter = 20,
  //         thirdCounter = 50;
  //
  //       let advantagesTl = gsap.timeline();
  //       advantagesTl.fromTo('.advantages__item:nth-child(1)', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 3});
  //       advantagesTl.to(initialVal, 2.7, {val: firstCounter, roundProps: "val",
  //         onUpdate:function() {document.getElementById("firstCounter").innerHTML=initialVal.val}
  //       }, '<.1');
  //
  //       advantagesTl.fromTo('.advantages__item:nth-child(2)', {y: 750, opacity: 0}, {y: 0, opacity: 1, duration: 3}, 0);
  //       advantagesTl.to(initialSecond, 2.5, {val: secondCounter, roundProps: "val",
  //         onUpdate:function() {document.getElementById("secondCounter").innerHTML=initialSecond.val}
  //       }, '<.1');
  //
  //       advantagesTl.fromTo('.advantages__item:nth-child(3)', {y: 1000, opacity: 0}, {y: 0, opacity: 1, duration: 3}, 0);
  //       advantagesTl.to(initialThird, 2.8, {val: thirdCounter, roundProps: "val",
  //         onUpdate:function() {document.getElementById("thirdCounter").innerHTML=initialThird.val}
  //       }, '<.1');
  //
  //       advantagesTl.fromTo('.advantages__item:nth-child(4)', {y: 1250, opacity: 0}, {y: 0, opacity: 1, duration: 3}, 0);
  //       advantagesTl.to(initialFourth, 2.9, {val: secondCounter, roundProps: "val",
  //         onUpdate:function() {document.getElementById("fourthCounter").innerHTML=initialFourth.val}
  //       }, '<.1');
  //
  //       advantagesTl.fromTo('.dotted-title', {y: 600, opacity: 0} , {y: 0, opacity: 1, duration: 2.7}, 0);
  //       advantagesTl.fromTo('.owl-stage-outer', {x: 1500, opacity: 0}, {x: 0, opacity: 1, duration: 1, delay: 1.5}, 0);
  //       advantagesTl.fromTo('.owl-nav', {y: 160, opacity: 0}, {y: 0, opacity: 1, duration: 1.2}, '<.5');
  //
  //       gsap.fromTo('.header-info__text', {y: 0}, {y: -500, duration: 1});
  //       gsap.fromTo('.logo__top', {x: 0, y: 0}, {x: 4500, y: -1000, duration: 3});
  //       gsap.fromTo('.logo__bottom', {x: 0, y: 0}, {x: -3800, y: -600, duration: 3});
  //       gsap.to('.title', {opacity: 1, duration: .4})
  //     }
  //
  //     //Creates a bug. Impossible to go back to the second slide
  //     if (index === 3) {
  //       if (screen.width >= 768) {
  //         $("#fullpage").moveTo(4);
  //       }
  //     }
  //
  //     if (index === 4) {
  //       $('#sectionClients').addClass('lighten');
  //
  //       let logoTl = gsap.timeline();
  //       if(!$('.title').hasClass('white-logo')) {
  //         logoTl.fromTo('.title', {opacity: 1}, {opacity: 0, duration: .4, onComplete: lightTitle});
  //         logoTl.to('.title', {opacity: 1, duration: 1.2});
  //       }
  //
  //       //Left side enter-animation
  //       gsap.fromTo('.section-title', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 2});
  //       gsap.fromTo('.styled-list', {y: 800, opacity: 0}, {y: 0, opacity: 1, duration: 2}, '<.2');
  //
  //       //Right side enter-animations
  //       let figureHub = gsap.timeline();
  //       figureHub.set('#bottomRighthub', {rotate: -90, y: 23});
  //       figureHub.set('.long-black-line', {rotate: 90, x: 90, y: 120});
  //       figureHub.set('#sectionConstructor .triangle', {opacity: 0});
  //       figureHub.set('.black-circle', {x: -90, y: -335});
  //       figureHub.fromTo('.green-square', {y: 300, rotate: 125, scale: 0}, {y: 0, rotate: 0, scale: 1, duration: .5, delay: .8});
  //       figureHub.fromTo('.short-black-line', {width: 0, rotate: -90}, {width: 130, x: -50, y:-50, duration: .5, delay: .8}, 0);
  //       figureHub.to('.short-black-line', {rotate: 0, x:0, y: 0, duration: .4}, '<.3');
  //       figureHub.to('#bottomRighthub', {rotate: 0, y: 0, duration: .5});
  //       figureHub.to('.long-black-line', {x: 90, y: -53, duration: .5}, '<.3');
  //       figureHub.to('.long-black-line', {x: 60, y: -93, rotate: 70, duration: .2});
  //       figureHub.to('.long-black-line', {x: 20, y: -80, rotate: 50, duration: .2});
  //       figureHub.to('.long-black-line', {x: 0, y:0, rotate: 0, duration: .2});
  //
  //       figureHub.fromTo('#sectionConstructor .triangle', 1, {rotate: -345, scale: 0, x: -400}, {rotate: 0, scale: 1, x: 0, opacity: 1} );
  //       figureHub.to('.black-circle', .4, {y: -75});
  //       figureHub.to('.black-circle', .1, {x: -70, y: -70});
  //       figureHub.to('.black-circle', .2, {x: -25, y: -120});
  //       figureHub.to('.black-circle', .4, {x: 0, y: 35});
  //       figureHub.to('.short-black-line', .3, {y: 10}, '<.1');
  //       figureHub.to('.black-circle', .3, {x: 0, y: 0});
  //       figureHub.to('.short-black-line', .2, {y: -5}, '<.1');
  //       figureHub.to('.short-black-line', .3, {y: 0});
  //     }
  //
  //     if (index === 5) {
  //       gsap.fromTo('#digitalArchive .section-title', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 2});
  //       gsap.fromTo('#digitalArchive .boast-block', 2.5, {y: 600, opacity: 0}, {y: 0, opacity: 1}, '<.2');
  //       gsap.fromTo('#digitalArchive .styled-list', 2.2, {y: 800, opacity: 0}, {y: 0, opacity: 1});
  //       gsap.fromTo('.boast-block__circle', 3, {rotate: -200}, {rotate: 0});
  //
  //       //object animation
  //       let figureHub = gsap.timeline();
  //       figureHub.set('.brick', {opacity: 0});
  //       figureHub.set('.line.bottom', {opacity: 0, y: -90});
  //       figureHub.set('.line.middle', {opacity: 0, y: -20});
  //       figureHub.set('.top-line', {borderLeft: 0, borderRight: 0, y: -350, width: 0, rotate: 245});
  //       figureHub.to('.top-line', .3, {width: 257, rotate: 0, y: 80, delay: .8});
  //       figureHub.to('.top-line', .3, {y: 250});
  //       figureHub.to('.line.bottom', .3, {opacity: 1, y: 0});
  //       figureHub.to('.top-line', .3, {y: 160}, '<.2');
  //       figureHub.set('.line.middle', {opacity: 1});
  //       figureHub.to('.line.middle', .3, {y: 0, opacity: 1});
  //       figureHub.to('.top-line', .3, {y: 0, borderRight: 20, borderLeft: 20}, '<.2');
  //       figureHub.to('.brick', {
  //         opacity: 1,
  //         stagger: .1
  //       });
  //     }
  //
  //     if (index === 6) {
  //       gsap.set('#signalTransmission .fourth-ring', {opacity: 0});
  //       gsap.set('#signalTransmission .third-ring', {opacity: 0});
  //       gsap.set('#signalTransmission .second-ring', {opacity: 0});
  //
  //       gsap.fromTo('#signalTransmission .section-title', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 2});
  //       gsap.fromTo('#signalTransmission .styled-list', {y: 800, opacity: 0}, {y: 0, opacity: 1, duration: 2}, '<.3');
  //
  //       let circleHub = gsap.timeline();
  //       circleHub.to('#signalTransmission .fourth-ring', 1, {opacity: 1, delay: .8});
  //       circleHub.fromTo('#signalTransmission .fourth-ring', 1.5, {rotate: 395}, {rotate: 50}, '<.2');
  //       circleHub.fromTo('#signalTransmission .third-ring', 1.5, {rotate: -395}, {rotate: 50, opacity: 1}, '<.3');
  //       circleHub.fromTo('#signalTransmission .second-ring', 1.5, {rotate: 395}, {rotate: 50, opacity: 1}, '<.3');
  //     }
  //
  //     if (index === 7) {
  //       gsap.fromTo('#promoSection .section-title', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 2});
  //       gsap.fromTo('#promoSection .boast-block', {y: 500, opacity: 0}, {y: 0, opacity: 1, duration: 3}, '<.2');
  //       gsap.fromTo('#promoSection .styled-list', {y: 800, opacity: 0}, {y: 0, opacity: 1, duration: 2}, '<.3');
  //       gsap.fromTo('.boast-block__circle', {rotate: -200}, {rotate: 0, duration: 3.5});
  //
  //       let triangleAnimation = gsap.timeline();
  //       triangleAnimation.set('.outer-ring__brick', {opacity: 0});
  //       triangleAnimation.set('.triangle-object', {opacity: 0});
  //
  //       triangleAnimation.to('#firstRing .outer-ring__brick', .5, {opacity: 1, delay: .8});
  //       triangleAnimation.fromTo('#firstRing .outer-ring__brick:nth-child(1)', .8, {y: 130}, {y: 0, opacity: 1}, '<.2');
  //       triangleAnimation.fromTo('#firstRing .outer-ring__brick:nth-child(2)', .8, {x: 135}, {x: 0, opacity: 1}, '<0');
  //       triangleAnimation.fromTo('#firstRing .outer-ring__brick:nth-child(3)', .8, {x: -135}, {x: 0, opacity: 1}, '<0');
  //       triangleAnimation.fromTo('#firstRing .outer-ring__brick:nth-child(4)', .8, {y: -140}, {y: 0, opacity: 1}, '<0');
  //
  //       triangleAnimation.fromTo('.triangle-object', .6, {rotate:-90, opacity: 0, scale: 0}, {x: -20, y: -30,
  //         scale: .8, opacity: 1});
  //       triangleAnimation.to('#firstRing', .8, {rotate: -90}, '<.1');
  //       triangleAnimation.to('#secondRing .outer-ring__brick', .3, {opacity: 1}, '<.2');
  //       triangleAnimation.fromTo('#secondRing', .8, {rotate: -45}, {rotate: 45}, '<.1');
  //       triangleAnimation.to('.triangle-object', .8, {rotate: 0, x:0, y: 0, scale: 1}, '<0');
  //
  //       triangleAnimation.fromTo('#secondRing .outer-ring__brick:nth-child(1) .outer-ring__cover', .8, {y: 60}, {y: 0}, '>.2');
  //       triangleAnimation.fromTo('#secondRing .outer-ring__brick:nth-child(2) .outer-ring__cover', .8, {y: -60}, {y: 0}, '<0');
  //       triangleAnimation.fromTo('#secondRing .outer-ring__brick:nth-child(3) .outer-ring__cover', .8, {y: 60}, {y: 0}, '<0');
  //       triangleAnimation.fromTo('#secondRing .outer-ring__brick:nth-child(4) .outer-ring__cover', .8, {y: -60}, {y: 0}, '<0');
  //       triangleAnimation.to('.triangle-object', .3, {scale: .9}, '<0');
  //
  //       triangleAnimation.to('#secondRing .outer-ring__brick:nth-child(1) .outer-ring__cover', .8, {y: -60}, '>.5');
  //       triangleAnimation.to('#secondRing .outer-ring__brick:nth-child(2) .outer-ring__cover', .8, {y: 60}, '<0');
  //       triangleAnimation.to('#secondRing .outer-ring__brick:nth-child(3) .outer-ring__cover', .8, {y: -60}, '<0');
  //       triangleAnimation.to('#secondRing .outer-ring__brick:nth-child(4) .outer-ring__cover', .8, {y: 60}, '<0');
  //       triangleAnimation.to('.triangle-object', .3, {scale: 1}, '<.2');
  //     }
  //
  //     if (index === 8) {
  //       if (screen.width > 768) {
  //         setTimeout(()=>{
  //           $('#PMLSection').find('video').get(0).play();
  //         }, 800);
  //       }
  //       $('#presentationVid').find('video').show();
  //       let titleLine = gsap.timeline();
  //       titleLine.fromTo('.overlay-title__container .section-title:nth-child(1)', 1, {x: -1000}, {x: 0});
  //       titleLine.fromTo('.overlay-title__container .section-title:nth-child(2)', 1, {x: -900}, {x: 0}, '<.2');
  //       titleLine.fromTo('.overlay-title__container .section-title:nth-child(3)', 1, {x: -800}, {x: 0}, '<.2');
  //     }
  //
  //     if (index === 9) {
  //       lightTitle();
  //       gsap.set('#integrationSlide .triangle-right', {opacity: 0, x: -100});
  //       gsap.set('#integrationSlide .triangle-right .custom-list', {opacity: 0, x: -60});
  //
  //       let integrationLine = gsap.timeline();
  //       integrationLine.to('#integrationSlide .triangle-right', 1.4, {opacity: 1, x: 0, stagger: .6, delay: .8});
  //       integrationLine.to('#integrationSlide .triangle-right .custom-list', .8, {opacity: 1, x: 0, stagger: .6}, '<.8')
  //
  //     }
  //
  //     if (index === 10) {
  //       setTimeout(() => {
  //         darkTitle();
  //         if (screen.width > 768) {
  //           $('#integrationExperienceSlide').find('video').get(0).play();
  //         }
  //       },1000);
  //       $('.video-bg').find('video').show();
  //       gsap.fromTo('#integrationExperienceSlide .dotted-title', .6, {opacity: 0}, {opacity: 1, delay: .6});
  //       gsap.fromTo('#integrationExperienceSlide .owl-stage-outer', 1, {x: 1500, opacity: 0}, {x: 0, opacity: 1, delay: 1});
  //     }
  //
  //     if (index === 10 && screen.width < 768) {
  //       gsap.fromTo('#integrationExperienceSlide .dotted-title', .6, {opacity: 0}, {opacity: 1, delay: .6});
  //       gsap.fromTo('#integrationExperienceSlide .owl-stage-outer, .owl-nav', 1, {x: 1500, opacity: 0}, {x: 0, opacity: 1, delay: 1});
  //     }
  //
  //     /*
  //       Fallback to let users see footer when they reach the last slide
  //     */
  //     let sectionsAmount = $('section').length;
  //     if (index === sectionsAmount) {
  //       $('body').css({'overflow': 'auto'});
  //     } else {
  //       $('body').css({'overflow': 'hidden'});
  //       // $("#fullpage").moveTo(sectionsAmount);
  //     }
  //
  //   },  // This option accepts a callback function. The function will be called before the page moves.
  //   afterMove: function(index) {
  //   },   // This option accepts a callback function. The function will be called after the page moves.
  //
  //   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  //   keyboard: true,                  // You can activate the keyboard controls
  //   direction: "vertical",            // You can now define the direction of the One Page Scroll// animation. Options available are "vertical" and "horizontal". The default value is "vertical".
  // });

  //first slide top-left image, text-block and button block animation

//first slide bottom text blocks
});



