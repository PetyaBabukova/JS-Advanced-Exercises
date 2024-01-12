function extractText() {
    // TODO
    
    let ulElement = document.getElementById('items');
    console.log(ulElement.textContent);

    let textAreaElement = document.getElementById('result');
    textAreaElement.textContent = ulElement.textContent
}