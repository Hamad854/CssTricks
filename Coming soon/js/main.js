
jQuery(document).ready(function() {	
	

	$("#typed").typed({
		// strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
		stringsElement: $('#typed-strings'),
		typeSpeed: 50,
		backDelay: 1000,
		loop:true,
		contentType: 'html', // or text
		// defaults to false for infinite loop
		loopCount:false,
		callback: function(){ foo(); },
		// resetCallback: function() { newTyped(); }
	});

	$(".reset").click(function(){
		$("#typed").typed('reset');
	});
 
 
    // function newTyped(){ /* A new typed object */ }

    function foo(){console.log("Callback"); }

	
});

$("#countdown")
.countdown("2022/3/25",function(event)
{
	$("#days").text(
		event.strftime("%D"));
$("#hours").text(
		event.strftime("%H"));
$("#minutes").text(
		event.strftime("%M"));
$("#seconds").text(
		event.strftime("%S"));


});
