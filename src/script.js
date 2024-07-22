document.getElementById('check-btn').addEventListener('click', function () {
    const userInput = document.getElementById('text-input').value;

    if (!userInput) {
        alert('Please input a value');
        return;
    }

    const cleanedInput = userInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');

    const resultElement = document.getElementById('result');
    if (cleanedInput === reversedInput) {
        resultElement.textContent = `${userInput} is a palindrome`;
    } else {
        resultElement.textContent = `${userInput} is not a palindrome`;
    }
});
