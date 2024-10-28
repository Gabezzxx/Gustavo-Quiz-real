function calculateScore() {
    let score = 0;
    const totalQuestions = 10;

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('input[name="q6"]:checked');
    const q7 = document.querySelector('input[name="q7"]:checked');
    const q8 = document.querySelector('input[name="q8"]:checked');
    const q9 = document.querySelector('input[name="q9"]:checked');
    const q10 = document.querySelector('input[name="q10"]:checked');

    if (q1 && q1.value == "1") score++;
    if (q2 && q2.value == "1") score++;
    if (q3 && q3.value == "1") score++;
    if (q4 && q4.value == "1") score++;
    if (q5 && q5.value == "1") score++;
    if (q6 && q6.value == "1") score++;
    if (q7 && q7.value == "1") score++;
    if (q8 && q8.value == "1") score++;
    if (q9 && q9.value == "1") score++;
    if (q10 && q10.value == "1") score++;

    const result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de ${totalQuestions} perguntas!`;

    if (score === totalQuestions) {
        result.innerHTML += "<br><strong>Parabéns! Você é um expert no futebol!!</strong>";
    }
}
