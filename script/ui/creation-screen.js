import { showPersons, persons } from '../ui/main-screen.js';
import { createNewPerson} from '../data/add-change.js';

let backButton = document.getElementById('back-button');
let creationButton = document.getElementById('creation-button');

creationButton.addEventListener('click', createPerson);

backButton.addEventListener('click', () => {
    document.getElementById("main-screen").style.display = 'flex';
    document.getElementById("creation-screen").style.display = 'none';
});

function createPerson() {
    let name = document.getElementById("creation-name-input").value.trim();
    let lastname = document.getElementById("creation-lastname-input").value.trim();
    let phone = document.getElementById("creation-phone-input").value.trim();
    let email = document.getElementById("creation-email-input").value.trim();
    let address = document.getElementById("creation-address-input").value.trim();
    let number = document.getElementById("creation-address-num-input").value.trim();
    if (!name || !lastname) {
        alert("Поля 'Имя' и 'Фамилия' обязательны для заполнения!");
        return;
    }

    let newPerson = createNewPerson(name, lastname, phone, email, address, number);
    persons.push(newPerson);

    alert("Создана новая запись");

    document.getElementById("creation-name-input").value = '';
    document.getElementById("creation-lastname-input").value = '';
    document.getElementById("creation-phone-input").value = '';
    document.getElementById("creation-email-input").value = '';
    document.getElementById("creation-address-input").value = '';
    document.getElementById("creation-address-num-input").value = '';
    
    document.getElementById("creation-screen").style.display = 'none';
    document.getElementById("main-screen").style.display = 'flex';
    showPersons(persons);
};