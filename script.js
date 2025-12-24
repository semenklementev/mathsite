// User stats
let stats = {
    correct: 0,
    wrong: 0,
    total: 0
};

// Update stats display
function updateStats() {
    document.getElementById('correct-answers').textContent = stats.correct;
    document.getElementById('wrong-answers').textContent = stats.wrong;
    document.getElementById('average-score').textContent = stats.total > 0 ? ((stats.correct / stats.total) * 100).toFixed(1) : '0';
}

// Generate random equation
function generateEquation() {
    const operations = ['+', '-', '*', '/'];
    const op = operations[Math.floor(Math.random() * operations.length)];
    let a, b, result;

    switch(op) {
        case '+':
            a = Math.floor(Math.random() * 50) + 1;
            b = Math.floor(Math.random() * 50) + 1;
            result = a + b;
            break;
        case '-':
            a = Math.floor(Math.random() * 50) + 1;
            b = Math.floor(Math.random() * a) + 1;
            result = a - b;
            break;
        case '*':
            a = Math.floor(Math.random() * 12) + 1;
            b = Math.floor(Math.random() * 12) + 1;
            result = a * b;
            break;
        case '/':
            b = Math.floor(Math.random() * 10) + 1;
            result = Math.floor(Math.random() * 10) + 1;
            a = b * result;
            break;
    }

    document.getElementById('equation-problem').textContent = `${a} ${op} ${b} = ?`;
    document.getElementById('equation-answer').dataset.correct = result;
}

// Check equation answer
function checkEquation() {
    const answer = document.getElementById('equation-answer').value.trim();
    const correctAnswer = document.getElementById('equation-answer').dataset.correct;
    
    stats.total++;
    if (parseInt(answer) === parseInt(correctAnswer)) {
        stats.correct++;
        alert('Правильно! 👍');
    } else {
        stats.wrong++;
        alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
    }
    
    updateStats();
    generateEquation();
    document.getElementById('equation-answer').value = '';
}

// Generate math problem
function generateProblem() {
    const problems = [
        { question: "У Пети 5 яблок, а у Маши на 3 больше. Сколько яблок у Маши?", answer: "8" },
        { question: "В классе 25 учеников. 13 из них девочки. Сколько мальчиков в классе?", answer: "12" },
        { question: "Автобус едет со скоростью 60 км/ч. Какое расстояние он проедет за 3 часа?", answer: "180" },
        { question: "Книга стоит 350 рублей. Сколько стоят 4 такие книги?", answer: "1400" },
        { question: "Периметр квадрата 20 см. Какова длина его стороны?", answer: "5" }
    ];
    
    const problem = problems[Math.floor(Math.random() * problems.length)];
    document.getElementById('problem-text').textContent = problem.question;
    document.getElementById('problem-answer').dataset.correct = problem.answer;
}

// Check problem answer
function checkProblem() {
    const answer = document.getElementById('problem-answer').value.trim();
    const correctAnswer = document.getElementById('problem-answer').dataset.correct;
    
    stats.total++;
    if (answer === correctAnswer) {
        stats.correct++;
        alert('Правильно! 👍');
    } else {
        stats.wrong++;
        alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
    }
    
    updateStats();
    generateProblem();
    document.getElementById('problem-answer').value = '';
}

// Generate fraction problem
function generateFraction() {
    const fractions = [
        { question: "Сократите дробь: 4/8", answer: "1/2" },
        { question: "Сложите дроби: 1/4 + 1/2", answer: "3/4" },
        { question: "Вычтите дроби: 3/4 - 1/2", answer: "1/4" },
        { question: "Умножьте дроби: 1/3 * 2/5", answer: "2/15" },
        { question: "Разделите дроби: 3/4 ÷ 2/3", answer: "9/8" }
    ];
    
    const fraction = fractions[Math.floor(Math.random() * fractions.length)];
    document.getElementById('fraction-problem').textContent = fraction.question;
    document.getElementById('fraction-answer').dataset.correct = fraction.answer;
}

// Check fraction answer
function checkFraction() {
    const answer = document.getElementById('fraction-answer').value.trim().toLowerCase();
    const correctAnswer = document.getElementById('fraction-answer').dataset.correct.toLowerCase();
    
    stats.total++;
    if (answer === correctAnswer) {
        stats.correct++;
        alert('Правильно! 👍');
    } else {
        stats.wrong++;
        alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
    }
    
    updateStats();
    generateFraction();
    document.getElementById('fraction-answer').value = '';
}

// Generate polynomial problem
function generatePolynomial() {
    const polynomials = [
        { question: "Упростите: (x + 2)(x + 3)", answer: "x²+5x+6" },
        { question: "Разложите на множители: x² - 4", answer: "(x-2)(x+2)" },
        { question: "Найдите значение при x=2: 3x² - 2x + 1", answer: "9" },
        { question: "Сложите многочлены: (2x² + 3x) + (x² - x)", answer: "3x²+2x" },
        { question: "Умножьте: 2x(3x - 4)", answer: "6x²-8x" }
    ];
    
    const polynomial = polynomials[Math.floor(Math.random() * polynomials.length)];
    document.getElementById('polynomial-problem').textContent = polynomial.question;
    document.getElementById('polynomial-answer').dataset.correct = polynomial.answer;
}

// Check polynomial answer
function checkPolynomial() {
    const answer = document.getElementById('polynomial-answer').value.trim().replace(/\s+/g, '').toLowerCase();
    const correctAnswer = document.getElementById('polynomial-answer').dataset.correct.replace(/\s+/g, '').toLowerCase();
    
    stats.total++;
    if (answer === correctAnswer) {
        stats.correct++;
        alert('Правильно! 👍');
    } else {
        stats.wrong++;
        alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
    }
    
    updateStats();
    generatePolynomial();
    document.getElementById('polynomial-answer').value = '';
}

// Generate geometry problem
function generateGeometry() {
    const geometries = [
        { question: "Найдите площадь квадрата со стороной 5 см.", answer: "25" },
        { question: "Найдите периметр прямоугольника со сторонами 4 см и 7 см.", answer: "22" },
        { question: "Найдите площадь круга с радиусом 3 см (π≈3.14).", answer: "28.26" },
        { question: "Объем куба с ребром 2 м равен...", answer: "8" },
        { question: "Площадь треугольника с основанием 6 см и высотой 4 см равна...", answer: "12" }
    ];
    
    const geometry = geometries[Math.floor(Math.random() * geometries.length)];
    document.getElementById('geometry-problem').textContent = geometry.question;
    document.getElementById('geometry-answer').dataset.correct = geometry.answer;
}

// Check geometry answer
function checkGeometry() {
    const answer = document.getElementById('geometry-answer').value.trim();
    const correctAnswer = document.getElementById('geometry-answer').dataset.correct;
    
    stats.total++;
    if (parseFloat(answer) === parseFloat(correctAnswer)) {
        stats.correct++;
        alert('Правильно! 👍');
    } else {
        stats.wrong++;
        alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
    }
    
    updateStats();
    generateGeometry();
    document.getElementById('geometry-answer').value = '';
}

// Generate history question
function generateHistory() {
    const questions = [
        { question: "В каком году началась Великая Отечественная война?", answer: "1941" },
        { question: "Кто был первым президентом России?", answer: "Ельцин" },
        { question: "Как звали первого царя из династии Романовых?", answer: "Михаил" },
        { question: "В каком году произошла Октябрьская революция?", answer: "1917" },
        { question: "Как называлась первая русская летопись?", answer: "Повесть временных лет" }
    ];
    
    const question = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('history-question').textContent = question.question;
    document.getElementById('history-answer').dataset.correct = question.answer.toLowerCase();
}

// Check history answer
function checkHistory() {
    const answer = document.getElementById('history-answer').value.trim().toLowerCase();
    const correctAnswer = document.getElementById('history-answer').dataset.correct;
    
    stats.total++;
    if (answer === correctAnswer) {
        stats.correct++;
        alert('Правильно! 👍');
    } else {
        stats.wrong++;
        alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
    }
    
    updateStats();
    generateHistory();
    document.getElementById('history-answer').value = '';
}

// Initialize all problems when page loads
window.onload = function() {
    generateEquation();
    generateProblem();
    generateFraction();
    generatePolynomial();
    generateGeometry();
    generateHistory();
    updateStats();
};