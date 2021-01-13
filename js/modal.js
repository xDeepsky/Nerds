( function () {
let btn = document.querySelector(".writeus__button");
let popup = document.querySelector(".modal");
let closeBtn = document.querySelector(".modal-close");

btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    document.body.style.overflow = '';
});

window.addEventListener("keydown", function (evt) {
    if (evt.code === 'Escape') {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            document.body.style.overflow = '';
        }
    }
});

popup.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    let startCoords = {
        x: evt.clientX,
        y: evt.clientY
    };
    let onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
        let shift = {
            x: startCoords.x - moveEvt.clientX,
            y: startCoords.y - moveEvt.clientY
        };
        startCoords = {
            x: moveEvt.clientX,
            y: moveEvt.clientY
        };
        popup.style.top = (popup.offsetTop - shift.y) + 'px';
        popup.style.left = (popup.offsetLeft - shift.x) + 'px';
    };
    let onMouseUp = function (upEvt) {
        upEvt.preventDefault();
    
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };  
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

})();
