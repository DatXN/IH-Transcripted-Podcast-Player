(function() {
  var podCastModule = (function() {
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
    function get() {
      return podCasts;
    }
    return {
      get: get
    };
  })();
  // Controls
  var $transcriptsPanel = $("#transcriptsPanel");
  var $ndPodCastPlaylist = $("#ndPodCastPlaylist");
  var $curEpisodeTitle = $("#curEpisodeTitle");
  var $curEpisodeDescription = $("#curEpisodeDescription");
  var $audioCurrentTime = $(".current-time");
  var $audioTotalTime = $(".total-time");
  var $audioProgress = $("#progressBar");
  var $audio = $("#audioPodcast");
  var $playPause = $("#playPause");
  var noSleep = new NoSleep();

  var podcastAudioDataFilePath = "data/";
  var podcastTranscriptDataFilePath = "transcripts/";

  //
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
  //   $transcriptsPanel.load("/transcripts/003.html", function() {
  //     initTranscriptDisplay();
  //   });
  function playPodcast(podcastData) {
    $audio
      .find("source")
      .attr("src", podcastAudioDataFilePath + podcastData.AudioFile);
    noSleep.enable();
    $(playPause).html("pause");
    $curEpisodeTitle.html("Episode #" + podcastData.Id);
    $curEpisodeDescription.html("- " + podcastData.Description);
    document.title = "- " + podcastData.Description;
    //
    try {
      $audio[0].load();
      $audio[0].play();
    } catch (error) {
      $audio[0].play();
    }
    $transcriptsPanel.load(
      podcastTranscriptDataFilePath + podcastData.TranscriptFile,
      function() {
        initTranscriptDisplay();
        $transcriptsPanel.css("display", "");
      }
    );
    initTranscriptDisplay();
  }
  function initPlaylist() {
    function buildNavItem(data) {
      var $item = $("<a></a")
        .addClass("nav-item nav-link")
        .attr("href", "#")
        .html("Episode #" + data.Id)
        .append(
          $("<p></p>").append($("<small></small>").html(data.Description))
        );

      $item.data("podcast", data);
      return $item;
    }
    //
    $ndPodCastPlaylist.html("");
    podCastModule.get().forEach(function(data, index) {
      $ndPodCastPlaylist.append(buildNavItem(data));
    });
    //
    $ndPodCastPlaylist.on("click", ".nav-item", function(e) {
      var podcastData = $(this).data("podcast");
      $("#navdrawerDefault").navdrawer("hide");
      playPodcast(podcastData);
    });
  }
  function initPage() {
    $curEpisodeTitle.html("Podcast Transcript Player");
    $curEpisodeDescription.html("- Select podcast to play.");
    document.title = "Dx - Podcast Transcript Player";
    $audioCurrentTime.html("00:00");
    $audioTotalTime.html("--:--");
    $audioProgress.css("width", 0 + "%").attr("aria-valuenow", 0);
    $transcriptsPanel.css("display", "none");
    $transcriptsPanel.html("");
  }
  function init() {
    initPlaylist();
    initPage();
  }
  init();
})();
