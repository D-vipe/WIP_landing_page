import * as ScrollMagic from 'scrollmagic';
import { gsap, TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

$(document).ready(() => {
  function lightTitle() {
    $('.title').addClass('white-logo');
    $('.subtitle').addClass('white-logo');
  }

  function darkTitle() {
    $('.title').removeClass('white-logo');
    $('.subtitle').removeClass('white-logo');
  }

  //set blocks to initial animation position
  let ScrollController = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  //third slide

  gsap.set('#sectionConstructor .section-title', {y: 600, opacity: 0});
  gsap.set('#sectionConstructor .styled-list', {y: 800, opacity: 0});
  gsap.set('#sectionConstructor .mobile-object', {y: 800, opacity: 0});

  gsap.set('#bottomRighthub', {rotate: -90, y: 23});
  gsap.set('.long-black-line', {rotate: 90, x: 90, y: 120});
  gsap.set('#sectionConstructor .triangle', {opacity: 0});
  gsap.set('.black-circle', {x: -90, y: -335});

  //fourth slide

  gsap.set('#digitalArchive .section-title', {y: 600, opacity: 0});
  gsap.set('#digitalArchive .boast-block', {y: 600, opacity: 0});
  gsap.set('#digitalArchive .styled-list', {y: 800, opacity: 0});
  gsap.set('#digitalArchive .boast-block__circle', {rotate: -200});
  gsap.set('#digitalArchive .hover-mobile-block', {y: 800, opacity: 0});
  gsap.set('#digitalArchive .mobile-object', {y: 800, opacity: 0});

  gsap.set('#digitalArchive .line.bottom', {opacity: 0, y: -90});
  gsap.set('#digitalArchive .brick', {opacity: 0});
  gsap.set('#digitalArchive .line.middle', {opacity: 0, y: -20});
  gsap.set('#digitalArchive .top-line', {borderLeft: 0, borderRight: 0, y: -350, width: 0, rotate: 245});
  gsap.set('#digitalArchive .line.middle', {opacity: 1});

  //fifth slide
  gsap.set('#signalTransmission .section-title', {y: 600, opacity: 0});
  gsap.set('#signalTransmission .styled-list', {y: 800, opacity: 0});
  gsap.set('#signalTransmission .fourth-ring', {opacity: 0});
  gsap.set('#signalTransmission .third-ring', {opacity: 0});
  gsap.set('#signalTransmission .second-ring', {opacity: 0});
  gsap.set('#signalTransmission .mobile-object', {y: 800, opacity: 0});

  //sixth slide

  gsap.set('.outer-ring__brick', {opacity: 0});
  gsap.set('.triangle-object', {opacity: 0});
  gsap.set('#promoSection .section-title', {y: 600, opacity: 0});
  gsap.set('#promoSection .boast-block', {y: 500, opacity: 0});
  gsap.set('#promoSection .styled-list', {y: 800, opacity: 0});
  gsap.set('#promoSection .boast-block__circle', {rotate: -200});
  gsap.set('#promoSection .hover-mobile-block', {y: 800, opacity: 0});
  gsap.set('#promoSection .mobile-object', {y: 800, opacity: 0});

  //seventh slide

  gsap.set('.overlay-title__container .section-title:nth-child(1)', {x: -1000, opacity: 0});
  gsap.set('.overlay-title__container .section-title:nth-child(2)', {x: -900, opacity: 0});
  gsap.set('.overlay-title__container .section-title:nth-child(3)', {x: -800, opacity: 0});

  //eighth slide
  gsap.set('#integrationSlide h2', {y: 600, opacity: 0});
  gsap.set('#integrationSlide .triangle-right', {opacity: 0, x: -100});
  gsap.set('#integrationSlide .triangle-right .custom-list', {opacity: 0, x: -60});

  //ninth slide
  gsap.set('#integrationExperienceSlide .dotted-title', {opacity: 0});
  gsap.set('#integrationExperienceSlide .owl-stage-outer', {x: 1500, opacity: 0});
  gsap.set('#integrationExperienceSlide .owl-nav', {opacity: 0});

  //tenth slide
  gsap.set('#contactForm .section-title', {y: 600, opacity: 0});
  gsap.set('#contactForm .form-help-text', {y: 800, opacity: 0});
  gsap.set('#pageForm', {y: 1500, opacity: 0});



  let initialScreenTl = new TimelineMax();
  initialScreenTl.fromTo('.fixed-navbar', {zIndex: -1}, {zIndex: 6, delay: .6});
  if (window.scrollY > 200) {
    initialScreenTl.to('.header-info__text', .1, {y: 120, opacity: 0});
  } else {
    initialScreenTl.fromTo('.header-info__text', 1, {y: 120, opacity: 0}, {y: 0, opacity: 1})
  }

  initialScreenTl.fromTo('#firstSlideButton', 1, {y: 120}, {y: 0}, '<0')
    .fromTo('.logo__top', 1, {x: 70, y:0, opacity:0}, {x: 0, y:0, opacity:1}, '<0')
    .fromTo('.logo__bottom', 1, {x: -70, y:0, opacity:0}, {x: 0, y:0, opacity:1}, '<0')
    .set('#sectionClients .advantages__item', {opacity: 0})
    .set('#sectionClients .owl-stage-outer', {opacity: 0})
    .set('#sectionClients .dotted-title', {opacity: 0})
    .set('#sectionClients .owl-nav', {opacity: 0})
    .set('#sectionConstructor section-title, #sectionConstructor .styled-list', {opacity: 0});

  let wh = window.screen.height,
    ww = window.screen.width;

  let firstSlideLeave = new TimelineMax();

  let slideLogo = TweenMax.to('#slidingPart', .8, {x: 0}),
      slideSubtitle = TweenMax.to('.subtitle', .5, {y: 0}),
      slideTopLogo = TweenMax.fromTo('.logo__top', 2, {x: 0, y: 0}, {x: ww, y: -wh}),
      slideBottomLogo = TweenMax.fromTo('.logo__bottom', 2, {x: 0, y: 0}, {x: -ww, y: -wh}),
      slideTitile = TweenMax.to('.title', .4, {opacity: 1}),
      slideHeaderInfo = TweenMax.to('.header-info__text', 1, {y: -120, opacity: 0});


  // Add all tweens to the first timeline
  firstSlideLeave.add(slideLogo)
    .add(slideSubtitle, 0)
    .add(slideTopLogo, 0)
    .add(slideBottomLogo, 0)
    .add(slideHeaderInfo, 0)
    .add(slideTitile, 0);

  let firstBlockHeight = $('#sectionHeader').innerHeight();

  new ScrollMagic.Scene({
    triggerElement: '#sectionHeader',
    duration: firstBlockHeight
  })
    .setTween(firstSlideLeave)
    .addTo(ScrollController);

//  Second block animations

//Values for running numbers
  let initialVal = {val: 0},
    initialSecond = {val: 0},
    initialThird = {val: 0},
    initialFourth = {val: 0},
    firstCounter = 10000,
    secondCounter = 20,
    thirdCounter = 50;

  function transformDigits (value) {
    let stringVal = String(value),
        valLength = stringVal.length,
        newValue = stringVal;

    if ( valLength !== undefined && valLength > 4 ) {

      let thousands = stringVal.substring(0, (valLength - 3)),
          restNums = stringVal.substring((valLength - 3));

      newValue = thousands + ' ' + restNums;
    }

    return newValue;
  }

  let advantagesTl = new TimelineMax({paused: true});
  advantagesTl.fromTo('.advantages__item:nth-child(1)', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 1.6})
    .to(initialVal, 1.7, {val: firstCounter, roundProps: "val",
    onUpdate:function() {document.getElementById("firstCounter").innerHTML=transformDigits(initialVal.val)}
  }, '<.1')
    .fromTo('.advantages__item:nth-child(2)', {y: 750, opacity: 0}, {y: 0, opacity: 1, duration: 1.7}, 0)
    .to(initialSecond, 1.5, {val: secondCounter, roundProps: "val",
    onUpdate:function() {document.getElementById("secondCounter").innerHTML=transformDigits(initialSecond.val)}
  }, '<.1')
    .fromTo('.advantages__item:nth-child(3)', {y: 1000, opacity: 0}, {y: 0, opacity: 1, duration: 1.8}, 0)
    .to(initialThird, 1.8, {val: thirdCounter, roundProps: "val",
    onUpdate:function() {document.getElementById("thirdCounter").innerHTML=transformDigits(initialThird.val)}
  }, '<.1')
    .fromTo('.advantages__item:nth-child(4)', {y: 1250, opacity: 0}, {y: 0, opacity: 1, duration: 1.9}, 0)
    .to(initialFourth, 1.9, {val: secondCounter, roundProps: "val",
    onUpdate:function() {document.getElementById("fourthCounter").innerHTML=transformDigits(initialFourth.val)}
  }, '<.1')
    .fromTo('#sectionClients .dotted-title', {y: 600, opacity: 0} , {y: 0, opacity: 1, duration: 1.7}, 0)
    .fromTo('#sectionClients .owl-stage-outer', {x: 1500, opacity: 0}, {x: 0, opacity: 1, duration: 1.5, delay: .5}, 0)
    .fromTo('#sectionClients .owl-nav', {y: 160, opacity: 0}, {y: 0, opacity: 1, duration: 1.2}, '<.7');

  new ScrollMagic.Scene({
    triggerElement: '#sectionHeader',
    offset: (firstBlockHeight * 0.5)
  }).on('start', function (event) {

    if ( event.scrollDirection === 'FORWARD' ) {
      advantagesTl.play();
      $('#sectionClients').removeClass('lighten');
    }

  }).addTo(ScrollController);


  // Second scene for the second slide: change background && next slide
  let secondSlideSelector = $('#sectionClients'),
      secondSlideHeight = secondSlideSelector.innerHeight();

  new ScrollMagic.Scene({
    triggerElement: '#sectionClients',
    offset: (secondSlideHeight * 0.2)
  }).on('start', function (event) {
    if ( event.scrollDirection === 'FORWARD' ) {
      secondSlideSelector.addClass('lighten');

      // Third slide preparations
      new TimelineMax()
        .to('#sectionConstructor .section-title', {y: 0, opacity: 1, duration: 2})
        .to('#sectionConstructor .styled-list', {y: 0, opacity: 1, duration: 2}, '<.2')
        .to('#sectionConstructor .mobile-object', {y: 0, opacity: 1, duration: 2}, 0);

      if (!$('#sectionConstructor').hasClass('animated')) {
        let figureHub = new TimelineMax();
        figureHub.fromTo('.green-square', .5, {y: 300, rotate: 125, scale: 0}, {y: 0, rotate: 0, scale: 1, delay: 1.2})
          .fromTo('.short-black-line', {width: 0, rotate: -90}, {width: 130, x: -50, y:-50, duration: .5, delay: .8}, 0)
          .to('.short-black-line', .4, {rotate: 0, x: 0, y: 0}, '<.3')
          .to('#bottomRighthub', .5, {rotate: 0, y: 0})
          .to('.long-black-line', .5, {x: 90, y: -53}, '<.3')
          .to('.long-black-line', .2, {x: 60, y: -93, rotate: 70})
          .to('.long-black-line', .2, {x: 20, y: -80, rotate: 50})
          .to('.long-black-line', .2, {x: 0, y:0, rotate: 0});

        figureHub.fromTo('#sectionConstructor .triangle', 1, {rotate: -345, scale: 0, x: -400}, {rotate: 0, scale: 1, x: 0, opacity: 1} )
          .to('.black-circle', .4, {y: -75})
          .to('.black-circle', .1, {x: -70, y: -70})
          .to('.black-circle', .2, {x: -25, y: -120})
          .to('.black-circle', .4, {x: 0, y: 35})
          .to('.short-black-line', .3, {y: 10}, '<.1')
          .to('.black-circle', .3, {x: 0, y: 0})
          .to('.short-black-line', .2, {y: -5}, '<.1')
          .to('.short-black-line', .3, {y: 0});
      }

      $('#sectionConstructor').addClass('animated');

    } else if ( event.scrollDirection === 'REVERSE' ) {
      secondSlideSelector.removeClass('lighten');
    }
  }).addTo(ScrollController);

  // Second slide: change title color
  new ScrollMagic.Scene({
    triggerElement: '#sectionClients',
    offset: (secondSlideHeight * 0.7)
  }).on('start', function (event) {
    if ( event.scrollDirection === 'FORWARD' ) {
      secondSlideSelector.addClass('lighten');
      lightTitle();
    } else if ( event.scrollDirection === 'REVERSE' ) {
      darkTitle();
      secondSlideSelector.removeClass('lighten');
    }
  }).addTo(ScrollController);


  let thirdSlideSelector = $('#sectionConstructor'),
      fourthSlideSelector = $('#digitalArchive'),
      thirdSlideHeight = thirdSlideSelector.innerHeight(),
      fourthSlideHeight = fourthSlideSelector.innerHeight();

  new ScrollMagic.Scene({
    triggerElement: '#sectionConstructor',
    offset: (thirdSlideHeight * 0.5)
  }).on('start', function (event) {

    if ( event.scrollDirection === 'FORWARD' ) {

      new TimelineMax()
        .to('#digitalArchive .section-title', 2, {y: 0, opacity: 1})
        .to('#digitalArchive .boast-block', 2.5, {y: 0, opacity: 1}, '<.2')
        .to('#digitalArchive .styled-list', 2.2, {y: 0, opacity: 1}, 0)
        .to('#digitalArchive .boast-block__circle', 3, {rotate: 0}, 0)
        .to('#digitalArchive .hover-mobile-block', 2.2, {y: 0, opacity: 1}, 0)
        .to('#digitalArchive .mobile-object', 2.2, {y: 0, opacity: 1}, 0);

      //  object animation
      if ( !fourthSlideSelector.hasClass('animated') ) {
        let figureHub = new TimelineMax();
        figureHub.to('.top-line', .3, {width: 257, rotate: 0, y: 80, delay: .8})
          .to('.top-line', .3, {y: 250})
          .to('.line.bottom', .3, {opacity: 1, y: 0})
          .to('.top-line', .3, {y: 160}, '<.2')
          .to('.line.middle', .3, {y: 0, opacity: 1})
          .to('.top-line', .3, {y: 0, borderRight: 20, borderLeft: 20}, '<.2')
          .to('.brick', {
            opacity: 1,
            stagger: .1
          });
        fourthSlideSelector.addClass('animated');
      }
    }

  }).addTo(ScrollController);

  // Fourth slide scroll animation

  new ScrollMagic.Scene({
    triggerElement: '#digitalArchive',
    duration: fourthSlideHeight
  }).setTween(new TweenMax.to('#digitalArchive .boast-block__circle', 1.8, {rotate: 360}))
    .addTo(ScrollController);


  /**
   * FIFTH SLIDE TRIGGER ANIMATION
  **/
  let fifthSlideSelector =  $('#signalTransmission'),
      fifthSlideHeight = fifthSlideSelector.innerHeight();

  new ScrollMagic.Scene({
    triggerElement: '#digitalArchive',
    offset: (fourthSlideHeight * 0.7)
  }).on('start', function(event) {

    if ( event.scrollDirection === 'FORWARD' ) {
      // Title and list animation
      new TimelineMax()
        .to('#signalTransmission .section-title', 2, {y: 0, opacity: 1})
        .to('#signalTransmission .styled-list', 2, {y: 0, opacity: 1}, '<.3')
        .to('#signalTransmission .mobile-object', 2, {y: 0, opacity: 1}, 0);

      // Object animation
      if ( !fifthSlideSelector.hasClass('animated') ) {
        new TimelineMax()
          .fromTo('#signalTransmission .section-title', 2, {y: 600, opacity: 0}, {y: 0, opacity: 1})
          .fromTo('#signalTransmission .styled-list', 2, {y: 800, opacity: 0}, {y: 0, opacity: 1}, '<.3')
          .to('#signalTransmission .fourth-ring', 1, {opacity: 1}, '<.8')
          .fromTo('#signalTransmission .fourth-ring', 1.5, {rotate: 395}, {rotate: 50}, '<.2')
          .fromTo('#signalTransmission .third-ring', 1.5, {rotate: -395}, {rotate: 50, opacity: 1}, '<.3')
          .fromTo('#signalTransmission .second-ring', 1.5, {rotate: 395}, {rotate: 50, opacity: 1}, '<.3');

        $('#signalTransmission').addClass('animated');
      }

    }

  }).addTo(ScrollController);

  /**
   * FIFTH SLIDE TRIGGER ANIMATION END
  **/


  /**
   * SIXTH SLIDE TRIGGER ANIMATION
   **/

  let sixthSlideSelector =  $('#promoSection'),
      sixthSlideHeight = sixthSlideSelector.innerHeight();

  new ScrollMagic.Scene({
    triggerElement: '#signalTransmission',
    offset: (fifthSlideHeight * 0.7)
  }).on('start', function(event) {

    if (event.scrollDirection === 'FORWARD') {

      new TimelineMax()
        .to('#promoSection .section-title', 1.5, {y: 0, opacity: 1})
        .to('#promoSection .boast-block', 2.5, {y: 0, opacity: 1}, '<.2')
        .to('#promoSection .styled-list', 1.5, {y: 0, opacity: 1}, '<.3')
        .to('#promoSection .boast-block__circle', 1.8, {rotate: 0}, 0)
        .to('#promoSection .hover-mobile-block', 1.5, {y: 0, opacity: 1}, 0)
        .to('#promoSection .mobile-object', 1.5, {y: 0, opacity: 1}, 0);

      // Object animation
      if ( !sixthSlideSelector.hasClass('animated') ) {
        new TimelineMax()
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

        sixthSlideSelector.addClass('animated');
      }
    }

  }).addTo(ScrollController);

  // ROTATE BOAST BLOCK
  new ScrollMagic.Scene({
    triggerElement: '#promoSection',
    duration: sixthSlideHeight
  }).setTween(new TweenMax.to('#promoSection .boast-block__circle', 1.8, {rotate: 360}))
    .addTo(ScrollController);

  /**
   * SIXTH SLIDE TRIGGER ANIMATION END
   **/

  /**
   * SEVENTH SLIDE TRIGGER ANIMATION
  **/

  let seventhSlideSelector =  $('#PMLSection'),
      seventhSlideHeight = seventhSlideSelector.innerHeight();

  new ScrollMagic.Scene({
    triggerElement: '#promoSection',
    offset: (sixthSlideHeight * 0.7)
  }).on('start', function (event) {

    if ( event.scrollDirection === 'FORWARD' ) {

      if ( !seventhSlideSelector.hasClass('animated') ) {
        if (screen.width > 768) {
          setTimeout(()=>{
            $('#PMLSection').find('video').get(0).play();
          }, 800);
        }
        $('#presentationVid').find('video').show();

        new TimelineMax().to('.overlay-title__container .section-title:nth-child(1)', 1, {x: 0, opacity: 1})
          .to('.overlay-title__container .section-title:nth-child(2)', 1, {x: 0, opacity: 1}, '<.2')
          .to('.overlay-title__container .section-title:nth-child(3)', 1, {x: 0, opacity: 1}, '<.2');

        seventhSlideSelector.addClass('animated');
      }
    }

  }).addTo(ScrollController);

  new ScrollMagic.Scene({
    triggerElement: '#PMLSection',
    offset: ( seventhSlideHeight * 0.2 )
  }).on('start', function (event) {

    if ( event.scrollDirection === 'FORWARD' ) {
      new TimelineMax().to('.overlay-title__container .section-title:nth-child(1)', 1, {x: window.screen.width, opacity: 0})
        .to('.overlay-title__container .section-title:nth-child(2)', 1, {x: window.screen.width, opacity: 0}, '<.2')
        .to('.overlay-title__container .section-title:nth-child(3)', 1, {x: window.screen.width, opacity: 0}, '<.2');
      $('#PMLSection').find('video').get(0).pause();
    } else if ( event.scrollDirection === 'REVERSE' ) {
      new TimelineMax().fromTo('.overlay-title__container .section-title:nth-child(1)', 1,
        {x: -window.screen.width, opacity: 0}, {x: 0, opacity: 1})
        .fromTo('.overlay-title__container .section-title:nth-child(2)', 1,
          {x: -window.screen.width, opacity: 0}, {x: 0, opacity: 1}, '<.2')
        .fromTo('.overlay-title__container .section-title:nth-child(3)', 1,
          {x: -window.screen.width, opacity: 0}, {x: 0, opacity: 1}, '<.2');
      $('#PMLSection').find('video').get(0).play(0);
    }

  }).addTo(ScrollController);

  /**
   * SEVENTH SLIDE TRIGGER ANIMATION END
   **/



  /**
   * EIGHTH SLIDE TRIGGER ANIMATION
   **/

  let eighthSlideSelector =  $('#integrationSlide'),
      eighthSlideHeight = eighthSlideSelector.innerHeight();

  new ScrollMagic.Scene({
    triggerElement: '#PMLSection',
    offset: (seventhSlideHeight * 0.4)
  }).on('start', function (event) {
    if ( event.scrollDirection === 'FORWARD' ) {
      new TimelineMax().to('#integrationSlide h2', 1.5, {y: 0, opacity: 1});

      if ( !eighthSlideSelector.hasClass('animated') ) {
        // Object animation

        new TimelineMax()
          .to('#integrationSlide .triangle-right', 1.4, {opacity: 1, x: 0, stagger: .6, delay: 1.1})
          .to('#integrationSlide .triangle-right .custom-list', .8, {opacity: 1, x: 0, stagger: .6}, '<.8');

        eighthSlideSelector.addClass('animated');
      }

    }
  }).addTo(ScrollController);


  /**
   * EIGHTH SLIDE TRIGGER ANIMATION END
   **/




// NINTH SLIDE TRIGGER ANIMATION

  let ninthSlideSelector =  $('#integrationExperienceSlide'),
      ninthSlideHeight = ninthSlideSelector.innerHeight();

  new ScrollMagic.Scene({
    triggerElement: '#integrationSlide',
    offset: (eighthSlideHeight * 0.6)
  }).on('start', function(event) {
    if ( event.scrollDirection === 'FORWARD' ) {
      new TimelineMax().to('#integrationExperienceSlide .dotted-title', 2.5, {opacity: 1, delay: .6});

      if ( !ninthSlideSelector.hasClass('animated') ) {


        if (screen.width > 768) {
          ninthSlideSelector.find('video').get(0).play();
        }
        $('.video-bg').find('video').show();

        new TimelineMax()
          .to('#integrationExperienceSlide .dotted-title', 1, {opacity: 1})
          .to('#integrationExperienceSlide .owl-stage-outer', 1, {x: 0, opacity: 1}, '<1')
          .to('#integrationExperienceSlide .owl-nav', 1, {opacity: 1}, '<1');

        if (screen.width < 768) {
          new TimelineMax()
            .to('#integrationExperienceSlide .dotted-title', .6, {opacity: 1})
            .to('#integrationExperienceSlide .owl-stage-outer', 1, {x: 0, opacity: 1}, '<1')
            .to('#integrationExperienceSlide .owl-nav', 1, {opacity: 1}, '<1');
        }

        ninthSlideSelector.addClass('animated');
      }
    }
  }).addTo(ScrollController);

  new ScrollMagic.Scene({
    triggerElement: '#integrationExperienceSlide',
    offset: 0
  }).on('leave', function (event) {
    if ( event.scrollDirection === 'REVERSE' ) {
      lightTitle();
    }
  }).on('enter', function (event) {
    if ( event.scrollDirection === 'FORWARD' ) {
      darkTitle();
    }
  }).addTo(ScrollController);

// NINTH SLIDE TRIGGER ANIMATION END



// TENTH SLIDE TRIGGER ANIMATION

  new ScrollMagic.Scene({
    triggerElement: '#integrationExperienceSlide',
    offset: (ninthSlideHeight * 0.7)
  }).on('start', function (event) {

    if (event.scrollDirection === 'FORWARD') {

      if ( !$('#contactForm').hasClass('animated') ) {
        new TimelineMax()
          .to('#contactForm .section-title', 1.5, {y: 0, opacity: 1, delay: 0.5})
          .to('#contactForm .form-help-text', 1.7, {y: 0, opacity: 1}, '<.2')
          .to('#pageForm', 2.5, {y: 0, opacity: 1}, 0);

        $('#contactForm').addClass('animated');
      }

    }

  }).addTo(ScrollController)

// TENTH SLIDE TRIGGER ANIMATION END

});




