$(document).ready(function () {
  $("#my-calendar").zabuto_calendar({
      ajax: {
        url: "assets/data/events.json",
        modal: true
      },
      today: true,
      show_previous: true,
      show_next: true,
      show_days: true

  });
});
