

function displayTime() {
    // define all the variables and give them a value
    let clock = document.getElementById('clockDisplay');
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let amOrPm = 'AM';
    let combinedTime = `${hour}:${minute}:${second} ${amOrPm}`;
    clock.textContent = combinedTime;

    // Sets AM of PM
    if (hour >= 12) {
        amOrPm = 'PM';
    }

    // Sets to standard time
    if (hour > 12) {
        hour = hour - 12;
    }
}
displayTime();
setInterval(displayTime, 1000);