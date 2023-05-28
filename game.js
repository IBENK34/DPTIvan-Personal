const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "Berikut ini yang termasuk dari konsep dasar dari fondasi ialah",
        choice1: "Tanah dikatakan stabil apabila tanah tersebut tidak mengalami perubahan dalam musim kemarau maupun musim penghujan",
        choice2: "Tanah dikelompokkan menjadi tanah stabil dan tidak stabil",
        choice3: "Semua jawaban benar",
        choice4: "Tanah tidak stabil, bila terjadi perubahan yang sangat besar atau mencolok antara musim panas dan musim penghujan",
        answer: 3,
    }, {
        question: "Yang dimaksud dengan definisi pondasi dangkal ialah",
        choice1: "pondasi dangkal merupakan pondasi dengan kedalaman maksimum 4 meter",
        choice2: "pondasi dangkal merupakan pondasi dengan kedalaman maksimum 5 meterr",
        choice3: "pondasi dangkal merupakan pondasi dengan kedalaman maksimum 6 meter",
        choice4: "pondasi dangkal merupakan pondasi dengan kedalaman maksimum 3 meter",
        answer: 4,
    }, {
        question: "Fondasi dangkal dapat dibedakan menjadi beberapa jenis, antara lain",
        choice1: "Fondasi setempat",
        choice2: "Jawaban A dan C benar",
        choice3: "Fondasi Pelat",
        choice4: "Fondasi Tiang",
        answer: 2,
    }, {
        question: "Hal Pokok apa saja yang harus ditinjau untuk sebuah fondasi bangunan",
        choice1: "Penyelidikan tanah yang dilakukan",
        choice2: "Penurunan fondasi",
        choice3: "Penurunan konsolidasi",
        choice4: "Penurunan septic tank",
        answer: 4,
    }, {
        question: "Aspek apa saja yang memungkinkan penilaian penyelidikan tanah terhadap informasi yang diperoleh ",
        choice1: "Keamanan sehubungan dengan Kondisi Batas (misalnya penurunan, penggelembungan tanah, terangkat, pergeseran massa tanah dengan batuan, dan tekuknya tiang pancang)",
        choice2: "Urutan pekerjaan Finishing",
        choice3: "Pengaruh dari bangunan serta penggunaannya terhadap pemerintah",
        choice4: "Jenis dan tingkat kontaminasi polusi udara pada, dan di sekitar, lokasi pembangunan",
        answer: 1,
    },{
        question: "Berikut yang bukan termasuk dari jenis konstruksi pondasi dalam",
        choice1: "Pondasi tiang",
        choice2: "Pondasi sumuran",
        choice3: "Pondasi strauss",
        choice4: "Cakar ayam",
        answer: 4,
    }, {
        question: "Fungsi dari pondasi dalam ialah sebagai berikut ",
        choice1: "Transfer beban struktur atas",
        choice2: "Semua Jawaban benar",
        choice3: "Menahan gaya tarik, lateral, dan kombinasi di pile cap",
        choice4: "Menahan gaya untuk struktur tunggal dan beban menerus",
        answer: 2,
    }, {
        question: "Tiang pancang jenis ini biasanya digunakan sebagai penyangga rumah-rumah panggung seperti di Kalimantan dan Sumatera. Selain itu, tiang Pancang ini juga biasa digunakan untuk rumah-rumah nelayan yang berada di pesisir laut atau sungai. Jenis Tiang Pancang apakah aku",
        choice1: "Tiang Pancang Baja (Steel Pile)",
        choice2: "Tiang Pancang Kayu (Timber Pile)",
        choice3: "Tiang Pancang Beton (Concrete Pile)",
        choice4: "Tiang Pancang Plastik (Plastic Pile)",
        answer: 2,
    }, {
        question: "Pengeboran bored pile menggunakan metode basah disebut",
        choice1: "a.Arid drilling",
        choice2: "b.Wet drilling",
        choice3: "c.Dry drilling",
        choice4: "d.Muddy drilling",
        answer: 2,
    }, {
        question: "Material apa saja yang tidak digunakan pada pembuatan tiang pancang",
        choice1: "Plastic",
        choice2: "Timber",
        choice3: "Steel",
        choice4: "Concrete",
        answer: 1,
    }, {
        question: "Dalam penyelidikan Tanah untuk Konstruksi Fondasi Dalam salah satunya yaitu uji laboratorium, yang termasuk kedalam uji laboratorium ialah",
        choice1: "engeboran dan SPT (Standard Penetration Test)",
        choice2: "Sondir/CPT (Cone Penetration Test)",
        choice3: "Indeks properties (disturbed samples)",
        choice4: "Sampel Undisturbed (UDS)",
        answer: 3,
    }, {
        question: "Beberapa hal yang harus dipertimbangkan dalam perancangan fondasi dalam, yaitu",
        choice1: "Pengaruh angin pada bangunan di sekitar",
        choice2: "Jenis dan dimensi atap",
        choice3: "Profil tanah (stratigrafi)",
        choice4: "Konfigurasi beton",
        answer: 3,
    }, {
        question: "Apa saja yang termasuk Analisa Stabilitas Konstruksi Tiang Pancang Dalam daya dukung pondasi tiang pancang",
        choice1: "Jawaban B dan C benar",
        choice2: "Beban tiang",
        choice3: "Beban lateral",
        choice4: "Beban tetap",
        answer: 1,
    }, {
        question: "Yang termasuk kedalam tipikal tiang kelompok ialah",
        choice1: "2 Tiang",
        choice2: "1 Tiang",
        choice3: "11 Tiang",
        choice4: "12 Tiang",
        answer: 3,
    }, {
        question: "Untuk menghitung besarnya kapasitas dukung kelompok tiang, ada beberapa hal yang harus diperhatikan terlebih dahulu, yaitu",
        choice1: "Jumlah tiang dalam satu kelompok",
        choice2: "Jarak pondasi",
        choice3: "Efisiensi Waktu kelompok tiang",
        choice4: "Susunan Tiang Pancang",
        answer: 1,
    }, {
        question: "Efisiensi dalam tiang kelompok dipengaruhi oleh beberapa hal sebagai berilkut",
        choice1: "Salah Semua Jawaban ",
        choice2: "Urutan instalasi",
        choice3: "Jawaban B dan D Benar",
        choice4: "Jangka waktu setelah pemancangan",
        answer: 3,
    }, {
        question: "Metode Poulus dan davis, metode Los Angeles Group, Metode Convers-Labarre merupakan perhitungan efisiensi dari",
        choice1: "Tiang Pancang",
        choice2: "Pondasi Cakar Ayam",
        choice3: "File Cap",
        choice4: "Kelompok Tiang",
        answer: 4,
    }, {
        question: "Fondasi memanjang terletak pada tanah. Beban terbagi rata di atas permukaan (qo) sebesar 20 kN/m . Data tanah: (1)	Tanah 1: 1= 19 kN/m3, c1 = 20 kN/m2, 1 = 25° (2)	Tanah 2: 2 = 19,9 kN/m3, c2 = 50 kN/m2, 2 = 30° Berapa kapasitas dukung ultimit (qu), jika kedalaman fondasi Df = 1 m, lebar B = 1,8 m dan kedudukan muka air tanah sangat dalam? Bagaimana pengaruhnya terhadap kapasitas dukung ultimit jika tidak terdapat beban terbagi rata?",
        choice1: "3090,3 kN/m2",
        choice2: "4090,3 kN/m2",
        choice3: "3070,3 kN/m2",
        choice4: "3080,3 kN/m2",
        answer: 1,
    }, {
        question: "suatu tangki air dari beton ukuran (10 m x 15 m) diletakkan pada tanah lempung jenuh dengan berat isi tanah 21 kN/m3. Dasar tangki terletak pada kedalaman 1 m dan berat total setelah berisi air adalah 5.000 kN. Dari uji triaksial tak terdrainasi didapat cu = 20 kN/m2,     u  = 0°. Hitung faktor aman (FS) terhadap keruntuhan daya dukung menurut Cara Skempton",
        choice1: "120,5 kN/m2",
        choice2: "150,2 kN/m2",
        choice3: "120,2 kN/m2",
        choice4: "119,2 kN/m2",
        answer: 4,
    }, {
        question: "Suatu tangki air dari beton ukuran (10 m x 15 m) diletakkan pada tanah lempung jenuh dengan berat isi tanah 21 kN/m3. Dasar tangki terletak pada kedalaman 1 m dan berat total setelah berisi air adalah 5.000 kN. Dari uji triaksial tak terdrainasi didapat cu = 20 kN/m2,     u  = 0°. Hitung faktor aman (FS) terhadap keruntuhan daya dukung menurut Cara Terzaghi",
        choice1: "115,9kN/m2",
        choice2: "136,8 kN/m2",
        choice3: "136,9 kN/m2",
        choice4: "157,8 kN/m2",
        answer: 4,
    }, 
    
]

const SCORE_POINTS = 5
const MAX_QUESTIONS = 20

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}


getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')  
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.getElementsByClassName.width = `${(questionCounter/MAX_QUESTIONS) *100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()