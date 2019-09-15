(function() {
  var podCastModule = (function() {
    var podCasts = [
      {
        Id: "003",
        Description:
          "Bootstrapping a SaaS Business to $30,000,000/year with David Hauser of Grasshopper",
        AudioFile:
          "https://backtracks.fm/indiehackers/pr/735eeb8e-68a8-11e7-9428-0e6e2408d686/3-indiehackers-david-hauser-of-grasshopper.mp3",
        TranscriptFile: "003.html"
      },
      {
        Id: "004",
        Description:
          "Succeeding in a Crowded Market by Building a Niche Business with Garrett Dimon of Sifter",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/abfb296c-68a8-11e7-9428-0e6e2408d686/src/.bt_download/4-indiehackers-garrett-dimon-of-sifter.mp3",
        TranscriptFile: "004.html"
      },
      {
        Id: "012",
        Description:
          "Traveling, Learning to Code, and Bootstrapping to $25k/mo with Tyler Tringas of Storemapper",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/98277d12-68aa-11e7-9428-0e6e2408d686/src/.bt_download/12-indiehackers-tyler-tringas-of-storemapper.mp3",
        TranscriptFile: "012.html"
      },
      {
        Id: "020",
        Description:
          "Building a Million Dollar Mailing List with Scott of Scott's Cheap Flights",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/776bcd06-68ac-11e7-9428-0e6e2408d686/src/.bt_download/20-indiehackers-scott-keyes-of-scotts-cheap-flights.mp3",
        TranscriptFile: "020.html"
      },
      {
        Id: "028",
        Description:
          "How Wes Bos Teaches 100,000 Programmers as a One-Man Operation",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/d68f736c-9379-11e7-a0f6-0e5a4884b288/src/.bt_download/028-wes-bos.mp3",
        TranscriptFile: "028.html"
      },
      {
        Id: "033",
        Description:
          "Finding Your Next Idea with Philippe Lehoux of MissiveApp.com",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/a7509bb8-b42a-11e7-a3ac-0e825c474230/src/.bt_download/033-philippe-lehoux-of-missive.mp3",
        TranscriptFile: "033.html"
      },
      {
        Id: "037",
        Description:
          "The Story of WorkFlowy: From $0 to $800,000 a Year with Jesse Patel",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/8bd5061a-bf53-11e7-80e6-0e4f6e23bf30/src/.bt_download/037-jesse-patel-of-workflowy.mp3",
        TranscriptFile: "037.html"
      },
      {
        Id: "041",
        Description:
          "An Optimistic Nihilist's Take on Building a $2M Business with Vincent Woo",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/8b1c190a-e061-11e7-bfb1-0ead9c56e772/src/.bt_download/041-vincent-woo-of-coderpad.mp3",
        TranscriptFile: "041.html"
      },
      {
        Id: "043",
        Description:
          "Confronting Your Fears and Taking a Leap with Pieter Levels of Nomad List",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/ab7c09a0-fb9e-11e7-8bd9-0e7e7901686e/src/.bt_download/043-pieter-levels-of-nomad-list.mp3",
        TranscriptFile: "043.html"
      },
      {
        Id: "049",
        Description:
          "Everything You Need to Know About Business with Josh Kaufman of The Personal MBA",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/434e2c9c-3c75-11e8-b796-0e46a39319da/src/.bt_download/049-josh-kaufman-of-the-personal-mba.mp3",
        TranscriptFile: "049.html"
      },
      {
        Id: "051",
        Description:
          "Finding Your Way as a Founder with Rand Fishkin of Moz and SparkToro",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/630e45ca-49a5-11e8-a4b5-0e44f9425f00/src/.bt_download/051-rand-fishkin-of-moz-and-sparktoro.mp3",
        TranscriptFile: "051.html"
      },
      {
        Id: "059",
        Description:
          "From Laid Off to Generating $25,000 in Monthly Revenue with John Doherty of Credo",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/fe5c51a2-80a5-11e8-bced-0e39d753d0dc/src/.bt_download/059-john-doherty-of-credo.mp3",
        TranscriptFile: "059.html"
      },
      {
        Id: "061",
        Description:
          "How to Bootstrap Your Way to $250,000,000/year with JT Marino of Tuft & Needle",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/aa7ae04c-8ad4-11e8-8828-0e517dd533b2/src/.bt_download/061-jt-marino-of-tuft-and-needle.mp3",
        TranscriptFile: "061.html"
      },
      {
        Id: "062",
        Description:
          "Getting a Brand New SaaS Business Off the Ground with Mike Taber of Bluetick",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/69065c2e-913a-11e8-9c39-0e8e19669882/src/.bt_download/062-mike-taber-of-bluetick.mp3",
        TranscriptFile: "062.html"
      },
      {
        Id: "063",
        Description:
          "Turning Small Ideas into a $35,000 a Month Business with Katie Keith of Barn2 Media",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/c5aa470c-96b1-11e8-b26e-0e0bef0e9698/src/.bt_download/063-katie-keith-of-barn2-media.mp3",
        TranscriptFile: "063.html"
      },
      {
        Id: "078",
        Description:
          "Taking on Google and Facebook as a Solo Open-Source Founder with Evan You of Vue.js",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/1d20051c-fa76-11e8-b151-0e7e3c9a565a/src/.bt_download/078-evan-you-of-vue-js.mp3",
        TranscriptFile: "078.html"
      },
      {
        Id: "079",
        Description:
          "Things Every Founder Should Know About Growth with Julian Shapiro of Bell Curve",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/4b13a32e-2024-11e9-91bd-0ebe27f14992/src/.bt_download/079-julian-shapiro-of-bell-curve-v3.mp3",
        TranscriptFile: "079.html"
      },
      {
        Id: "086",
        Description:
          "How to Build a Life You Love by Quitting Everything Else with Lynne Tye of Key Values",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/158811ca-4c4a-11e9-9ed6-0e682b96a9c0/src/.bt_download/086-lynne-tye-of-key-values.mp3",
        TranscriptFile: "086.html"
      },
      {
        Id: "087",
        Description:
          "Examining the Repeated Successes of a Product-Focused Solo Founder with AJ of Carrd",
        AudioFile:
          "https://f.bktrksfn.com/users/proj/c4c5371e-523d-11e9-bbf3-0e637c434202/src/.bt_download/087-aj-of-carrd.mp3",
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
      if (
        closestTimestamp != 0 &&
        (!currentClosestTimestamp === null ||
          currentClosestTimestamp - closestTimestamp != 0)
      ) {
        currentWordIndex = 0;
        //
        currentClosestTimestamp = closestTimestamp;
        //

        if (!!currentClosestTimestampDisplay) {
          currentClosestTimestampDisplay.addClass("noDisplayTranscript");
          currentClosestTimestampDisplayParagraph.unmark(options);
        }
        currentClosestTimestampDisplay = $(
          "a[href$='#" + currentClosestTimestamp + "']"
        ).closest(".episode-transcript__speaking-turn");
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
    $audio.find("source").attr("src", podcastData.AudioFile);
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
