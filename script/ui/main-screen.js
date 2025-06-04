import { loadPersons } from '../data/load-person.js';
import { filterAllFields } from '../data/search.js';

let searchInput = document.getElementById('search-input');
let searchButton = document.getElementById('search-button');
let personList = document.getElementById('persons-list');
let toCreationButton = document.getElementById('to-creation-button');

let persons = [];

toCreationButton.addEventListener('click', () => {
    document.getElementById("main-screen").style.display = 'none';
    document.getElementById("creation-screen").style.display = 'flex';
});

searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') handleSearch();
});

function showPersons(persons) {
    personList.innerHTML = '';
    persons.forEach(person => {
        const personCard = document.createElement('div');
        personCard.className = 'person-card';
        personCard.innerHTML = `
            <p>Имя: ${person.name.first} Фамилия: ${person.name.last}</p>
            <p>Телефон: ${person.phone}</p>
            <p>Электронная почта: ${person.email}</p>
            <p>Адрес: ${person.location.street.name} ${person.location.street.number}</p>`;
            personList.appendChild(personCard);
    });
}

function handleSearch() {
    const searchTerm = searchInput.value.trim();
    const filteredUsers = filterAllFields(persons ,searchTerm);
    showPersons(filteredUsers);
}

async function init()
{
    persons = await loadPersons(10);
    showPersons(persons);
}

init();