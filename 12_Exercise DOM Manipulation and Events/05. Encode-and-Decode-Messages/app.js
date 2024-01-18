function encodeAndDecodeMessages() {

    let [inputMessageElement, outpuMessageElement] = document.querySelectorAll('#main textarea');
    let buttonElements = document.querySelectorAll('button');

    // buttonElements.forEach(button => button.addEventListener('click', enigma));

    for (let i = 0; i < buttonElements.length; i++) {
        buttonElements[i].addEventListener('click', enigma)
        
    }

    
    function enigma(e) {
        if (e.target.textContent === 'Encode and send it') {
            let encoded = '';
            let inputText = inputMessageElement.value;
            
            for (let i = 0; i < inputText.length; i++) {
                let asciiCode = inputText.charCodeAt(i);
                let shiftedAsciiCode = asciiCode + 1;
                encoded += String.fromCharCode(shiftedAsciiCode);
            };
            
            inputMessageElement.value = ''
            outpuMessageElement.value = encoded;
            
        } else if (e.target.textContent === 'Decode and read it') {
            let decoded = '';
            let encodedText = outpuMessageElement.value;

            for (let i = 0; i < encodedText.length; i++) {
                let asciiCode = encodedText.charCodeAt(i);
                let shiftedAsciiCode = asciiCode - 1;
                decoded += String.fromCharCode(shiftedAsciiCode);
                
            }

            outpuMessageElement.value = decoded;
            inputMessageElement.value = ''

        }
    }
}