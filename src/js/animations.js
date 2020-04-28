import { gsap } from "gsap";

$(document).ready(() => {
  $("#fullpage").onepage_scroll({
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1500,             // AnimationTime let you define how long each section takes to animate
    pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {
      function lightTitle() {
        $('.title').addClass('white-logo');
        $('.subtitle').addClass('white-logo');
      }

      function darkTitle() {
        $('.title').removeClass('white-logo');
        $('.subtitle').removeClass('white-logo');
      }

      if (index === 1) {
        $('.video-bg').find('video').show();
        gsap.to('#slidingPart', {x: -140, duration: .8});
        gsap.to('.subtitle', {y: -10, duration: .5});
        gsap.fromTo('.header-info__text', {y: -500}, {y: 0, duration: 1});
        gsap.fromTo('.logo__top', {x: 4500, y: -1000}, {x: 0, y: 0, duration: 1});
        gsap.fromTo('.logo__bottom', {x: -3800, y: -600}, {x: 0, y: 0, duration: 1});
      }
      if (index === 2) {
        $('.video-bg').find('video').hide();
        $('#sectionClients').removeClass('lighten');
        darkTitle();

        let logoSlide = gsap.timeline();
        logoSlide.to('#slidingPart', {x: 0, duration: .8});
        logoSlide.to('.subtitle', {y: 0, duration: .5});

        let initialVal = {val: 0},
          initialSecond = {val: 0},
          initialThird = {val: 0},
          initialFourth = {val: 0},
          firstCounter = 10000,
          secondCounter = 20,
          thirdCounter = 50;

        let advantagesTl = gsap.timeline();
        advantagesTl.fromTo('.advantages__item:nth-child(1)', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 3});
        advantagesTl.to(initialVal, 2.7, {val: firstCounter, roundProps: "val",
          onUpdate:function() {document.getElementById("firstCounter").innerHTML=initialVal.val}
        }, '<.1');

        advantagesTl.fromTo('.advantages__item:nth-child(2)', {y: 750, opacity: 0}, {y: 0, opacity: 1, duration: 3}, 0);
        advantagesTl.to(initialSecond, 2.5, {val: secondCounter, roundProps: "val",
          onUpdate:function() {document.getElementById("secondCounter").innerHTML=initialSecond.val}
        }, '<.1');

        advantagesTl.fromTo('.advantages__item:nth-child(3)', {y: 1000, opacity: 0}, {y: 0, opacity: 1, duration: 3}, 0);
        advantagesTl.to(initialThird, 2.8, {val: thirdCounter, roundProps: "val",
          onUpdate:function() {document.getElementById("thirdCounter").innerHTML=initialThird.val}
        }, '<.1');

        advantagesTl.fromTo('.advantages__item:nth-child(4)', {y: 1250, opacity: 0}, {y: 0, opacity: 1, duration: 3}, 0);
        advantagesTl.to(initialFourth, 2.9, {val: secondCounter, roundProps: "val",
          onUpdate:function() {document.getElementById("fourthCounter").innerHTML=initialFourth.val}
        }, '<.1');

        advantagesTl.fromTo('.dotted-title', {y: 600, opacity: 0} , {y: 0, opacity: 1, duration: 2.7}, 0);
        advantagesTl.fromTo('.owl-stage-outer', {x: 1500, opacity: 0}, {x: 0, opacity: 1, duration: 1, delay: 1.5}, 0);
        advantagesTl.fromTo('.owl-nav', {y: 160, opacity: 0}, {y: 0, opacity: 1, duration: 1.2}, '<.5');

        gsap.fromTo('.header-info__text', {y: 0}, {y: -500, duration: 1});
        gsap.fromTo('.logo__top', {x: 0, y: 0}, {x: 4500, y: -1000, duration: 3});
        gsap.fromTo('.logo__bottom', {x: 0, y: 0}, {x: -3800, y: -600, duration: 3});
        gsap.to('.title', {opacity: 1, duration: .4})
      }

      if (index === 3) {
        $('#sectionClients').addClass('lighten');

        let logoTl = gsap.timeline();
        if(!$('.title').hasClass('white-logo')) {
          logoTl.fromTo('.title', {opacity: 1}, {opacity: 0, duration: .4, onComplete: lightTitle});
          logoTl.to('.title', {opacity: 1, duration: 1.2});
        }

        //Left side enter-animation
        gsap.fromTo('.section-title', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 2});
        gsap.fromTo('.styled-list', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 2.2});

        //Right side enter-animations
        let figureHub = gsap.timeline();
        figureHub.set('#bottomRighthub', {rotate: -90, y: 23});
        figureHub.set('.long-black-line', {rotate: 90, x: 90, y: 120});
        figureHub.set('.triangle', {opacity: 0});
        figureHub.set('.black-circle', {x: -90, y: -335});
        figureHub.fromTo('.green-square', {y: 300, rotate: 125, scale: 0}, {y: 0, rotate: 0, scale: 1, duration: .5, delay: .8});
        figureHub.fromTo('.short-black-line', {width: 0, rotate: -90}, {width: 130, x: -50, y:-50, duration: .5, delay: .8}, 0);
        figureHub.to('.short-black-line', {rotate: 0, x:0, y: 0, duration: .4}, '<.3');
        figureHub.to('#bottomRighthub', {rotate: 0, y: 0, duration: .5});
        figureHub.to('.long-black-line', {x: 90, y: -53, duration: .5}, '<.3');
        figureHub.to('.long-black-line', {x: 60, y: -93, rotate: 70, duration: .2});
        figureHub.to('.long-black-line', {x: 20, y: -80, rotate: 50, duration: .2});
        figureHub.to('.long-black-line', {x: 0, y:0, rotate: 0, duration: .2});

        figureHub.fromTo('.triangle', 1, {rotate: -245, scale: 0, x: -400}, {rotate: 0, scale: 1, x: 0, opacity: 1} );
        figureHub.to('.black-circle', .4, {y: -75});
        figureHub.to('.black-circle', .1, {x: -70, y: -70});
        figureHub.to('.black-circle', .2, {x: -25, y: -120});
        figureHub.to('.black-circle', .4, {x: 0, y: 35});
        figureHub.to('.short-black-line', .3, {y: 10}, '<.1');
        figureHub.to('.black-circle', .3, {x: 0, y: 0});
        figureHub.to('.short-black-line', .2, {y: -5}, '<.1');
        figureHub.to('.short-black-line', .3, {y: 0});
      }

      if (index === 4) {
        gsap.fromTo('#digitalArchive .section-title', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 2});
        gsap.fromTo('.boast-block', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 2});
        gsap.fromTo('#digitalArchive .styled-list', {y: 600, opacity: 0}, {y: 0, opacity: 1, duration: 2.2});
        gsap.fromTo('.boast-block__circle', {rotate: -100}, {rotate: 0, duration: 2});

        //object animation
        let figureHub = gsap.timeline();
        figureHub.set('.brick', {opacity: 0});
        figureHub.set('.line.bottom', {opacity: 0, y: -90});
        figureHub.set('.line.middle', {opacity: 0, y: -20});
        figureHub.set('.top-line', {borderLeft: 0, borderRight: 0, y: -350, width: 0, rotate: 245});
        figureHub.to('.top-line', .3, {width: 257, rotate: 0, y: 80, delay: .8});
        figureHub.to('.top-line', .3, {y: 250});
        figureHub.to('.line.bottom', .3, {opacity: 1, y: 0});
        figureHub.to('.top-line', .3, {y: 160}, '<.2');
        figureHub.set('.line.middle', {opacity: 1});
        figureHub.to('.line.middle', .3, {y: 0, opacity: 1});
        figureHub.to('.top-line', .3, {y: 0, borderRight: 20, borderLeft: 20}, '<.2');
        figureHub.to('.brick', {
          opacity: 1,
          stagger: .1
        });
      }
    },  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls                          // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical",            // You can now define the direction of the One Page Scroll// animation. Options available are "vertical" and "horizontal". The default value is "vertical".
  });

  //first slide top-left image, text-block and button block animation
  gsap.fromTo('.fixed-navbar', {zIndex: -1}, {zIndex: 6, delay: .6});
  // gsap.fromTo('.header-info__img', {y: 120}, {y: 0, duration: .9, delay: .9});
  gsap.fromTo('.header-info__text', {y: 120}, {y: 0, duration: 1, delay: 1});
  gsap.fromTo('#firstSlideButton', {y: 120}, {y: 0, duration: 1, delay: 1});

//first slide bottom text blocks
  gsap.fromTo('.logo__top', {x: 70}, {x: 0, duration: 1, delay: 1});
  gsap.fromTo('.logo__bottom', {x: -70}, {x: 0, duration: 1, delay: 1});
});



