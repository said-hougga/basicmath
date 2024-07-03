document.addEventListener('DOMContentLoaded', () => {
    const questionDiv = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const submitButton = document.getElementById('submit');
    const resultDiv = document.getElementById('result');
    const nextButton = document.getElementById('next');

    let currentQuestion = {};

    const generateQuestion = () => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operations = ['+', '-', '*', '/'];
        const operation = operations[Math.floor(Math.random() * operations.length)];

        let questionText = '';
        let correctAnswer = 0;

        switch (operation) {
            case '+':
                questionText = `${num1} + ${num2}`;
                correctAnswer = num1 + num2;
                break;
            case '-':
                questionText = `${num1} - ${num2}`;
                correctAnswer = num1 - num2;
                break;
            case '*':
                questionText = `${num1} * ${num2}`;
                correctAnswer = num1 * num2;
                break;
            case '/':
                questionText = `${num1} / ${num2}`;
                correctAnswer = (num1 / num2).toFixed(2); // round to 2 decimal places
                break;
        }

        return {
            questionText,
            correctAnswer: correctAnswer.toString()
        };
    };

    const showQuestion = () => {
        currentQuestion = generateQuestion();
        questionDiv.textContent = currentQuestion.questionText;
        answerInput.value = '';
        resultDiv.textContent = '';
    };

    submitButton.addEventListener('click', () => {
        const userAnswer = answerInput.value.trim();
        if (userAnswer === currentQuestion.correctAnswer) {
            resultDiv.textContent = 'Correct!';
            resultDiv.style.color = 'green';
        } else {
            resultDiv.textContent = `Incorrect. The correct answer is ${currentQuestion.correctAnswer}.`;
            resultDiv.style.color = 'red';
        }
    });

    nextButton.addEventListener('click', showQuestion);

    showQuestion();
});
