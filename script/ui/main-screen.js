import { loadPersons } from '../data/load-person.js';

export function showPersons(persons) {
    const personList = document.getElementById('persons-list');
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

export async function init()
{
    const persons = await loadPersons(10);
    showPersons(persons);
}

init();