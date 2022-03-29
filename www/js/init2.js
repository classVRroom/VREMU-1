(function ($) {
    $(function () {
  
      $('select').select();
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space

  document.addEventListener('deviceready', onDeviceReady, false);
  
  function onDeviceReady() {
    // Cordova is now initialized. Have fun!
  
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
  
    // Set pin
    $('#pin').val(localStorage.getItem('pin'));
    $('#pin').next().addClass('active');

    // Set exerciseID
    $('#exID').val(localStorage.getItem('VRexerciseID'));
    $('#exID').next().addClass('active');

    // Set pin
    $('#verID').val(localStorage.getItem('minExerciseVersion'));
    $('#verID').next().addClass('active');

    // Set pin
    $('#performance').val('position_data: {}');
    $('#performance').next().addClass('active');

    
  }
  