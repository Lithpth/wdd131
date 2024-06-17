const currentDate = new Date();

let currentYear;
currentYear = currentDate.getFullYear();

document.getElementById('year').value = currentYear;

//
document.querySelector('#year').textContent = new Date().getFullYear();