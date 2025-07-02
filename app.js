
//Calendar 
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        { title: 'event', date: '2025-07-10' },
        { title: 'event', date: '2025-07-15' }
      ],
      color: #30401c,
      textColor: #f7f3f4,
    });
    calendar.render();
  });
