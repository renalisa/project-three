window.addEventListener("load", () => {
  let arr = [];

  let select = document.querySelector("select");
  select.addEventListener("change", function () {
    console.log(select.value);

    renderCards(filterRegions(arr, select.value));
  });

  getData();

  function renderCards(cards) {
    document.querySelector(".scrollbar").innerHTML = "";
    cards.forEach((card) => {
      document.querySelector(".scrollbar").appendChild(getTravelCardHTML(card));
    });
  }

  // GET API DATA
  async function getData() {
    const response = await fetch("./js/main.json");
    const data = await response.json();
    arr = data;
    renderCards(data);
  }

  function filterRegions(regions, term) {
    if (term === "Any") return regions;
    return regions.filter((i) => i.continent === term);
  }

  var locations = document.querySelector("#locations");

  function getVal() {
    //create li element
    let li = document.createElement("li");

    //put text incisde the p element
    li.innerText = document.querySelector("input").value;

    //append the li element as a child of the pages body
    locations.appendChild(li);
    document.querySelector("input").value = "";
  }

  document.querySelector("input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      getVal();
    }
  });

  let myCard = {
    title: "my trip",
    blurb: "fhakjhakfhna",
  };

  function getTravelCardHTML(card) {
    let div = document.createElement("div");
    let template = `<div>
   
  <h3>${card.destination}</h3>
  <p>${card.city}</p>
  <p>${card.country}</p>
  <p>${card.continent}</p>
  <p>${card.space}</p>
      
    </div>`;

    div.innerHTML = template;

    return div;
  }
});
