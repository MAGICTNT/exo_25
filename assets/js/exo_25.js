
import { Dog } from './dog.js'; 

const dogs = []; 
const form = document.getElementById("mon-form");
const selectDog = document.getElementById("dog-select");
const selectOutput = document.getElementById("selectOutput");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const name = document.getElementById("dog-name").value;
    const breed = document.getElementById("dog-breed").value;
    const age = document.getElementById("dog-age").value;

    const newDog = new Dog(name, breed, age);
    dogs.push(newDog);

    updateDogSelect();

    form.reset();
});

function updateDogSelect() {
    selectDog.innerHTML = '<option value="0">Sélectionnez un chien</option>' + 
        dogs.map((dog, index) => `<option value="${index}">${dog.name}</option>`).join('');
}

selectDog.addEventListener("change", () => {
    const selectedIndex = selectDog.value;
    const details = selectedIndex > 0 ? getDogDetails(selectedIndex) : 'Aucun chien sélectionné.';
    selectOutput.innerHTML = details;
});

function getDogDetails(index) {
    const dog = dogs[index];
    return dog.getDescription(); 
}
