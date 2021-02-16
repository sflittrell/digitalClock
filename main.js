

function displayTime() {
    const clock = document.getElementById('clockDisplay');
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const amOrPm = 'AM';
    const combinedTime = `${hour}:${minute}:${second} ${amOrPm}`;
    clock.textContent = combinedTime;
}
displayTime();
setInterval(displayTime, 1000);