document.addEventListener('DOMContentLoaded', solve);

function solve() {
    document.getElementById('daysBtn').addEventListener('click', convertDays);
    document.getElementById('hoursBtn').addEventListener('click', convertHours);
    document.getElementById('minutesBtn').addEventListener('click', convertMinutes);
    document.getElementById('secondsBtn').addEventListener('click', convertSeconds);

    function convertDays(e) {
        e.preventDefault(e);
        let daysInput = Number(document.getElementById('days-input').value);
        updateFields(daysInput * 86400);
    }
    function convertHours(e) {
        e.preventDefault();
        let hoursInput = Number(document.getElementById('hours-input').value);
        updateFields(hoursInput * 3600);
    }
    function convertMinutes(e) {
        e.preventDefault();
        let minutesInput = Number(document.getElementById('minutes-input').value);
        updateFields(minutesInput * 60);
    }
    function convertSeconds(e) {
        e.preventDefault();
        let secondsInput = Number(document.getElementById('seconds-input').value);
        updateFields(secondsInput);
    }
    function updateFields(seconds) {
        document.getElementById('days-input').value = (seconds / 86400).toFixed(2);
        document.getElementById('hours-input').value = (seconds / 3600).toFixed(2);
        document.getElementById('minutes-input').value = (seconds / 60).toFixed(2);
        document.getElementById('seconds-input').value = (seconds).toFixed(2);
    }
}
