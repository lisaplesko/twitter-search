$(document).ready(function() {
  var pusher = new Pusher('87cb84de29cc7fcfbf12');
    var channel = pusher.subscribe('test_channel');
    channel.bind('my_event', function(data) {
      $tweetDiv = $('<div>').addClass('one_tweet').text(data.tweet);
      $('.tweets').append($tweetDiv);
    });
});
