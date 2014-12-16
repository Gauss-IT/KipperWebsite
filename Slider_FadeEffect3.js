/*
	This is JQuery function, prepared for external calling. Before using this functon in the head of script
	must be placed <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script language="JavaScript" src="Slider_FadeEffect.js"></script>. As the input parapertes of this 
	function are used fdIn that mean fadeIn effect, dl - delay effect, fadeOut - fadeOut effect and
	timing that mean time for changin op imaes automaticaly. 
*/	
	
function Slider_FadeEffect3(fdIn, dl, fdOut, timing)	
{	
	$("#left_catalog img").hide();
	$("#left_catalog img:last").show();						
												
	function gotoNextSlide(fdIn, dl, fdOut)
	{
		$("#left_catalog img:last").fadeOut(fdOut);
   	$("#left_catalog img:first").hide();
   	$("#left_catalog img:first").appendTo("#left_catalog").delay(dl).fadeIn(fdIn).end();
	}	
						
	function gotoPreviousSlide(fdIn, dl, fdOut)
	{
		$("#left_catalog img:last").fadeOut(fdOut);
   	$("#left_catalog img:last").prev().hide().delay(dl).fadeIn(fdIn).end();
   	$("#left_catalog img:last").prependTo("#left_catalog");   					
	}	
						
	var continuevar = setInterval(function(){gotoNextSlide(fdIn, dl, fdOut)},timing);			
						
	$("#button-next3").click(function()
	{								
   	clearInterval(continuevar);
   	gotoNextSlide(fdIn, dl, fdOut);																			
	});
							
	$("#button-previous3").click(function()
	{									
   	clearInterval(continuevar);
   	gotoPreviousSlide(fdIn, dl, fdOut);																										
	});
}