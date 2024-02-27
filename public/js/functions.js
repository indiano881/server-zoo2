import { allAnimals } from "../data/animals.js";

const mainContent = document.querySelector(".main-content");
const animals = document.querySelectorAll(".animal");

console.log("hello");
animals.forEach((animal) => {
  animal.addEventListener("click", (event) => {
    const targetAnimal = allAnimals.find((animal) => animal.id == event.target.id);

    mainContent.innerHTML = `
        <div class="card">
          <div class="card-img">
          <img src="${targetAnimal.image}" alt="${targetAnimal.species}">
          </div>
          <div class="card-body">
            <h3>${targetAnimal.species}</h3>
            <p>
            <b>Description: </b>${targetAnimal.description}
            </p>
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
  });
});
// const getAnimal = (pId) => {
//   const targetAnimal = allAnimals.find((animal) => animal.id == pId);
//   mainContent.innerHTML = `
//     <div class="card">
//           <div class="card-img">
//           <img src="${targetAnimal.image}" alt="${targetAnimal.name}">
//           </div>
//           <div class="card-body">
//             <h3>${targetAnimal.name}</h3>
//             <p>
//             <b>Description: </b>${targetAnimal.description}
//             </p>
//             <p><b>Lifespan: </b>${targetAnimal.lifespan}</p>
//             <p><b>Group: </b>${targetAnimal.group}</p>
//             <p><b>Lenght: </b>${targetAnimal.length}</p>
//             <p><b>Weight: </b>${targetAnimal.weight}</p>
//             <p><b>Found: </b>${targetAnimal.found}</p>
//           </div>
//           <div class="card-footer">
//             <p>Somethings bla bla bla</p>
//           </div>
//         </div>
//         `;
// };
