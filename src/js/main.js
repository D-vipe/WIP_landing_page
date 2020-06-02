import Inputmask from "inputmask";
const autosize = require('autosize');

$(document).ready(() => {
  // tel input mask
  Inputmask({"mask": "+7(999) 999-99-99"}).mask($('input[name=tel]'));

  //autosize textarea
  autosize($('textarea'));


  $('#clientSlider').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    items: 3,
    stagePadding: 50,
    responsive: {
      320: {
        items: 1,
        stagePadding: 0
      },
      768: {
        items: 1,
        stagePadding: 124
      },
      1024: {
        items: 2,
        stagePadding: 82
      },
      1440: {
        items: 2,
        stagePadding: 60
      },
      1920: {
        items: 3,
        stagePadding: 50
      }
    }
  });

  $('#experienceSlider').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    stagePadding: 150,
    responsiveClass: true,
    responsive: {
      320: {
        items: 1,
        stagePadding: 0
      },
      768: {
        items: 1,
        stagePadding: 124
      },
      1024: {
        items: 2,
        stagePadding: 64
      },
      1440: {
        items: 2,
        stagePadding: 60
      }
    }
  });

  // Validate phone with reg exp | fallback if input mask won't work
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

  function confirmFormSubmit(formBlock) {
    const leftBlock = $('.form-help-text p'),
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


  $('input[name=tel]').on('change', function () {
    let tel = $(this).val();
    checkTelephone(tel);
  });

  // Form submit function

  $('#pageForm').submit(function (e) {
    e.preventDefault();
    //validate tel input
    let telInput = $('#pageForm input[type=tel]'),
      formValid = checkTelephone(telInput.val());

    if (formValid) {
      confirmFormSubmit($('#pageForm'));
    }
  });

  $('#pageFormPopup').submit(function (e) {
    e.preventDefault();
    //validate tel input
    let telInput = $('#pageFormPopup input[type=tel]'),
      formValid = checkTelephone(telInput.val());

    if (formValid) {
      confirmFormSubmit($('#pageFormPopup'));
    }
  });

  // Form submit functions end

  $('.button_callback').click(function () {
    $('#formModal').addClass('slide-in');
  });

  $('.close-popup').click(function () {
    $('#formModal').removeClass('slide-in');
  })

});
