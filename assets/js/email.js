jQuery(document).ready(function($) {
    $('#contact-form').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: "https://wlem42r1c3.execute-api.us-east-1.amazonaws.com/default",
            type: "post",
            crossDomain: true,
            data: JSON.stringify({ name: $('#name').val(),
                    email: $('#email').val(),
                    phone: $('#phone').val(),
                    message: $('#message').val(),
                    service: $('#service').val(),
                    to_email: 'thegoldenagecircle@gmail.com'
                  }),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            headers: {
                          "accept": "application/json",
                          "Access-Control-Allow-Origin":"*",
                          "Content-Type": "application/json"
                      },
            success: function (data, status) {
                console.log(status);
                if (status == "success") {
                  alert("We have received your message. You'll hear from us soon.");
                    $('#contact-form').trigger("reset");
                }
                else {
                    alert("Sorry, couldn't send your message. Please try again later.");
                }
            }

        });
    });

    $('#subscriber-form').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: "https://wlem42r1c3.execute-api.us-east-1.amazonaws.com/default",
            type: "post",
            crossDomain: true,
            data: JSON.stringify({ name: 'NA: EMAIL SUBSCRIBER',
                    email: $('#subscriber-email').val(),
                    phone: 'NA: EMAIL SUBSCRIBER',
                    message: 'NA: EMAIL SUBSCRIBER',
                    service: 'NA: EMAIL SUBSCRIBER',
                    to_email: 'thegoldenagecircle@gmail.com'
                  }),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            headers: {
                          "accept": "application/json",
                          "Access-Control-Allow-Origin":"*",
                          "Content-Type": "application/json"
                      },
            success: function (data, status) {
                console.log(status);
                if (status == "success") {
                  alert("Thanks for subscribing. You'll hear from us soon.");
                    $('#subscriber-form').trigger("reset");
                }
                else {
                    alert("Sorry, subscribe you. Please try again later.");
                }
            }

        });
    });

});      