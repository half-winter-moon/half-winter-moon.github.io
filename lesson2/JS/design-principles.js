// Retrieve and display the current year
let d = new Date();
let year = d.getFullYear()
document.getElementById("currentYear").textContent = year;

// Display the last date the page was modified

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").textContent = oLastModif