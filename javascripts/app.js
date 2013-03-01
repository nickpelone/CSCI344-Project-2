(function () {
  "use strict";
  var $ = window.$, ctwitter = window.ctwitter, userInput;
  $(document).ready((function () {
    //let's grab some user input and wait for a signal before we start getting from twitter
    //we will start by adding a click handler to the go button, which when clicked,
    //we will take the value and search through twitter with it
    $("#go").click(function () {
      userInput = $("#searchBox").val();
      $("#footer").fadeIn(2000);
      //now lets set up a CTwitter
      $("h1:first").hide("fold", {}, 1000);
      $("#searcher").append("<div id='searchResults' style='display:none;'><p id='pleaseWait'>Please wait, results are incoming...</p><ul id='resultsList'></ul></div>");
      $("#searchResults").fadeIn(1000);
      var twitter = new ctwitter.CTwitter();
      twitter.stream("statuses/filter", { lang: "en", track: [userInput] }, function (stream) {
        stream.on("data", function (tweet) {
          //we do stuff with the tweets here
          console.log(tweet.text);
          $("#pleaseWait").fadeOut(1000);
          $("#resultsList").prepend("<li>" + tweet.text + "</li>");
          $("li").eq(9).hide(400);
        });
      });
    });
  }()));
}());