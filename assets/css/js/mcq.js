const questions = [
    {
        text: "1. What is React primarily used for?",
        options: ["A) Server-side scripting", "B) Building mobile applications", "C) Building user interfaces for web applications", "D) Database management"],
        correct: "C"
    },
    {
        text: "2. Which of the following is a valid way to create a functional component in React?",
        options: ["A) function MyComponent() { return <div>Hello</div>; }", "B) class MyComponent extends React.Component { render() { return <div>Hello</div>; } }", "C) const MyComponent = () => { return <div>Hello</div>; }", "D) Both A and C"],
        correct: "D"
    },
    {
        text: "3. What does JSX stand for in React?",
        options: ["A) JavaScript XML", "B) Java Standard XML", "C) JavaScript Extension", "D) JavaScript Extra"],
        correct: "A"
    },
    {
        text: "4. Which hook is used to manage state in a functional component?",
        options: ["A) useEffect", "B) useState", "C) useContext", "D) useReducer"],
        correct: "B"
    },
    {
        text: "5. How do you pass data from a parent component to a child component in React?",
        options: ["A) Using props", "B) Using state", "C) Using context", "D) Using ref"],
        correct: "A"
    },
    {
        text: "6. Which of the following is true about the useEffect hook?",
        options: ["A) It is used to manage local state in a component.", "B) It is used to perform side effects in function components.", "C) It replaces the setState method.", "D) It is only available in class components."],
        correct: "B"
    },
    {
        text: "7. What is the purpose of key in React lists?",
        options: ["A) To identify unique elements in the DOM", "B) To optimize rendering by identifying list items uniquely", "C) To access list items directly", "D) To encrypt list items for security"],
        correct: "B"
    },
    {
        text: "8. How can you handle form data in a React component?",
        options: ["A) Using the state to control form input values", "B) Using props to control form input values", "C) By directly manipulating the DOM with getElementById", "D) By using CSS selectors"],
        correct: "A"
    },
    {
        text: "9. What does the setState method do in a React class component?",
        options: ["A) It synchronously updates the state and re-renders the component.", "B) It asynchronously updates the state and may trigger a re-render.", "C) It directly updates the component’s DOM.", "D) It resets the component's state to its initial value."],
        correct: "B"
    },
    {
        text: "10. What is the purpose of conditional rendering in React?",
        options: ["A) To apply different styles to components", "B) To render components based on certain conditions", "C) To optimize the loading of external scripts", "D) To handle errors in React applications"],
        correct: "B"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('questionText').textContent = currentQuestion.text;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'list-group-item list-group-item-action option-btn';
        button.textContent = option;
        button.onclick = () => checkAnswer(button, option[0]);
        optionsDiv.appendChild(button);
    });

    document.getElementById('feedback').textContent = '';
    document.getElementById('nextBtn').style.display = 'none';
}

function checkAnswer(button, selectedOption) {
    const feedback = document.getElementById('feedback');
    const correctAnswer = questions[currentQuestionIndex].correct;

    if (selectedOption === correctAnswer) {
        button.classList.add('completed');
        feedback.textContent = "🎉 Correct! Well done.";
        feedback.classList.remove('wrong');
        feedback.classList.add('correct');
        disableOptions();
        document.getElementById('nextBtn').style.display = 'block';
    } else {
        feedback.textContent = "❌ Wrong! Please try again.";
        feedback.classList.remove('correct');
        feedback.classList.add('wrong');
    }
}

function disableOptions() {
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(button => button.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('questionText').textContent = "Congratulations! You've completed the All questions.";
        document.getElementById('options').innerHTML = '';
        document.getElementById('nextBtn').style.display = 'none';
    }
}

loadQuestion();
