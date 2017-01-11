$(document).ready(function() {

	$("button#hello").click(function() {
		$("ul#user").prepend("<li>Hello!</li>");
		$("ul#webpage").prepend("<li>Well hello old friend</li>");

		$("ul#user").children("li").first().click(function(){
			$(this).remove();
		})	
		$("ul#webpage").children("li").first().click(function(){
			$(this).remove();	
		})

	});

	$("button#goodbye").click(function() {
		$("ul#user").prepend("<li>Goodbye!</li>");
		$("ul#webpage").prepend("<li>Nice to see you!</li>");

		$("ul#user").children("li").first().click(function(){
			$(this).remove();
		})	
		$("ul#webpage").children("li").first().click(function(){
			$(this).remove();	
		})
	});

	$("button#stop").click(function() {
		$("ul#user").prepend("<li>Stop Copying Me!</li>");
		$("ul#webpage").prepend("<li>Well gosh no need to be rude</li>");
		$("ul#user").children("li").first().click(function(){
			$(this).remove();
		})	
		$("ul#webpage").children("li").first().click(function(){
			$(this).remove();	
		})

	});





});