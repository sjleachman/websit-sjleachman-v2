$(document).ready(function() {
    $('#contactForm').submit(function(e) {
      var name    = document.getElementById('inputName');
      var email   = document.getElementById('inputEmail');
      var subject = document.getElementById('inputSubject');
      var message = document.getElementById('inputMessage');
      var msgDanger = document.getElementById('msgDanger');
      var msgSuccess = document.getElementById('msgSuccess');
      
      
      console.log(msgDanger);

      if (!name.value || !email.value || !subject || !message.value) {
        console.log("Please check your entries");
        msgDanger.classList.add('show');
        e.preventDefault();
        return false;
      } else {
        msgSuccess.classList.add('show')
      };
    });
  });
