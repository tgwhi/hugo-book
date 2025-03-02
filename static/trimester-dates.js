const startDate = "2025-02-24 00:00";
const endDate = "2025-06-01 00:00";
const numWeeks = 15;
let week = 1;

calcDates(startDate);

function calcDates(start) {
  let from = new Date(start);

  let to = new Date(from);

  to.setDate(to.getDate() + 6);

  if (week == 7 || week == 13) {
    to.setDate(to.getDate() + 7);
  }

  fillDates(from, to);

  while (week < numWeeks) {
    from = to;
    from.setDate(from.getDate() + 1);
    calcDates(from);
    week++;
  }
  
}

function fillDates(first, last) {
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const firstDate = first.getDate() + " " + month[first.getMonth()];
  const lastDate = last.getDate() + " " + month[last.getMonth()];
  const rows = document.getElementsByClassName("timetable")[0].rows;
  rows[week].cells[0].innerHTML = `${firstDate}&#8211;${lastDate}`;
  week++;
}