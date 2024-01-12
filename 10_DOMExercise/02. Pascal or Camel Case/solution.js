function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;

  let resultField = document.getElementById('result');


  let result = '';
  text = text.toLowerCase();
  let textArr = text.split(' ')

  switch (convention) {
    case 'Camel Case':
      result = textArr.map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join('');

      break;

    case 'Pascal Case':
      result = textArr.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join('');

      break;

    default:
      result = 'Error!';
      break;
  }

  resultField.textContent = result

}