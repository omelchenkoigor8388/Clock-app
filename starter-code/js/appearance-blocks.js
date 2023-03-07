// Отримання кнопки та блоків з допомогою їх ідентифікаторів
const button = document.getElementById('button');
const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');

// Додавання обробника події "click" на кнопку
button.addEventListener('click', function() {
    // Перевірка, чи містить блок2 клас "visible"
    if (block2.classList.contains('visible')) {
        // Якщо так, то змінюємо висоту першого блоку на 100% та видаляємо клас "visible" у блоку 2
        block1.style.height = '100vh';
        block2.classList.remove('visible');
    } else {
        // Якщо блок2 не містить клас "visible", то змінюємо висоту першого блоку на 50% та додаємо клас "visible" у блок2
        block1.style.height = '50vh';
        block2.classList.add('visible');
    }
});
