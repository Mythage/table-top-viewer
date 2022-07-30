document.addEventListener("DOMContentLoaded", function() {
    const maps = document.querySelectorAll('.map');

    maps.forEach(map => {
        map.addEventListener('click', function openMapFullscreen(event) {
            let  elem = event.target;


            if(document.fullscreenElement) {
               // document.exitFullscreen().then(function(){
               //     let pawns = document.querySelectorAll('.pawn');
               //     pawns.forEach(pawn => {
               //         pawn.style.display = 'none';
               //     })
               // });
            } else if (elem.requestFullscreen) {
                elem.requestFullscreen();

                let pawns = document.querySelectorAll('.pawn');
                pawns.forEach(pawn => {
                    pawn.style.display = 'block';
                })
            } else {
                alert('fullscreen not supported');
            }
        });
    });
});
