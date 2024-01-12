function toggle() {
    let tooglElement = document.getElementsByClassName('button')[0];
    let textElement = document.getElementById('extra');

    if (tooglElement.textContent == 'More') {
        textElement.style.display = 'block';
        tooglElement.textContent = 'Less'
    } else if (tooglElement.textContent == 'Less') {
        textElement.style.display = 'none';
        tooglElement.textContent = 'More'
    };
};

