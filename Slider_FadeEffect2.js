/*
	This is JQuery function, prepared for external calling. Before using this functon in the head of script
	must be placed <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script language="JavaScript" src="Slider_FadeEffect.js"></script>. As the input parapertes of this 
	function are used fdIn that mean fadeIn effect, dl - delay effect, fadeOut - fadeOut effect and
	timing that mean time for changin op imaes automaticaly. 
*/	
	
function Slider_FadeEffect2(fdIn, dl, fdOut, timing)	
{	
	$("#slider2 img").hide();
	$("#slider2 img:last").show();						
												
	function gotoNextSlide(fdIn, dl, fdOut)
	{
		$("#slider2 img:last").fadeOut(fdOut);
   	$("#slider2 img:first").hide();
   	$("#slider2 img:first").appendTo("#slider2").delay(dl).fadeIn(fdIn).end();
	}	
						
	function gotoPreviousSlide(fdIn, dl, fdOut)
	{
		$("#slider2 img:last").fadeOut(fdOut);
   	$("#slider2 img:last").prev().hide().delay(dl).fadeIn(fdIn).end();
   	$("#slider2 img:last").prependTo("#slider2");   					
	}	
						
	var continuevar = setInterval(function(){gotoNextSlide(fdIn, dl, fdOut)},timing);			
						
	$("#button-next2").click(function()
	{								
   	clearInterval(continuevar);
   	gotoNextSlide(fdIn, dl, fdOut);																			
	});
							
	$("#button-previous2").click(function()
	{									
   	clearInterval(continuevar);
   	gotoPreviousSlide(fdIn, dl, fdOut);																										
	});
}