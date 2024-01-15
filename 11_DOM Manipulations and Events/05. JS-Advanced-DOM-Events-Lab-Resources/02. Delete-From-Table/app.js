function deleteByEmail() {
    let emailInputElement  = document.querySelector('input[name="email"]');
    let emialCellElements = document.querySelectorAll('tr td:nth-of-type(2)');

    // for (const tdElement of emialCellElements) {
    //     console.log(tdElement.textContent);
    // }

    let emialElements = Array.from(emialCellElements);
    let targetElement = emialElements.find(x => x.textContent == emailInputElement.value);

    // console.log(targetElement.parentNode); 
    // targetElement.parentNode.removeChild(targetElement); //Old fasion

    targetElement.remove(); // New way
}