const message = `aku minta maaf ya…
kadang aku kurang ngertiin kamu,
kurang perhatian,
dan mungkin sering bikin kamu capek.

aku benar-benar minta maaf kalau selama ini
aku ada salah ke kamu.

aku cuma mau kamu tau,
aku itu sayang banget sama kamu.

maaf ya sayang, bikin kamu marah terus dan ngerasa ga setara`;

function showLetter() {
  // ▶️ NYALAIN BGM
  const bgm = document.getElementById("bgm");
  bgm.volume = 0.4; // atur volume (0.1–1)
  bgm.play();

  // animasi awal
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");

    letterBox.style.display = "block";
    typedText.innerHTML = ""; // reset teks
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
