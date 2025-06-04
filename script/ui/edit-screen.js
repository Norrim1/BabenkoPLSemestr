import { showPersons, persons, personId } from './main-screen.js';
import { editExistingPerson } from '../data/add-change.js';
import { validName, validEmail, validPhone } from './input-checks.js';

const saveEditButton = document.getElementById('save-edit-button');
const cancelEditButton = document.getElementById('cancel-edit-button');

saveEditButton.addEventListener('click', saveEditedPerson);
cancelEditButton.addEventListener('click', closeEditForm);
document.getElementById("edit-phone-input").addEventListener('input', validPhone);

function saveEditedPerson() {
    const name = document.getElementById("edit-name-input").value.trim();
    const lastname = document.getElementById("edit-lastname-input").value.trim();
    const phone = document.getElementById("edit-phone-input").value.trim();
    const email = document.getElementById("edit-email-input").value.trim();
    const address = document.getElementById("edit-address-input").value.trim();
    const number = document.getElementById("edit-address-num-input").value.trim();

    if (!name || !validName(name)) {
        alert("Имя не должно содержать цифр, пробелов или специальных символов.");
        return;
    }

    if (!lastname || !validName(lastname)) {
        alert("Фамилия не должна содержать цифр, пробелов или специальных символов.");
        return;
    }

    if (!email || !validEmail(email)) {
        alert("Имя не должно содержать цифр, пробелов или специальных символов.");
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