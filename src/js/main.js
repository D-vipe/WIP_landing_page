$(document).ready(() => {
    $('#clientSlider').owlCarousel({
      loop: false,
      nav: true,
      dots: false,
      stagePadding: 50
    });

  $('#experienceSlider').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    stagePadding: 150
  });

   // const video = document.querySelector('video');

   setTimeout(()=>{
     $('.video-bg').find('video').get(0).play();
   }, 800);


   function checkTelephone(telValue) {
     let exp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
         errorBlock = $('.error-message'),
         telValid = false,
         errorType = 0;

     errorBlock.text('');
     telValid = telValue !== '';
     if (!telValid) {
       errorType = 1;
     } else {
       telValid = telValue.search(exp) !== -1;
       if (!telValid) {
         errorType = 2;
       }
     }

     if (!telValid) {
       //show error message
       $('input[name=tel]').addClass('error');
       let error_text = errorType === 1 ? 'введите номер телефона' : 'неправильный формат';
       errorBlock.text(error_text).fadeIn();
       // $('#pageForm').find('button[type=submit]').attr('disabled', true);
     } else {
       //remove error message if any
       $('input[name=tel]').removeClass('error');
       errorBlock.fadeOut();
       // $('#pageForm').find('button[type=submit]').attr('disabled', false);
     }

     return telValid;
   }

   function confirmFormSubmit() {
     const formBlock = $('#pageForm'),
       leftBlock = $('.form-help-text p'),
       initialMessage = 'Возникли вопросы или хотите оценить стоимость проекта? Оставьте заявку и наш' +
         ' менеджер с вами свяжется.',
       newMessage = 'Спасибо! В течении дня с вами свяжется наш менеджер для уточнения деталей проекта.';

     formBlock.fadeOut();
     formBlock[0].reset();
     leftBlock.text(newMessage);

     setTimeout(() => {
       formBlock.fadeIn();
       leftBlock.text(initialMessage);
     }, 3500);
   }


   $('input[name=name]').on('change', function() {
     let element = $(this);
     if (element.val().length > 0) {
       console.log(element.val() + ' Возникли вопросы или хотите оценить стоимость' +
         ' проекта? Оставьте заявку и наш менеджер с вами свяжется.');
        $('textarea[name=comment]').val(element.val() + ' Возникли вопросы или хотите оценить стоимость' +
       ' проекта? Оставьте заявку и наш менеджер с вами свяжется.')
     } else {
       $('textarea[name=comment]').val('Сообщение');
     }
   });

   $('input[name=tel]').on('change', function(){
     let  tel = $(this).val();
     checkTelephone(tel);
   });

   $('#pageForm').submit(function(e) {
     e.preventDefault();
     //validate tel input
     let telInput = $('input[type=tel]'),
         formValid = checkTelephone(telInput.val());

     if (formValid) {
       confirmFormSubmit();
     }
   });

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
