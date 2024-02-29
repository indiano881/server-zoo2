import {
  allAnimals,
  mammalsWelcomeMess,
  birdsWelcomeMess,
  reptilesWelcomeMess,
} from "../data/animals.js";

const mainContent = document.querySelector(".main-content");
const animals = document.querySelectorAll(".animal");
const animalsInHomePage = document.querySelectorAll(".animal-home");
let readLess;
let readMore;

// animals.forEach((animal) => {
//   animal.addEventListener("click", (event) => {
//     const targetAnimal = allAnimals.find((animal) => animal.id == event.target.id);

//     mainContent.innerHTML = `
//         <div class="card">
//           <div class="card-img">
//           <img class="animal-img-routes-page" src="${targetAnimal.image}" alt="${
//       targetAnimal.species
//     }">
//           </div>
//           <div class="card-body">
//             <h3>${targetAnimal.species}</h3>
//             <div>
//               <p>
//               <b>Description </b>: <span id="animal-short-description" class="d-inline">${
//                 targetAnimal.description.length > 200
//                   ? targetAnimal.description.slice(0, 200) +
//                     `...<span class="read-more" >Read More</span>`
//                   : targetAnimal.description
//               }</span>
//               <span id="animal-long-description" class="d-none" >${
//                 targetAnimal.description
//               } <span class="read-less" >Read Less</span></span>
//               </p>
//             </div>
//             <p><b>Lifespan </b>: ${targetAnimal.lifespan}</p>
//             <p><b>Food </b>: ${targetAnimal.food}</p>
//             <p><b>Group </b>: ${targetAnimal.group}</p>
//             <p><b>Lenght </b>: ${targetAnimal.length}</p>
//             <p><b>Weight </b>: ${targetAnimal.weight}</p>
//             <p><b>Found </b>: ${targetAnimal.found}</p>
//           </div>
//           <div class="card-footer">
//             <button class="read-more-btn inverted-5"><a href="/animaldetails?animal=${
//               targetAnimal.species
//             }">Learn more</a></button>
//           </div>
//         </div>
//         `;

//     readMore = document.querySelector(".read-more");
//     readLess = document.querySelector(".read-less");
//     getReadMore();
//   });
// });

animals.forEach((animal) => {
  animal.addEventListener("click", (event) => {
    const targetAnimal = allAnimals.find((animal) => animal.id == event.target.id);

    // Toggle the isActive property of the clicked animal
    targetAnimal.isActive = !targetAnimal.isActive;

    // Set isActive property of other animals to false
    allAnimals.forEach((animal) => {
      if (animal !== targetAnimal) {
        animal.isActive = false;
      }
    });

    if (targetAnimal.isActive) {
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
                <b>Description </b>: <span id="animal-short-description" class="d-inline">${
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
              <p><b>Lifespan </b>: ${targetAnimal.lifespan}</p>
              <p><b>Food </b>: ${targetAnimal.food}</p>
              <p><b>Group </b>: ${targetAnimal.group}</p>
              <p><b>Lenght </b>: ${targetAnimal.length}</p>
              <p><b>Weight </b>: ${targetAnimal.weight}</p>
              <p><b>Found </b>: ${targetAnimal.found}</p>
            </div>
            <div class="card-footer">
              <button class="read-more-btn inverted-5"><a href="/animaldetails?animal=${
                targetAnimal.species
              }">Learn more</a></button>
            </div>
          </div>
          `;
      readMore = document.querySelector(".read-more");
      readLess = document.querySelector(".read-less");
      getReadMore();

      console.log(event.target);
    } else {
      if (targetAnimal.group === "reptiles") {
        mainContent.innerHTML = `
        <p class="reptiles-message">${reptilesWelcomeMess}</p>
        `;
      } else if (targetAnimal.group === "mammals") {
        mainContent.innerHTML = `
        <p class="mammals-message">${mammalsWelcomeMess}</p>
        `;
      } else if (targetAnimal.group === "birds") {
        mainContent.innerHTML = `
        <p class="birds-message">${birdsWelcomeMess}</p>
        `;
      }
    }
  });
});

animalsInHomePage.forEach((animal) => {
  animal.addEventListener("click", (event) => {
    const targetAnimal = allAnimals.find((animal) => animal.id == event.target.id);

    // Toggle the isActive property of the clicked animal
    targetAnimal.isActive = !targetAnimal.isActive;

    // Set isActive property of other animals to false
    allAnimals.forEach((animal) => {
      if (animal !== targetAnimal) {
        animal.isActive = false;
      }
    });

    if (targetAnimal.isActive) {
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
                <b>Description </b>: <span id="animal-short-description" class="d-inline">${
                  targetAnimal.description.length > 200
                    ? targetAnimal.description.slice(0, 200) + "..."
                    : targetAnimal.description
                }</span>
                </p>
                <p><b>Food: </b> ${targetAnimal.food}</p>
                <button class="read-more-btn-home inverted-5"><a href="/animaldetails?animal=${
                  targetAnimal.species
                }">Learn more</a></button>
              </div>
              <a class="go-routes-link inverted-5 " href="http://localhost:3000/${
                targetAnimal.group
              }">Go ${
        targetAnimal.group.charAt(0).toUpperCase() + targetAnimal.group.slice(1)
      } Page</a>
              
            </div>
           
          </div>
          `;
    } else {
      mainContent.innerHTML = `
      <h3>Welcome to The Fantastic Zoo!</h3>
        <div class="welcome-message">
          Immerse yourself in a world where the extraordinary becomes ordinary. Encounter creatures
          beyond your wildest imagination, from mythical beasts to real-life wonders. Marvel at the
          majestic flight of mythical dragons, the graceful dance of unicorns, and the playful
          antics of griffins. Explore habitats ranging from enchanted forests to mystical mountains,
          each teeming with life. Our zoo offers a journey through the realms of fantasy and
          reality, where every corner holds a new surprise. Join us for an unforgettable adventure
          into the realms of the fantastic, where imagination knows no bounds. Step into "The
          Fantastic Zoo" and let your imagination soar!
        </div>
      `;
    }
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

const params = new URLSearchParams(window.location.search);
const animal = params.get("animal");

allAnimals.forEach((targetAnimal) => {
  if (targetAnimal.species === animal) {
    console.log(targetAnimal);
    mainContent.innerHTML = `
    <button class="back-btn inverted-5" onclick="history.back()">Go Back</button>
    <div class="animal-details">
      <img class="animal-details-img" src="${targetAnimal.image}">
      <h2>${targetAnimal.species}</h2>
      <p><b>Lifespan </b>: ${targetAnimal.lifespan}</p>
      <p><b>Food </b>: ${targetAnimal.food}</p>
      <p><b>Group </b>: ${targetAnimal.group}</p>
      <p><b>Lenght </b>: ${targetAnimal.length}</p>
      <p><b>Weight </b>: ${targetAnimal.weight}</p>
      <p><b>Found </b>: ${targetAnimal.found}</p>
      <p class="long-description">${targetAnimal.longDescription}</p>
    </div>
    `;
  }
});
