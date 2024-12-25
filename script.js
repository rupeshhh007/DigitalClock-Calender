window.onload = () => {
    function buildClock() {
        const date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.querySelector('#clock-hours').innerText = hours;
        document.querySelector('#clock-minutes').innerText = minutes;
        document.querySelector('#clock-seconds').innerText = seconds;

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.querySelector('#date').innerText = date.toLocaleDateString(undefined, options);

        setTimeout(buildClock, 1000);
    }

    buildClock();

    // Theme Toggle
    document.querySelector('#theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
};
