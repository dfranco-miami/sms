document.addEventListener("deviceready", init, false);
function init() {

    
	document.querySelector("#sendMessage").addEventListener("touchend", function() {
		//alert("click");
		
        var number = document.querySelector("#number").value;
		var message = document.querySelector("#message").value;
    

		var msg = {
			phoneNumber:number,
			textMessage:message
		};
        
        

    //    alert(number);
    //    alert(message);
        
        //CONFIGURATION
        var options = {};
        /*
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };
     */
        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        
        sms.send(number, message, options, success, error);

        alert('here');
        /*
		sms.sendMessage(msg, function(message) {
			console.log("success: " + message);
			navigator.notification.alert(
			    'Message to ' + number + ' has been sent.',
			    null,
			    'Message Sent',
			    'Done'
			);

		}, function(error) {
			console.log("error: " + error.code + " " + error.message);
			navigator.notification.alert(
				'Sorry, message not sent: ' + error.message,
				null,
				'Error',
				'Done'
			);
		});
*/
	}, false);

}