let backButton = document.getElementById('back-button');
backButton.addEventListener('click', () => {
    document.getElementById("main-screen").style.display = 'flex';
    document.getElementById("creation-screen").style.display = 'none';
});