const targetTime = new Date().getTime() + (60 * 60 * 1000); // 1 hora desde ahora

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(timerInterval);
        document.querySelector('.timer').textContent = "Oferta terminada";
    }
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();