function solve() {
    let inputElement = document.getElementById('input');
    let textArr = inputElement.value.split('.').filter(sentence => sentence.length > 0); 
    let resultDiv = document.getElementById('output');

    while (textArr.length > 0) {
        let text = textArr.splice(0, 3).join('. ') + '.';
        let p = document.createElement('p');
        p.textContent = text;
        resultDiv.appendChild(p);
    };
};





// //My try - not completed
//     // Get the input text
//     let inputText = document.getElementById('input').value;
    
//     // Split the text into sentences
//     let sentences = inputText.split('.').filter(sentence => sentence.length > 0);

//     // Get the output div
//     let outputDiv = document.getElementById('output');

//     // Clear the output div
//     outputDiv.innerHTML = '';

//     // Create paragraphs with up to 3 sentences each
//     for (let i = 0; i < sentences.length; i += 3) {
//         let paragraphText = sentences.slice(i, i + 3).join('. ');
//         let paragraph = `<p>${paragraphText}</p>`;
//         outputDiv.innerHTML += paragraph;
//     }
// // Attach the solve function to the button's click event
// document.getElementById('formatItBtn').addEventListener('click', solve);
