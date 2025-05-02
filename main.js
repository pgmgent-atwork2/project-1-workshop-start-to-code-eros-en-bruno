function checkAnswers() {
  let score = 0;                   // Variabele om de score bij te houden
  const vragen = 10;              // Aantal quizvragen (kan aangepast worden)

  // 🔁 Stap 1: Verwijder eerdere kleurmarkeringen (correct/wrong) uit alle labels
  for (let i = 1; i <= vragen; i++) {
    const opties = document.querySelectorAll('input[name="q' + i + '"]'); // Alle antwoordopties voor vraag i
    opties.forEach(optie => {
      optie.closest('label').classList.remove('correct', 'wrong'); // Verwijder kleurklassen van bijhorende <label>
    });
  }

  // 🔁 Stap 2: Controleer welke antwoorden gekozen zijn en of ze correct zijn
  for (let i = 1; i <= vragen; i++) {
    const geselecteerd = document.querySelector('input[name="q' + i + '"]:checked'); // Zoek het geselecteerde antwoord van vraag i

    if (!geselecteerd) continue;  // Als er niets aangeklikt is voor deze vraag, ga door naar de volgende

    const label = geselecteerd.closest('label'); // Zoek het <label> element waar de aangeklikte optie in zit

    // ✅ Als het antwoord correct is
    if (geselecteerd.value === "correct") {
      label.classList.add('correct'); // Voeg CSS-klasse toe voor groene markering
      score++;                         // Verhoog de score
    } else {
      label.classList.add('wrong');   // Voeg CSS-klasse toe voor rode markering
    }
  }

  // 🧾 Stap 3: Toon de eindscore in een element met ID "resultaat"
  document.getElementById("resultaat").textContent =
    "Je score is " + score + " van de " + vragen + ".";
}
