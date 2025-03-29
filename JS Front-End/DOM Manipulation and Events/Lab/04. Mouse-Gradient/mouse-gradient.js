function attachGradientEvents() {
    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', (ev) => {
        let value = Math.floor((ev.offsetX / gradient.clientWidth) * 100);

        document.getElementById('result').textContent = value + '%';
    })
}

// offsetWidth => take margin, border and the scroll
// clientWidth => content and padding