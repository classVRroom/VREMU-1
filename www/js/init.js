(function ($) {
  $(function () {

    $('select').formSelect();

  }); // end of document ready
})(jQuery); // end of jQuery name space
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

  //LoginButton onclick function
  $("#loginButton").click(function () {
    let pin = $("#pin").val();
    //We identify the API to be used
    let selectedAPI = $("#selectAPI option:selected").val();

    // Ajax call to the selected API
    $.get(selectedAPI + '/api/start_vr_exercise', {
      PIN: pin
    }, function(res){
      if (res.status != 'OK'){
        M.toast({html: res.message});
      }
      else {
        localStorage.setItem('pin', pin);
        localStorage.setItem('VRexerciseID', res.VRexerciseID);
        localStorage.setItem('minExerciseVersion', res.minExerciseVersion);
        window.open('form.html');
      }
      console.log(res)
    }, "json");
    

    //Page reload prevention
    return false;
  });
}
