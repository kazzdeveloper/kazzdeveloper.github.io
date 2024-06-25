document.addEventListener('mousemove', function(e) {
    let flashlight = document.querySelector('.flashlight');
    
    if (!flashlight) {
        flashlight = document.createElement('div');
        flashlight.className = 'flashlight';
        document.querySelector('.container').appendChild(flashlight);
    }

    flashlight.style.left = `${e.pageX - 100}px`;
    flashlight.style.top = `${e.pageY - 100}px`;
});
