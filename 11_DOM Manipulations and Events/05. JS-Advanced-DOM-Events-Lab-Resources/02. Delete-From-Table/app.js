function deleteByEmail() {
    let emailInputElement  = document.querySelector('input[name="email"]');
    let emialCellElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result')

    // for (const tdElement of emialCellElements) {
    //     console.log(tdElement.textContent);
    // }

    let emialElements = Array.from(emialCellElements);
    let targetElement = emialElements.find(x => x.textContent == emailInputElement.value.trim());

    // console.log(targetElement.parentNode); 
    // targetElement.parentNode.removeChild(targetElement); //Old fasion
    if (targetElement) {
        targetElement.parentNode.remove(); // New way
        resultElement.textContent = 'Deleted.'
    } else {
        resultElement.textContent = 'Not found.'
    }
}