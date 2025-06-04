export function filterAllFields(persons, searchTerm) {
    if (!searchTerm) return persons;
    
    return persons.filter(person => {
        const personData = `
            ${person.name.first} 
            ${person.name.last} 
            ${person.email} 
            ${person.phone} 
            ${person.location.city} 
            ${person.location.street.name}
        `.toLowerCase();
        
        return personData.includes(searchTerm.toLowerCase());
    });
}

export function setupAdvancedSearch(persons, showPersonsCallback) {

    let advancedSearchToggle = document.getElementById('advanced-search-toggle');
    let advancedSearch = document.getElementById('advanced-search');
    let searchCheckboxes = document.querySelectorAll('.search-checkbox');
    let advancedSearchButton = document.getElementById('advanced-search-button');

    advancedSearchToggle.addEventListener('click', () => {
        if (advancedSearch.style.display === 'block') {
            advancedSearch.style.display = 'none';
            advancedSearchToggle.textContent = 'Улучшенный поиск';
        } else {
            advancedSearch.style.display = 'block';
            advancedSearchToggle.textContent = 'Скрыть';
        }
    });

    searchCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const field = this.dataset.field;
            const input = document.getElementById(`search-${field}`);
            input.disabled = !this.checked;
            if (!this.checked) {
                input.value = '';
            }
        });
    });

    advancedSearchButton.addEventListener('click', () => {
        const searchCriteria = {};
        
        document.querySelectorAll('.search-checkbox:checked').forEach(checkbox => {
            const field = checkbox.dataset.field;
            searchCriteria[field] = document.getElementById(`search-${field}`).value.trim().toLowerCase();
        });
        
            
        const filtered = filterPersons(persons, searchCriteria);
        showPersonsCallback(filtered);
    });
}

function filterPersons(persons, criteria) {
    return persons.filter(person => {
        return Object.entries(criteria).every(([field, value]) => {
            if (!value) return true;
            
            switch(field) {
                case 'name': 
                    return person.name.first.toLowerCase().includes(value);
                case 'lastname':
                    return person.name.last.toLowerCase().includes(value);
                case 'phone':
                    return person.phone.toLowerCase().includes(value);
                case 'email':
                    return person.email.toLowerCase().includes(value);
                default:
                    return true;
            }
        });
    });
}