export function validName(name) {
    const regex = /^[a-zA-Zа-яА-ЯёЁ]+$/;
    return regex.test(name);
}

export function validEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export function validPhone() 
{
    let phone = this.value.replace(/\D/g, '');
    let formattedPhone = '';
    
    if (phone.length > 0) {
        formattedPhone = '+' + phone.substring(0, 1);
    if (phone.length > 1) {
        formattedPhone += '(' + phone.substring(1, 4);
    }
    if (phone.length > 4) {
        formattedPhone += ')' + phone.substring(4, 7);
    }
    if (phone.length > 7) {
        formattedPhone += '-' + phone.substring(7, 9);
    }
    if (phone.length > 9) {
        formattedPhone += '-' + phone.substring(9, 11);
    }
}
    
    this.value = formattedPhone;
};