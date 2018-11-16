$(document).ready(function(){
	$('#NQ').click(function(){ /*References ID from the HTML file*/
		var color=['#F64747','#663399','#4183D7','#22313F','#9A12B3','#03A678']; /* An Array that will recognize HexaDecimal color format. */
		getRandomQuote();
	});
});
/* Ajax function that makes API calls to generate the random quotes*/
function getRandomQuote(){
	var color=['turquoise','chocolate','orange','green','Purple','pink']; /* Switches background color everytime a new quote generates */
	var index=color[Math.floor(Math.random()*color.length)]; /*Randomizes the order of the background color change */
	/* Calls Ajax to get API, gets API using URL*/
	$.ajax({
			url: 'https://talaikis.com/api/quotes/random/',
			type: 'GET', /*Gets API*/
			dataType: 'json',
			success: function(data) {
					var quote=data.quote;
var author=data.author;
$('.quote #data').html(quote); /*Adds Quote*/
$('.quote h4').html("-"+ author);	/*Adds Author's signiture*/
$('body').css('background-color', index);
$('.col').css('background-color', index);
$('#newquote').css('color','white');
			},
			error: function() {
				$('.quote #data').html("Quote 404 Not Found.");
			}
		});	
}

