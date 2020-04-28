$(document).ready(() => {
    $('.client-slider').owlCarousel({
      loop: false,
      nav: true,
      dots: false,
      stagePadding: 50
    });

   // const video = document.querySelector('video');

   setTimeout(()=>{
     $('.video-bg').find('video').get(0).play();
   }, 800);

   // function handleVideoResize() {
   //    console.log('video resize');
   //    let w0 = 320,
   //        h0 = 240,
   //        r0 = w0 / h0,
   //        w = window.innerWidth,
   //        h = window.innerHeight,
   //        r = w / h;
   //
   //    video.style.transform = r0 < r ? 'scale(' + r / r0  + ')' : 'scale(' + r0 / r + ')';
   // }

   // handleVideoResize();
   // window.addEventListener('resize', handleVideoResize);
});
