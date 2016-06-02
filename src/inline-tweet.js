var inlineTweets = document.querySelectorAll('*[data-inline-tweet]');

if (inlineTweets) {
  function buildInlineTweet(inlineTweet) {
    var linkContent = inlineTweet.innerHTML;
    var tweetText = inlineTweet.dataset.inlineTweetText ? inlineTweet.dataset.inlineTweetText : inlineTweet.innerHTML;

    // TWEET LINK VARIABLES
    var tweetTextEncoded = encodeURIComponent(tweetText);
    var pageURL = inlineTweet.dataset.inlineTweetUrl ? inlineTweet.dataset.inlineTweetUrl : window.location.href;
    var tweetVia = inlineTweet.dataset.inlineTweetVia ? "&via="+inlineTweet.dataset.inlineTweetVia : "";
    var tweetHashtags = inlineTweet.dataset.inlineTweetTags ? "&hashtags="+inlineTweet.dataset.inlineTweetTags : "";
    var tweetLink = "https://twitter.com/intent/tweet/?text="+tweetTextEncoded+"&url="+pageURL+tweetVia+tweetHashtags;

    // SPAN ELEMENT
    var tweetTextContainer = document.createElement('span');
    tweetTextContainer.innerHTML = linkContent;

    // ANCHOR ELEMENT
    var link = document.createElement('a');
    link.target = "_blank";
    link.href = tweetLink;
    link.appendChild(tweetTextContainer);

    inlineTweet.innerHTML = "";
    inlineTweet.appendChild(link);
  }

  for ( var i = 0; i < inlineTweets.length; i++ ) {
    buildInlineTweet(inlineTweets[i])
  }
}