export function filterAllFields(users, searchTerm) {
    if (!searchTerm) return users;
    
    return users.filter(user => {
        const userData = `
            ${user.name.first} 
            ${user.name.last} 
            ${user.email} 
            ${user.phone} 
            ${user.location.city} 
            ${user.location.street.name}
        `.toLowerCase();
        
        return userData.includes(searchTerm.toLowerCase());
    });
}