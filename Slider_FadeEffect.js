/*
	This is JQuery function, prepared for external calling. Before using this functon in the head of script
	must be placed <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script language="JavaScript" src="Slider_FadeEffect.js"></script>. As the input parapertes of this 
	function are used fdIn that mean fadeIn effect, dl - delay effect, fadeOut - fadeOut effect and
	timing that mean time for changin op imaes automaticaly. 
*/	
	
function Slider_FadeEffect(fdIn, dl, fdOut, timing)	
{	
	$("#slider img").hide();
	$("#slider img:last").show();						
												
	function gotoNextSlide(fdIn, dl, fdOut)
	{
		$("#slider img:last").fadeOut(fdOut);
   	$("#slider img:first").hide();
   	$("#slider img:first").appendTo("#slider").delay(dl).fadeIn(fdIn).end();
	}	
						
	function gotoPreviousSlide(fdIn, dl, fdOut)
	{
		$("#slider img:last").fadeOut(fdOut);
   	$("#slider img:last").prev().hide().delay(dl).fadeIn(fdIn).end();
   	$("#slider img:last").prependTo("#slider");   					
	}	
						
	var continuevar = setInterval(function(){gotoNextSlide(fdIn, dl, fdOut)},timing);			
						
	$("#button-next").click(function()
	{								
   	clearInterval(continuevar);
   	gotoNextSlide(fdIn, dl, fdOut);																			
	});
							
	$("#button-previous").click(function()
	{									
   	clearInterval(continuevar);
   	gotoPreviousSlide(fdIn, dl, fdOut);																										
	});
}