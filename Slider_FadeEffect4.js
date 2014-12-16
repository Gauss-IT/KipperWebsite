/*
	This is JQuery function, prepared for external calling. Before using this functon in the head of script
	must be placed <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script language="JavaScript" src="Slider_FadeEffect.js"></script>. As the input parapertes of this 
	function are used fdIn that mean fadeIn effect, dl - delay effect, fadeOut - fadeOut effect and
	timing that mean time for changin op imaes automaticaly. 
*/	
	
function Slider_FadeEffect4(fdIn, dl, fdOut, timing)	
{	
	$("#right_catalog img").hide();
	$("#right_catalog img:last").show();						
												
	function gotoNextSlide(fdIn, dl, fdOut)
	{
		$("#right_catalog img:last").fadeOut(fdOut);
   	$("#right_catalog img:first").hide();
   	$("#right_catalog img:first").appendTo("#right_catalog").delay(dl).fadeIn(fdIn).end();
	}	
						
	function gotoPreviousSlide(fdIn, dl, fdOut)
	{
		$("#right_catalog img:last").fadeOut(fdOut);
   	$("#right_catalog img:last").prev().hide().delay(dl).fadeIn(fdIn).end();
   	$("#right_catalog img:last").prependTo("#right_catalog");   					
	}	
						
	var continuevar = setInterval(function(){gotoNextSlide(fdIn, dl, fdOut)},timing);			
						
	$("#button-next4").click(function()
	{								
   	clearInterval(continuevar);
   	gotoNextSlide(fdIn, dl, fdOut);																			
	});
							
	$("#button-previous4").click(function()
	{									
   	clearInterval(continuevar);
   	gotoPreviousSlide(fdIn, dl, fdOut);																										
	});
}