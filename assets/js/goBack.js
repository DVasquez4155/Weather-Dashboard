var body = document.body;
var goBackDiv = document.createElement('div');
$(goBackDiv)
.addClass('alert alert-info mb-0')
.attr('style', 'position: fixed; bottom: 10px; right: 10px;');
var goBackLink = document.createElement('a');
$(goBackLink)
.attr('href', 'https://dvasquez4155.github.io/portfolio.html')
.addClass('alert-link-light mb-0')
.html('Go Back to Portfolio');
$(body).append(goBackDiv);
$(goBackDiv).append(goBackLink);