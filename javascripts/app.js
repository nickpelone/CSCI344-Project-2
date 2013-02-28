(function () {
  "use strict";
  var $ = window.$, ctwitter = window.ctwitter, userInput;
  $(document).ready((function () {
    alert("Jquery loaded");
    //let's grab some user input and wait for a signal before we start getting from twitter
    //we will start by adding a click handler to the go button, which when clicked,
    //we will take the value and search through twitter with it
    $("#go").click(function () {
      userInput = $("#searchBox").val();
      //now lets set up a CTwitter
      var twitter = new ctwitter.CTwitter();
      twitter.stream("statuses/filter", { lang: "en", track: [userInput] }, function (stream) {
        stream.on("data", function (tweet) {
          //we do stuff with the tweets here
          console.log(tweet.text);
        });
      });
    });
  }()));
}());