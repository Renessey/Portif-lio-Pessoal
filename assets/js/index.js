const toggleButtons = document.querySelectorAll('.toggle-button');
const infoContents = document.querySelectorAll('.info-content');

toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        infoContents[index].classList.toggle('open');
        button.textContent = infoContents[index].classList.contains('open') ? 'Fechar' : 'Ver';
    });
});