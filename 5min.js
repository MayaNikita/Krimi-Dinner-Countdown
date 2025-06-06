document.getElementById("countdown").innerText = "00:00:00";

//let timer = 60 * 60 * 2;
let timer = 5 * 60; // 2 hours in seconds

function startTimer(duration, display) {
    let interval = setInterval(function () {
        let hours = parseInt(timer / 60 / 60, 10);
        let minutes = parseInt(timer / 60 - (hours* 60), 10);
        let seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval)
            document.getElementById("body").classList.add("finished")
        }
    }, 1000);
}

window.onload = function () {
    var display = document.querySelector('#countdown');
    startTimer(timer, display);
};

document.getElementById("subtract-minutes").addEventListener("click", (event) => {
    timer -= 60 * 2
})

document.getElementById("add-minutes").addEventListener("click", (event) => {
    timer += 60 * 2
})