//losAngeles
function updateTime() {
  let losAngelesEelement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesEelement.querySelector(".date");
  let losAngelesTimeElement = losAngelesEelement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //paris
  let parisEelement = document.querySelector("#paris");
  let parisDateElement = parisEelement.querySelector(".date");
  let parisTimeElement = parisEelement.querySelector(".time");
  let parisTime = moment().tz("Europe/paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime), 1000;
