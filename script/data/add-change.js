export function createNewPerson(name, lastname, phone, email, address, number) {
    return {
        name: {
            first: name,
            last: lastname
        },
        phone: phone,
        email: email,
        location: {
            street: {
                name: address,
                number: number,
            }
        }
    };
}

export function editExistingPerson(person, newData) {
    return {
        ...person,
        name: {
            first: newData.name || person.name.first,
            last: newData.lastname || person.name.last
        },
        phone: newData.phone || person.phone,
        email: newData.email || person.email,
        location: {
            street: {
                name: newData.address || person.location.street.name,
                number: newData.number || person.location.street.number
            },
            city: person.location.city || ''
        }
    };
}