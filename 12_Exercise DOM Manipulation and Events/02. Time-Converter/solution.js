function attachEventsListeners() {

    let daysInputElement = document.getElementById('days');
    let hoursInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');

    let daysButtonElement = document.getElementById('daysBtn');
    daysButtonElement.addEventListener('click', onConvert);

    let hoursButtonElement = document.getElementById('hoursBtn');
    hoursButtonElement.addEventListener('click', onConvert)

    let minitesButtonElement = document.getElementById('minutesBtn');
    minitesButtonElement.addEventListener('click', onConvert);

    let secondsButtonElement = document.getElementById('secondsBtn');
    secondsButtonElement.addEventListener('click', onConvert);

    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    // let days = Number(daysInputElement.value);
    // let hours = Number(hoursInputElement.value);
    // let minutes = Number(minutesInputElement.value);
    // let seconds = Number(secondsInputElement.value);
    function convert(value, unit) {
        let days = value / rations[unit]

        return {
            days: days,
            hours: days * rations.hours,
            minutes: days * rations.minutes,
            seconds: days * rations.seconds
        }
    }

    function onConvert(event) {

        let input = event.target.parentElement.querySelector('input[type="text"]');
        let time = convert(Number(input.value), input.id);

        daysInputElement.value = time.days;
        hoursInputElement.value = time.hours;
        minutesInputElement.value = time.minutes;
        secondsInputElement.value = time.seconds;
    }
}