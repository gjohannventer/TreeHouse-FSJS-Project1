var quotes = [{
	}, 
	{
	}, 
	{
	},
	{
	},
	{
	},
	{
	}
];

console.log(quotes);


function getRandomQuote() {
	var randomNumber = generateRandomNumber(1, quotes.length)
	return quotes[randomNumber];
}

function generateRandomNumber(lower, upper) {
	return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

function printQuote() {
	var randomQuote = getRandomQuote();
	var html = generateHtml(randomQuote);
	document.getElementById('quote-box').innerHTML = html;
}

function generateHtml(randomQuote) {
	var html = "<p class='quote'>" + randomQuote.text + "</p><p class='source'>" + randomQuote.source + "</p>"
	if (randomQuote.citation)
		html += "<span class='citation'>" + randomQuote.citation + "</span>";
	if (randomQuote.year)
		html += "<span class='year'>" + quote.year + "</span></p>";
	
	return html;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
