function getMonthNames() {
  const monthNames = [
    "1. January",
    "2. February",
    "3. March",
    "4. April",
    "5. May",
    "6. June",
    "7. July",
    "8. August",
    "9. September",
    "10. October",
    "11. November",
    "12. December",
  ];

  for (let i = 0; i < monthNames.length; i++) {
    let div = document.querySelector("div");
    let p = document.createElement("p");
    p.innerHTML = `${monthNames[i]}`;
    div.appendChild(p);
    document.querySelector("div").style.display = "block";
    document.getElementById("months").style.display = "none";
  }
}
function currentMonth() {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  // console. log(month);
  document.getElementById(
    "currentMonth"
  ).innerText = `Current Month Is ${month}`;
}