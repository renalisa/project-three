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
  blurb: "fhakjhakfhna"
}

function getTravelCardHTML(card, title){
  let dive = document.createElement("div");
let template = '<article>
  <h2>${card.title}</h2>

  </article>';

  dive.innerHTML = template; 

return template;

}
document.body.appendChild(getTravelCardHTML)(myCard)