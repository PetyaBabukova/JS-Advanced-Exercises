function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resuultElement = document.getElementById('result');

    const gradientMousOverHandler = (e) => {
        // console.log(e.target.offsetWidth);
        // console.log(e.offsetX);
        let percent = Math.floor(e.offsetX / e.target.offsetWidth * 100);

        resuultElement.textContent = `${percent}%`
    }
    gradientElement.addEventListener('mousemove', gradientMousOverHandler)
}