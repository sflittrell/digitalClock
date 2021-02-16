

function displayTime() {
    const clock = document.querySelector('.clockDisplay');
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const amOrPm = '';
    clock.textContent = `${hour}:${minute}:${second} ${amOrPm}`;
    
}