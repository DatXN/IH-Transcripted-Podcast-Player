(function() {
  var podCasts = [
    {
      Id: "003",
      Description:
        "Bootstrapping a SaaS Business to $30,000,000/year with David Hauser of Grasshopper",
      AudioFile: "3-indiehackers-david-hauser-of-grasshopper.mp3",
      TranscriptFile: "003.html"
    },
    {
      Id: "043",
      Description:
        "Confronting Your Fears and Taking a Leap with Pieter Levels of Nomad List",
      AudioFile: "043-pieter-levels-of-nomad-list.mp3",
      TranscriptFile: "043.html"
    }
  ];
  var $transcriptsPanel = $("#transcriptsPanel");
  function initTranscriptDisplay() {
    function findClosestTimestamp(timestampData, goal) {
      var closest = 0;
      var i = 0;
      while (goal - timestampData[i] > 0) {
        closest = timestampData[i];
        i++;
      }
      var result = {
        current: closest,
        next: timestampData[i]
      };
      return result;
    }
    function countWords(str) {
      return str.split(" ").filter(function(n) {
        return n != "";
      }).length;
    }
    //
    var $audio = $("#audioPodcast");
    var timestampData = $("span.episode-transcript__timestamp")
      .map(function() {
        return $(this).data("bt-time");
      })
      .get();
    var closestTimestamp = null;
    var currentClosestTimestamp = null;
    var currentClosestTimestampDisplay = null;
    var currentClosestTimestampDisplayParagraph = null;
    var myInterval = null;
    var currentWordIndex = 0;

    $("div.episode-transcript__speaking-turn").addClass("noDisplayTranscript");
    console.log(timestampData);
    //
    var options = {
      each: function(element) {
        setTimeout(function() {
          $(element).addClass("animate");
        }, 250);
      }
    };
    $audio.on("timeupdate", function(e) {
      var currentPlaybackTime = $audio[0].currentTime;
      var result = findClosestTimestamp(timestampData, currentPlaybackTime);
      closestTimestamp = result.current;
      var currentPlaybackOffset = currentPlaybackTime - closestTimestamp;
      var currentTimespan = result.next - result.current;
      // display transcript
      if (currentClosestTimestamp - closestTimestamp != 0) {
        currentWordIndex = 0;
        if (!!myInterval) {
          clearInterval(myInterval);
        }
        //
        currentClosestTimestamp = closestTimestamp;
        //

        if (!!currentClosestTimestampDisplay) {
          currentClosestTimestampDisplay.addClass("noDisplayTranscript");
          currentClosestTimestampDisplayParagraph.unmark(options);
        }
        currentClosestTimestampDisplay = $(
          "a[href$='" + currentClosestTimestamp + "']"
        ).parents(".episode-transcript__speaking-turn");
        currentClosestTimestampDisplay.removeClass("noDisplayTranscript");
        currentClosestTimestampDisplayParagraph = $(
          currentClosestTimestampDisplay.find("p.episode-transcript__paragraph")
        );
      }
      // Highlight
      if (!!currentClosestTimestampDisplayParagraph) {
        var numberOfWords = currentClosestTimestampDisplayParagraph.text()
          .length;
        var playbackRatio = currentPlaybackOffset / currentTimespan;
        currentClosestTimestampDisplayParagraph.unmark(options);
        currentClosestTimestampDisplayParagraph.markRanges(
          [
            {
              start: 0,
              length:
                numberOfWords * (playbackRatio + 0.035) > numberOfWords
                  ? numberOfWords
                  : numberOfWords * (playbackRatio + 0.035)
            }
          ],
          options
        );
      }
    });
  }
  $transcriptsPanel.load("/transcripts/003.html", function() {
    initTranscriptDisplay();
  });
})();
