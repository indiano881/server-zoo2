import { allAnimals } from "../data/animals.js";

const mainContent = document.querySelector(".main-content");
const animals = document.querySelectorAll(".animal");
const animalsInHomePage = document.querySelectorAll(".animal-home");
let readLess;
let readMore;

animals.forEach((animal) => {
  animal.addEventListener("click", (event) => {
    const targetAnimal = allAnimals.find((animal) => animal.id == event.target.id);

    mainContent.innerHTML = `
        <div class="card">
          <div class="card-img">
          <img class="animal-img-routes-page" src="${targetAnimal.image}" alt="${
      targetAnimal.species
    }">
          </div>
          <div class="card-body">
            <h3>${targetAnimal.species}</h3>
            <div>
              <p>
              <b>Description: </b><span id="animal-short-description" class="d-inline">${
                targetAnimal.description.length > 200
                  ? targetAnimal.description.slice(0, 200) +
                    `...<span class="read-more" >Read More</span>`
                  : targetAnimal.description
              }</span>
              <span id="animal-long-description" class="d-none" >${
                targetAnimal.description
              } <span class="read-less" >Read Less</span></span>
              </p>
            </div>
            <p><b>Lifespan: </b>${targetAnimal.lifespan}</p>
            <p><b>Group: </b>${targetAnimal.group}</p>
            <p><b>Lenght: </b>${targetAnimal.length}</p>
            <p><b>Weight: </b>${targetAnimal.weight}</p>
            <p><b>Found: </b>${targetAnimal.found}</p>
          </div>
          <div class="card-footer">
            <p>Somethings bla bla bla</p>
          </div>
        </div>
        `;

    readMore = document.querySelector(".read-more");
    readLess = document.querySelector(".read-less");
    getReadMore();
  });
});

animalsInHomePage.forEach((animal) => {
  animal.addEventListener("click", (event) => {
    const targetAnimal = allAnimals.find((animal) => animal.id == event.target.id);

    mainContent.innerHTML = `
        <div class="card">
          <div class="card-img-home">
          <img class="animal-img-home-page" src="${targetAnimal.image}" alt="${
      targetAnimal.species
    }">
          </div>
          <div class="card-body">
            <h3>${targetAnimal.species}</h3>
            <div>
              <p>
              <b>Description: </b><span id="animal-short-description" class="d-inline">${
                targetAnimal.description.length > 200
                  ? targetAnimal.description.slice(0, 200) + "..."
                  : targetAnimal.description
              }</span>
              </p>
            </div>
            <a class="go-routes-link" href="http://localhost:3000/${targetAnimal.group}">Go ${
      targetAnimal.group.charAt(0).toUpperCase() + targetAnimal.group.slice(1)
    } Page</a>
            
          </div>
         
        </div>
        `;

    // readMore = document.querySelector(".read-more");
    // readLess = document.querySelector(".read-less");
    // getReadMore();
  });
});

const getReadMore = () => {
  readMore.addEventListener("click", () => {
    document.getElementById("animal-short-description").classList.remove("d-inline");
    document.getElementById("animal-short-description").classList.add("d-none");
    document.getElementById("animal-long-description").classList.add("d-inline");
    document.getElementById("animal-long-description").classList.add("d-none");
  });
  readLess.addEventListener("click", () => {
    document.getElementById("animal-short-description").classList.remove("d-none");
    document.getElementById("animal-short-description").classList.add("d-inline");
    document.getElementById("animal-long-description").classList.remove("d-inline");
    document.getElementById("animal-long-description").classList.add("d-none");
  });
};
