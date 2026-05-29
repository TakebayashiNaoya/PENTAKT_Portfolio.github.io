(function () {
    var canvas = document.createElement('div');
    canvas.id = 'snow-canvas';
    document.documentElement.insertBefore(canvas, document.body);

    var glyphs = ['❄', '❅', '❆', '✦', '·', '∗'];
    function spawn() {
        var el = document.createElement('div');
        el.className = 'snowflake';
        el.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
        var size = Math.random() * 14 + 7;
        var duration = Math.random() * 9 + 8;
        el.style.cssText = [
            'left:' + (Math.random() * 100) + '%',
            'font-size:' + size + 'px',
            'opacity:' + (Math.random() * 0.5 + 0.25),
            'animation-duration:' + duration + 's',
            'animation-delay:-' + (Math.random() * duration) + 's'
        ].join(';');
        canvas.appendChild(el);
        setTimeout(function () { el.remove(); }, (duration + 2) * 1000);
    }
    for (var i = 0; i < 55; i++) spawn();
    setInterval(spawn, 400);
})();
