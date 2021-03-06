

function displayTime() {
    // define all the variables and give them a value
    let clock = document.getElementById('clockDisplay');
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let amOrPm = 'AM';


    // Sets AM of PM
    if (hour >= 12) {
        amOrPm = 'PM';
    }

    // Sets to standard time
    if(document.getElementById('stanTime').checked) {
        if (hour > 12) {
            hour = hour - 12;
    }
    }
    if(document.getElementById('milTime').checked) {
        amOrPm = '';
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        hour = "0" + hour;
    }
    if (second < 10) {
        second = "0" + second;
    }
    let combinedTime = `${hour}:${minute}:${second} ${amOrPm}`;
    clock.textContent = combinedTime;
}
displayTime();
setInterval(displayTime, 1000);