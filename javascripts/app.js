(function () {
  "use strict";
  var $ = window.$, ctwitter = window.ctwitter, userInput = "English";
  $(document).ready((function () {
    alert("Jquery loaded");
    //now lets set up a CTwitter
    var twitter = new ctwitter.CTwitter();
    twitter.stream("statuses/filter", { lang: "en", track: [userInput] }, function (stream) {
      stream.on("data", function (tweet) {
        //we do stuff with the tweets here
        console.log(tweet.text);
      });
    });
  }()));
}());