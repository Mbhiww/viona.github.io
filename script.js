const questions = [
    {
        question: "Kenapa senyummu selalu membuat hari-hari lebih cerah?",
        romanticAnswer: "Karena senyummu adalah sinar matahari di hari hujan dalam hidupku."
    },
    {
        question: "Apa yang membuat kamu senang setiap kali kita bertemu?",
        romanticAnswer: "Setiap kali kita bertemu, hatiku berdegup lebih kencang karena kehadiranmu."
    },
    {
        question: "Mengapa aku selalu memikirkan kamu?",
        romanticAnswer: "Kamu adalah satu-satunya yang selalu ada di setiap pikiranku, bahkan di saat sunyi."
    },
    {
        question: "Apa yang membuat kamu begitu istimewa?",
        romanticAnswer: "Kamu begitu istimewa bagiku karena kamu adalah malaikat yang turun untuk membuat hidupku lebih indah."
    },
    {
        question: "Kenapa aku merasa nyaman bercerita padamu?",
        romanticAnswer: "Karena hanya denganmu, aku merasa bisa menjadi diriku yang sebenarnya tanpa ada rasa takut."
    }
];

let currentQuestionIndex = -1; // Index pertanyaan yang sedang ditampilkan

function showQuestion() {
    // Memilih pertanyaan secara acak
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[currentQuestionIndex];

    const questionElement = document.getElementById('question');
    const questionSection = document.getElementById('questionSection');
    const questionBtn = document.getElementById('questionBtn');
    const answerBtn = document.getElementById('answerBtn');
    const nextBtn = document.getElementById('nextBtn');
    const responseElement = document.getElementById('response');

    questionElement.innerText = selectedQuestion.question;
    responseElement.innerText = "";

    questionSection.style.display = 'block'; // Menampilkan bagian pertanyaan
    questionBtn.style.display = 'none'; // Menyembunyikan tombol "See the question"
    answerBtn.style.display = 'inline-block'; // Menampilkan tombol "See answer"
    nextBtn.style.display = 'none'; // Menyembunyikan tombol "See next question"
    responseElement.style.display = 'none'; // Menyembunyikan jawaban
}

function showAnswer() {
    const selectedQuestion = questions[currentQuestionIndex];
    const romanticAnswer = selectedQuestion.romanticAnswer;

    const responseElement = document.getElementById('response');
    const answerBtn = document.getElementById('answerBtn');
    const nextBtn = document.getElementById('nextBtn');

    responseElement.innerText = romanticAnswer;
    responseElement.style.display = 'block';

    answerBtn.style.display = 'none'; // Menyembunyikan tombol "See answer"
    nextBtn.style.display = 'inline-block'; // Menampilkan tombol "See next question"
}

function showNextQuestion() {
    showQuestion(); // Memanggil fungsi showQuestion untuk menampilkan pertanyaan berikutnya
}
