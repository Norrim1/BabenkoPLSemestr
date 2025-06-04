import { loadPersons } from '../data/load-person.js';
import { filterAllFields } from '../data/search.js';

let searchInput = document.getElementById('search-input');
let searchButton = document.getElementById('search-button');
let personList = document.getElementById('persons-list');
let toCreationButton = document.getElementById('to-creation-button');

export let persons = [];
export let personId;

toCreationButton.addEventListener('click', () => {
    document.getElementById("main-screen").style.display = 'none';
    document.getElementById("creation-screen").style.display = 'flex';
});

searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') handleSearch();
});

export function showPersons(persons) {
    personList.innerHTML = '';
    persons.forEach(person => {
        const personCard = document.createElement('div');
        personCard.className = 'person-card';
        personCard.innerHTML = `
            <p>Имя: ${person.name.first} Фамилия: ${person.name.last}</p>
            <p>Телефон: ${person.phone}</p>
            <p>Электронная почта: ${person.email}</p>
            <p>Адрес: ${person.location.street.name} ${person.location.street.number}</p>
            <button class="edit-button" data-id="${person.login.uuid}">Редактировать</button>`;
            
            personList.appendChild(personCard);
    });
    setupEditButtons();
}

function setupEditButtons() {
    document.querySelectorAll('.edit-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            personId = e.target.dataset.id;
            const person = persons.find(p => p.login.uuid === personId);
            openEditForm(person);
        });
    });
}

function openEditForm(person) {
    document.getElementById("edit-name-input").value = person.name.first;
    document.getElementById("edit-lastname-input").value = person.name.last;
    document.getElementById("edit-phone-input").value = person.phone;
    document.getElementById("edit-email-input").value = person.email;
    document.getElementById("edit-address-input").value = person.location.street.name;
    document.getElementById("edit-address-num-input").value = person.location.street.number;

    document.getElementById("main-screen").style.display = 'none';
    document.getElementById("edit-screen").style.display = 'flex';
}

function handleSearch() {
    const searchTerm = searchInput.value.trim();
    const filteredUsers = filterAllFields(persons ,searchTerm);
    showPersons(filteredUsers);
}

export async function init()
{
    persons = await loadPersons(10);
    showPersons(persons);
}