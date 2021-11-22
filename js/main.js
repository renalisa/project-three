window.addEventListener("load", () => {
  let mainDiv = document.getElementsByClassName("scrollbar")[0];

  let card1 = document.createElement("div");
  let card2 = document.createElement("div");
  let card3 = document.createElement("div");

  card1.addEventListener("click", () => {});
  card2.addEventListener("click", () => {});
  card3.addEventListener("click", () => {});

  let popup1 = document.createElement("div");
  let popup2 = document.createElement("div");
  let popup3 = document.createElement("div");

  /*
  popup1.onclick = function() {
    modal.style.display = "block";
  popup2.onclick = function() {
    modal.style.display = "block";
  popup3.onclick = function() {
    modal.style.display = "block";

  span.onclick = function() {
      modal.style.display = "none";
*/

  card1.innerText = "hey whats up";
  card2.innerText = "hi this is renata";
  card3.innerText = "cool";

  mainDiv.appendChild(card1);
  mainDiv.appendChild(card2);
  mainDiv.appendChild(card3);
});

var locations = document.querySelector("#locations");

/* TRYING TO GET INPUT TEXT TO SHOW UP */

function getVal() {
  //create li element
  let li = document.createElement("li");

  //put text incisde the p element
  li.innerText = document.querySelector("input").value;

  //append the li element as a child of the pages body
  locations.appendChild(li);
  document.querySelector("input").value = "";
}
// make global variable that

// Add event listener for entering
document.querySelector("input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getVal();
  }
});

// destination boxes //
//functon//

let myCard = {
  title: "my trip",
  blurb: "fhakjhakfhna",
};

function getTravelCardHTML(card, title) {
  let div = document.createElement("div");
  // let template = '<article>
  //   <span class="span">x</span>
  //   <h2>${card.title}</h2>
  //   <img>${card.img}</img>

  //   </article>';

  dive.innerHTML = template;

  return template;
}
// div.document.body.appendChild(getTravelCardHTML)(myCard);

document.getElementsByClassName(".scrollbar")[0];
