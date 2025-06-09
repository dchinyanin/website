const form = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;
    const total = 5;
    const formData = new FormData(form);
    for (let value of formData.values()) {
        score += parseInt(value, 10);
    }
    const percent = Math.round((score / total) * 100);
    resultDiv.textContent = `Ваш результат: ${percent}%`;
});
