const container = document.querySelector("section");
const template = document.querySelector("template").content;
const url = "./actors.json";

/* Hero section */
let hero = document.createElement("img");
hero.src = "actor_banner.svg";
let block = document.getElementById("hero_section");
block.appendChild(hero);

/* fetching the data from the json file */
async function getData() {
  const resspons = await fetch(url);
  const json = await resspons.json();

  data = json;

  show(data);
}

/* The data being showed in our template */
function show(data) {
  container.textContent = "";

  data.forEach((actor) => {
    const clone = template.cloneNode(true);
    clone.querySelector("h2").textContent = actor.fullname;
    clone.querySelector("h3").textContent = actor.movie;
    clone.querySelector("article").addEventListener("click", () => showDetails(actor));
    container.appendChild(clone);
  });
}

/* Pop up window */
function showDetails(actor) {
  console.log(actor);
  popUp.style.display = "block";
  popUp.querySelector("h2").textContent = actor.fullname;
  popUp.querySelector("h3").textContent = actor.movie;

  document.querySelector("#close_button").addEventListener("click", () => (popUp.style.display = "none"));
}
getData();
