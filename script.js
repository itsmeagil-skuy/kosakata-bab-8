const wordBank = [
  ["ハンサム","Tampan"],
  ["きれい","Cantik / Bersih"],
  ["しずか","Tenang"],
  ["にぎやか","Ramai"],
  ["ゆうめい","Terkenal"],
  ["しんせつ","Baik hati"],
  ["げんき","Sehat"],
  ["ひま","Luang"],
  ["べんり","Praktis"],
  ["すてき","Bagus / Indah"],
  ["おおきい","Besar"],
  ["ちいさい","Kecil"],
  ["あたらしい","Baru"],
  ["ふるい","Lama"],
  ["いい","Baik"],
  ["わるい","Buruk"],
  ["あつい","Panas"],
  ["さむい","Dingin"],
  ["むずかしい","Sulit"],
  ["やさしい","Mudah"],
  ["たかい","Mahal"],
  ["やすい","Murah"],
  ["おもしろい","Menarik"],
  ["いそがしい","Sibuk"],
  ["たのしい","Menyenangkan"]
];

// buat 100 soal
let questions = [];
for (let i = 0; i < 4; i++) {
  wordBank.forEach(w => {
    if (Math.random() < 0.5) {
      questions.push({ question: w[0], answer: w[1], type: "JP-ID" });
    } else {
      questions.push({ question: w[1], answer: w[0], type: "ID-JP" });
    }
  });
}
questions = questions.slice(0, 100);
questions.sort(() => Math.random() - 0.5);

let current = 0;
let score = 0;

function loadQuestion() {
  let q = questions[current];
  document.getElementById("question").innerHTML =
    "Soal " + (current + 1) + " / 100<br><br><b>" + q.question + "</
