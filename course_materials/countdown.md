---
layout: default
title: Countdown to Important Dates
---

<style>
  /* Embedded styles for the countdown page */
  .countdown-container {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    max-width: 600px;
    margin: 20px auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  .event-title {
    margin: 0 0 10px;
    font-size: 1.2rem;
  }
  .timer {
    font-size: 1.1rem;
    color: #333;
  }
  .note {
    font-size: 0.9rem;
    color: #666;
  }
  h1 {
    text-align: center;
  }
</style>

# Countdown to Important Dates

<!-- Poster Due Countdown -->
<div class="countdown-container">
  <div class="event-title">Posters Due (April 14, 2025)</div>
  <div id="countdown1" class="timer">Loading...</div>
</div>

<!-- Academic Festival Countdown -->
<div class="countdown-container">
  <div class="event-title">Academic Festival Start (April 21, 2025)</div>
  <div id="countdown2" class="timer">Loading...</div>
  <div class="note">Runs from April 21 - April 25</div>
</div>

<!-- Presentations Countdown -->
<div class="countdown-container">
  <div class="event-title">Presentations (April 22, 2025)</div>
  <div id="countdown3" class="timer">Loading...</div>
</div>

<!-- Board of Visitors Meeting Countdown -->
<div class="countdown-container">
  <div class="event-title">Board of Visitors Meeting (April 23, 2025 @ 6:00 PM EST)</div>
  <div id="countdown4" class="timer">Loading...</div>
</div>

<script>
  // Set target dates/times
  var posterDue        = new Date("April 14, 2025 23:59:59").getTime();
  var festivalStart    = new Date("April 21, 2025 00:00:00").getTime();
  var presentations    = new Date("April 22, 2025 00:00:00").getTime();
  var visitorsMeeting  = new Date("April 23, 2025 18:00:00 EST").getTime();

  // Update countdowns every second
  var x = setInterval(function() {
    var now = new Date().getTime();

    // Calculate time remaining for each event
    var distance1 = posterDue - now;
    var distance2 = festivalStart - now;
    var distance3 = presentations - now;
    var distance4 = visitorsMeeting - now;

    // Helper: Convert a distance into days/hours/minutes/seconds
    function getTimeComponents(distance) {
      var days    = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    }

    // Helper: Format the countdown string
    function formatCountdown(timeObj) {
      return timeObj.days + "d " + timeObj.hours + "h " + timeObj.minutes + "m " + timeObj.seconds + "s";
    }

    // Get time components for each event
    var cd1 = getTimeComponents(distance1);
    var cd2 = getTimeComponents(distance2);
    var cd3 = getTimeComponents(distance3);
    var cd4 = getTimeComponents(distance4);

    // Update HTML for each countdown
    document.getElementById("countdown1").innerHTML = distance1 > 0 ? formatCountdown(cd1) : "Deadline has passed";
    document.getElementById("countdown2").innerHTML = distance2 > 0 ? formatCountdown(cd2) : "Event has started";
    document.getElementById("countdown3").innerHTML = distance3 > 0 ? formatCountdown(cd3) : "Event has started";
    document.getElementById("countdown4").innerHTML = distance4 > 0 ? formatCountdown(cd4) : "Event has started";
  }, 1000);
</script>

