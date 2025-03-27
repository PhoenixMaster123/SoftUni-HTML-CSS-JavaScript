function solve1() {
  let input = document.getElementById('input');
  let output = document.getElementById('output');

  let sentences = input.value.split('.').filter(s => s.trim() !== '');
  let result = [];

  for (let i = 0; i < sentences.length; i+=3) {
    let paragraphSentences = sentences.slice(i, i + 3).map(s => s.trim() + '.').join(' ');
    let paragraph = `<p>${paragraphSentences}</p>`;
    result.push(paragraph);
  }

  output.innerHTML = result.join('\n');
}

function solve2() {
  let input = document.getElementById('input');
  let output = document.getElementById('output');

  let sentences = input.value.split('.').filter(s => s.trim() !== ''); // Entfernt leere Sätze
  let result = '';
  let tempGroup = [];

  for (let i = 0; i < sentences.length; i++) {
    tempGroup.push(sentences[i].trim()); // Satz zur aktuellen Gruppe hinzufügen

    if ((i + 1) % 3 === 0 || i === sentences.length - 1) {
      result += `<p>${tempGroup.join('. ')}.</p>`; // Drei Sätze pro Absatz
      tempGroup = []; // Gruppe zurücksetzen
    }
  }

  output.innerHTML = result;
}

