function checkAnswers() {
    let score = 0;
    const vragen = 10;
    for (let i = 1; i <= vragen; i++) {
      const antwoord = document.querySelector('input[name="q' + i + '"]:checked');
      if (antwoord && antwoord.value === "correct") {
        score++;
      }
    }
    document.getElementById("resultaat").textContent = "Je score is " + score + " van de " + vragen + ".";
  }