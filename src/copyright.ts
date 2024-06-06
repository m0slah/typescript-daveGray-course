// Orginal JS code
// const year = document.getElementById('year');
// const thisYear = new Date().getFullYear;
// year?.setAttribute("datetime", thisYear);
// year.textContent = thisYear;

// 2nd variation

let year = document.getElementById("year") as HTMLSpanElement;

let thisYear: string = new Date().getFullYear.toString();

year.setAttribute("datetime", thisYear);
year.textContent = thisYear;