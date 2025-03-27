// Variant 1:
function solve2() {
  let result = document.getElementById('result');
  let caseToConvert = document.getElementById('naming-convention').value;
  let text = document.getElementById('text').value;

  if (caseToConvert != 'Camel Case' && caseToConvert != 'Pascal Case') {
    result.textContent = 'Error!';
    return;
  }

  let splitArr = text.split(' ');
  let converted = '';

  if (caseToConvert == 'Camel Case') {
    converted = splitArr.map((word, index) => index == 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
  } else {
    converted = splitArr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
  }

  result.textContent = converted;
}

// Variant 2:
function solve() {
  let textInput = document.getElementById('text');
  let commandInput = document.getElementById('naming-convention');

  let text = textInput.value.toLocaleLowerCase();
  let tokens = text.split(' ');
  let command = commandInput.value;

  let output = document.getElementById('result');

  if(command != 'Pascal Case' && command != 'Camel Case') {
    output.textContent = 'Error!';
    return;
  }

  let startIndex = command == 'Pascal Case' ? 0 : 1;
  for (let i = startIndex; i < tokens.length; i++) {
    let word = tokens[i];
    word = word[0].toLocaleUpperCase() + word.slice(1);

    tokens[i] = word;
  }
  
  output.textContent = tokens.join('');
}
