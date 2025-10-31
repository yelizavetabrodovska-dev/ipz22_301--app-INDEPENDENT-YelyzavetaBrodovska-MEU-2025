const buttons = document.querySelectorAll('.lab-btn');
const output = document.getElementById('output');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Знімаємо активний стан з усіх кнопок
    buttons.forEach(b => b.classList.remove('active'));

    // Додаємо активний стан вибраній кнопці
    btn.classList.add('active');

    // Змінюємо контент
    output.innerHTML = `
      <h3>${btn.innerText}</h3>
      <p>Тут можна вставити опис, код або результати цієї лабораторної роботи.</p>
    `;
  });
});
