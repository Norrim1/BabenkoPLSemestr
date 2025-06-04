export async function loadPersons(count) {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${count}`);
        if (!response.ok) throw new Error('Ошибка загрузки данных');
        let personsData = await response.json();
        return personsData.results;
    } catch (error) {
        console.error(error);
        return [];
    }
}