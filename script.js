const questions = [
    {
        question: "Kenapa senyummu selalu membuat hari-hari lebih cerah?",
        romanticAnswer: "Karena senyummu adalah sinar matahari di hari hujan dalam hidupku."
    },
    {
        question: "Apa yang membuat kamu spesial?",
        romanticAnswer: "Kamu adalah seseorang yang selalu membawa kebahagiaan ke dalam hidupku."
    },
    {
        question: "Mengapa aku selalu memikirkanmu?",
        romanticAnswer: "Karena kamu selalu ada di dalam hati dan pikiranku setiap saat."
    },
    {
        question: "Apa yang membuat kamu begitu istimewa?",
        romanticAnswer: "Kamu begitu istimewa karena kebaikan hatimu yang luar biasa."
    },
    {
        question: "Kenapa aku merasa nyaman berbicara denganmu?",
        romanticAnswer: "Karena hanya denganmu, aku merasa bisa menjadi diriku sendiri tanpa rasa takut."
    },
    {
        question: "Apa yang paling kamu sukai tentang dirimu?",
        romanticAnswer: "Aku suka segalanya tentangmu, tapi senyummu adalah yang terbaik."
    },
    {
        question: "Apa yang membuatmu begitu berharga?",
        romanticAnswer: "Kamu adalah harta terindah dalam hidupku, tidak tergantikan."
    },
    {
        question: "Kenapa aku selalu bahagia saat bersamamu?",
        romanticAnswer: "Karena setiap momen bersamamu adalah kebahagiaan yang tak ternilai."
    },
    {
        question: "Apa yang membuat hariku lebih baik?",
        romanticAnswer: "Hanya dengan memikirkanmu, hariku sudah menjadi lebih baik."
    },
    {
        question: "Kenapa aku selalu menantikan pesanmu?",
        romanticAnswer: "Karena setiap pesan darimu adalah kebahagiaan yang selalu aku nantikan."
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
