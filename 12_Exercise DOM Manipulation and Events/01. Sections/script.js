function create(words) {
    let contentElement = document.getElementById('content');

    for (let i = 0; i < words.length; i++) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let text = document.createTextNode(words[i]);
        p.textContent = words[i]
        // p.appendChild(text);
        p.style.display = 'none';
        div.appendChild(p);

        div.addEventListener('click', function(e){
            // console.log(e.target.children[0]);
            p.style.display = 'block'
        });

        contentElement.appendChild(div);
    }

};