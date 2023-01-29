let destinations;
let currentDest;

let tabMoon = document.getElementById("moon");
let tabMars = document.getElementById("mars");
let tabEuropa = document.getElementById("europa");
let tabTitan = document.getElementById("titan");
let tabContainer = document.querySelector(".app .app__info ul");

const fetchData = async () => {
    try{
        const res = await fetch('../Data/data.json');
        const data = await res.json();
        destinations = data.destinations;

        paintInfo(0);
    }
    catch(error){
        console.log(`No se pudo cargar el destino: ${error}`);
    }
};

const paintInfo = (id) => {
    currentDest = destinations[id];
    document
    .querySelector(".app .app__image img")
    .setAttribute("src", currentDest.images.svg);
    document
    .querySelector(".app .app__image img")
    .setAttribute("alt", currentDest.name);
    document.querySelector(".app .app__info h2").innerHTML = currentDest.name.toUpperCase();
    document.querySelector(".app .app__info .description").innerHTML = currentDest.description;
    document.querySelector(".app .app__info .metrics .metrics__distance h3").innerHTML = currentDest.distance.toUpperCase();
    document.querySelector(".app .app__info .metrics .metrics__time h3").innerHTML = currentDest.travel.toUpperCase();
}

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
  });

  tabMoon.addEventListener("click", function(){
    tabContainer.getElementsByClassName("activeDest")[0].classList.remove("activeDest");
    tabMoon.classList.add("activeDest");
    paintInfo(0);
  });
  tabMars.addEventListener("click", function(){
    tabContainer.getElementsByClassName("activeDest")[0].classList.remove("activeDest");
    tabMars.classList.add("activeDest");
    paintInfo(1);
  });
  tabEuropa.addEventListener("click", function(){
    tabContainer.getElementsByClassName("activeDest")[0].classList.remove("activeDest");
    tabEuropa.classList.add("activeDest");
    paintInfo(2);
  });
  tabTitan.addEventListener("click", function(){
    tabContainer.getElementsByClassName("activeDest")[0].classList.remove("activeDest");
    tabTitan.classList.add("activeDest");
    paintInfo(3);
  });
