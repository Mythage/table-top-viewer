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
                //remove existing pawns
                let pawns = document.querySelectorAll('.pawn');
                pawns.forEach(pawn => {
                    pawn.remove();
                })
                //enter fullscreen
                elem.requestFullscreen();


                //create pawn
                for(let i=1;i<6;i++) {
                    let pawn=document.createElement("div");
                    pawn.classList.add("pawn","player" + i);
                    pawn.innerText = i;
                    dragElement(pawn);
                    elem.appendChild(pawn);
                    pawn.style.top = (50 * i) + 'px';
                }



                //add fullscreen close button
                let closebutton = document.createElement("div");
                closebutton.classList.add("close");
                closebutton.id = 'close';
                closebutton.addEventListener('click', function() {
                    document.exitFullscreen().then(function(){
                            let pawns = document.querySelectorAll('.pawn');
                            pawns.forEach(pawn => {
                                pawn.remove();
                            });
                            document.getElementById('close').remove();
                        });
                });

                elem.appendChild(closebutton);
            } else {
                alert('fullscreen not supported');
            }
        });
    });
});
