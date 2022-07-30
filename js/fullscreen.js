document.addEventListener("DOMContentLoaded", function() {
    const maps = document.querySelectorAll('.map');

    maps.forEach(map => {
        map.addEventListener('click', function openMapFullscreen(event) {
            let  elem = event.target;

            if(elem.requestFullscreen) {
                elem.requestFullscreen();
            } else {
                alert('fullscreen not supported');
            }
        });
    });
});
