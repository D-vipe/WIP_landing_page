$(document).ready(() => {
	$("#fullpage").onepage_scroll({
		   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls                          // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
	});

   const video = document.querySelector('video');

   function handleVideoResize() {
      console.log('video resize');
      let w0 = 320,
          h0 = 240,
          r0 = w0 / h0,
          w = window.innerWidth,
          h = window.innerHeight,
          r = w / h;

      video.style.transform = r0 < r ? 'scale(' + r / r0  + ')' : 'scale(' + r0 / r + ')';
   }

   // handleVideoResize();
   // window.addEventListener('resize', handleVideoResize);
})
