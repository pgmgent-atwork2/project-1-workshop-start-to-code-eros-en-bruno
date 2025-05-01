function checkAnswers() {
  let score = 0;
  const vragen = 10;

  
  for (let i = 1; i <= vragen; i++) {
    const opties = document.querySelectorAll('input[name="q' + i + '"]');
    opties.forEach(optie => {
      optie.closest('label').classList.remove('correct', 'wrong');
    });
  }

  
  for (let i = 1; i <= vragen; i++) {
    const geselecteerd = document.querySelector('input[name="q' + i + '"]:checked');
    if (!geselecteerd) continue;

    const label = geselecteerd.closest('label');

    if (geselecteerd.value === "correct") {
      label.classList.add('correct');
      score++;
    } else {
      label.classList.add('wrong');
    }
  }

  // Toon score
  document.getElementById("resultaat").textContent =
    "Je score is " + score + " van de " + vragen + ".";
}
