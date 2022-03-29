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

    function send_form(){
      console.log("entra")
      $.ajax({
        method: "GET",
        url: localStorage.getItem("url")+"/api/finish_vr_exercise",
        headers: {
          "accept": "application/json",
          "Access-Control-Allow-Origin":"*"
        }, // Headers. Informen a la API del tipus de trucada que s'està fent.
        data: {
          "PIN" : $("#pin").val(),
          "autograde": [{
            "passed_items": $("#passItems").val(), 
            "failed_items": $("#failItems").val(), 
            "score": $("#score").val(), 
            "comments": $("#comments").val()
        }],
          "VRexerciseID" : $("#exID").val(),
          "exerciseVersion" : $("#verID").val(),
          "metadata" : $("#performance").val()
        }  // Dades a enviar al servidor
    
      }).done(function (msg) {
          alert("resuts sent correctly")
      }).fail(function () {
          alert("Nope");
        
      });
      
    
    };
  
    $("#formBtn").on("click",send_form);
  }
  