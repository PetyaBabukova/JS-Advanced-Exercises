function colorize() {

    let rowElements = document.getElementsByTagName('tr')
    // //Convert to Array
    let rows = Array.from(rowElements) 

    rows.forEach((x, i)=>{
        if (i % 2 != 0) {
            x.style.backgroundColor = 'teal'
        }
    });

        // let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td');
    // console.log(rowElements);

    // rowElements.forEach(x=>{
    //     x.style.backgroundColor = 'teal'
    // })
};