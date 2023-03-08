// Отримання кнопки та блоків з допомогою їх ідентифікаторів
const button = document.getElementById('button');
const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const buttonText = document.getElementById("button-text");
const buttonImage = document.getElementById("button-image");

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

// Додаємо обробник події click до кнопки
button.addEventListener("click", function() {
    // Перевіряємо поточний текст кнопки
    if (buttonText.innerHTML === "MORE") {
      // Якщо текст дорівнює "MORE", то змінюємо текст на "LESS" та зображення на стрілку вниз
      buttonText.innerHTML = "LESS";
      buttonImage.setAttribute("src", "./starter-code/assets/desktop/icon-arrow-up.svg");
      buttonImage.style.width = '100%'
    } else {
      // Якщо текст не дорівнює "MORE", то змінюємо текст на "MORE" та зображення на стрілку вгору
      buttonText.innerHTML = "MORE";
      buttonImage.setAttribute("src", "./starter-code/assets/desktop/icon-arrow-down.svg");
      buttonImage.style.width = 'auto'
    }
  });
