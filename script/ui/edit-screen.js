import { showPersons, persons, personId } from './main-screen.js';
import { editExistingPerson } from '../data/add-change.js';

const saveEditButton = document.getElementById('save-edit-button');
const cancelEditButton = document.getElementById('cancel-edit-button');

saveEditButton.addEventListener('click', saveEditedPerson);
cancelEditButton.addEventListener('click', cancelEdit);

function saveEditedPerson() {
    const name = document.getElementById("edit-name-input").value.trim();
    const lastname = document.getElementById("edit-lastname-input").value.trim();
    const phone = document.getElementById("edit-phone-input").value.trim();
    const email = document.getElementById("edit-email-input").value.trim();
    const address = document.getElementById("edit-address-input").value.trim();
    const number = document.getElementById("edit-address-num-input").value.trim();

    if (!name || !lastname) {
        alert("Поля 'Имя' и 'Фамилия' обязательны!");
        return;
    }

    const personIndex = persons.findIndex(p => p.login.uuid === personId);
    if (personIndex !== -1) {
        const editedPerson = editExistingPerson(persons[personIndex], {
            name, lastname, phone, email, address, number
        });
        persons[personIndex] = editedPerson;
    }

    closeEditForm();
    showPersons(persons);
    alert("Изменения сохранены!");
}

function cancelEdit() {
    closeEditForm();
}

function closeEditForm() {
    document.getElementById("edit-screen").style.display = 'none';
    document.getElementById("main-screen").style.display = 'flex';
    
    document.getElementById("edit-name-input").value = '';
    document.getElementById("edit-lastname-input").value = '';
    document.getElementById("edit-phone-input").value = '';
    document.getElementById("edit-lastname-input").value = '';
    document.getElementById("edit-lastname-input").value = '';
    document.getElementById("edit-lastname-input").value = '';

}