function solve() {
    const onScreenBtn = document.querySelector('#add-new button');
    onScreenBtn.addEventListener('click', addMovie);

    const archiveSection = document.querySelector('#archive ul');
    const clearBtn = document.querySelector('#archive button');
    clearBtn.addEventListener('click', clearArchive);

    function addMovie(e) {
        e.preventDefault();

        let inputElements = document.querySelectorAll('#add-new input');
        let [movieNameInput, movieHallInput, moviePriceInput] = inputElements;

        let movieName = movieNameInput.value;
        let movieHall = movieHallInput.value;
        let moviePriceValue = parseFloat(moviePriceInput.value);

        if (movieName !== '' && movieHall !== '' && !isNaN(moviePriceValue) && moviePriceValue > 0) {
            let moviePrice = moviePriceValue.toFixed(2);
            appendMovieToList(movieName, movieHall, moviePrice);

            movieNameInput.value = '';
            movieHallInput.value = '';
            moviePriceInput.value = '';
        }
    }

    function appendMovieToList(name, hall, price) {
        let moviesListElement = document.querySelector('#movies ul');
        let liElement = document.createElement('li');

        liElement.innerHTML = `
            <span>${name}</span>
            <strong>Hall: ${hall}</strong>
            <div>
                <strong>${price}</strong>
                <input placeholder='Tickets Sold'/>
                <button class="archiveBtn">Archive</button>
            </div>
        `;

        moviesListElement.appendChild(liElement);

        let archiveButton = liElement.querySelector('.archiveBtn');
        archiveButton.addEventListener('click', archiveMovie);
    }

    function archiveMovie(e) {
        let movieLi = e.target.parentElement.parentElement;
        let movieName = movieLi.querySelector('span').textContent;
        let ticketPrice = parseFloat(movieLi.querySelector('div strong').textContent);
        let ticketsSoldInput = movieLi.querySelector('div input');
        let ticketsSold = parseFloat(ticketsSoldInput.value);
    
        // Check for tickets sold being a number, allow 0 tickets sold to be archived
        if (!isNaN(ticketsSold)) {
            let totalAmount = (ticketPrice * ticketsSold).toFixed(2);
    
            let archiveLi = document.createElement('li');
            archiveLi.innerHTML = `
                <span>${movieName}</span>
                <strong>Total amount: ${totalAmount}</strong>
                <button class="deleteBtn">Delete</button>
            `;
    
            let archiveSection = document.querySelector('#archive ul');
            archiveSection.appendChild(archiveLi);
    
            let deleteButton = archiveLi.querySelector('.deleteBtn');
            deleteButton.addEventListener('click', deleteMovie);
    
            // Remove from Movies on Screen
            movieLi.remove();
        }
    }
    

    function deleteMovie(e) {
        e.target.parentElement.remove();
    }

    function clearArchive() {
        archiveSection.innerHTML = '';
    }
}

// Ensures the DOM is fully loaded before running the solve function
// document.addEventListener('DOMContentLoaded', solve);
