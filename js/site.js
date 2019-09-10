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
        Id: "004",
        Description:
          "Succeeding in a Crowded Market by Building a Niche Business with Garrett Dimon of Sifter",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "004.html"
      },
      {
        Id: "012",
        Description:
          "Traveling, Learning to Code, and Bootstrapping to $25k/mo with Tyler Tringas of Storemapper",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "012.html"
      },
      {
        Id: "020",
        Description:
          "Building a Million Dollar Mailing List with Scott of Scott's Cheap Flights",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "020.html"
      },
      {
        Id: "028",
        Description:
          "How Wes Bos Teaches 100,000 Programmers as a One-Man Operation",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "028.html"
      },
      {
        Id: "033",
        Description:
          "Finding Your Next Idea with Philippe Lehoux of MissiveApp.com",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "033.html"
      },
      {
        Id: "037",
        Description:
          "The Story of WorkFlowy: From $0 to $800,000 a Year with Jesse Patel",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "037.html"
      },
      {
        Id: "041",
        Description:
          "An Optimistic Nihilist's Take on Building a $2M Business with Vincent Woo",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "041.html"
      },
      {
        Id: "043",
        Description:
          "Confronting Your Fears and Taking a Leap with Pieter Levels of Nomad List",
        AudioFile: "043-pieter-levels-of-nomad-list.mp3",
        TranscriptFile: "043.html"
      },
      {
        Id: "049",
        Description:
          "Everything You Need to Know About Business with Josh Kaufman of The Personal MBA",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "049.html"
      },
      {
        Id: "051",
        Description:
          "Finding Your Way as a Founder with Rand Fishkin of Moz and SparkToro",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "051.html"
      },
      {
        Id: "059",
        Description:
          "From Laid Off to Generating $25,000 in Monthly Revenue with John Doherty of Credo",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "059.html"
      },
      {
        Id: "061",
        Description:
          "How to Bootstrap Your Way to $250,000,000/year with JT Marino of Tuft & Needle",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "061.html"
      },
      {
        Id: "062",
        Description:
          "Getting a Brand New SaaS Business Off the Ground with Mike Taber of Bluetick",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "062.html"
      },
      {
        Id: "063",
        Description:
          "Turning Small Ideas into a $35,000 a Month Business with Katie Keith of Barn2 Media",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "063.html"
      },
      {
        Id: "078",
        Description:
          "Taking on Google and Facebook as a Solo Open-Source Founder with Evan You of Vue.js",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "078.html"
      },
      {
        Id: "079",
        Description:
          "Things Every Founder Should Know About Growth with Julian Shapiro of Bell Curve",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "079.html"
      },
      {
        Id: "086",
        Description:
          "How to Build a Life You Love by Quitting Everything Else with Lynne Tye of Key Values",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "086.html"
      },
      {
        Id: "087",
        Description:
          "Examining the Repeated Successes of a Product-Focused Solo Founder with AJ of Carrd",
        AudioFile: "4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "087.html"
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
      .attr("src", podcastAudioDataFilePath + podcastData.Id + ".mp3");
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
      podcastTranscriptDataFilePath + podcastData.Id + ".html",
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
