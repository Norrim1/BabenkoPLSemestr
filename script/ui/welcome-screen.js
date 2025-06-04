import { init } from '../ui/main-screen.js';

let nextButton = document.getElementById("next-button");
let nameInput = document.getElementById("welcome-name-input");

nameInput.addEventListener('input', checkName);
nameInput.addEventListener('change', checkName);

nextButton.disabled = true;

function validName(name) {
    const regex = /^[a-zA-Zа-яА-ЯёЁ]+$/;
    return regex.test(name);
}

function checkName() {
    let nameFilledCorrectly = true;
    if (nameInput.value.trim() === '') { 
        nameFilledCorrectly = false; 
    } 
    nextButton.disabled = !nameFilledCorrectly;
}

nextButton.addEventListener('click', () => {
    if (!validName(nameInput.value)) {
        alert('Имя не должно содержать цифр, пробелов или специальных символов.');
        return;
    }
    document.getElementById("main-screen-title").textContent = `Привет, ${nameInput.value}!`;
    document.getElementById("welcome-screen").style.display = 'none';
    document.getElementById("main-screen").style.display = 'flex';
    init();
});