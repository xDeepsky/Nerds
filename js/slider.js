(function () {
window.addEventListener('DOMContentLoaded', () => {

let controlParent = document.querySelector('.slider-control'),
    slides = document.querySelectorAll('.slide'),
    btnSlides = document.querySelectorAll('.btn-slide'),
    counter = 0;

function hideSlider() {
    slides.forEach(item => {
        item.classList.remove('slide-show');
    });
}

function showSlider(i = 0) {
    slides[i].classList.add('slide-show');
}

hideSlider();
showSlider();

controlParent.addEventListener('click', (evt) => {
    let target = evt.target;
    if (target && target.classList.contains('btn-slide')) {
        btnSlides.forEach((item, i) => {
            if (target == item) {
                hideSlider();
                showSlider(i);  
                counter = i;              
            }            
        });
    }    
});

let sliderInterval = setInterval(() => {
    btnSlides[counter].firstElementChild.checked = true;
    hideSlider();
    showSlider(counter);
    counter++;
    if (counter >= 3 ) {
        counter = 0;
    }
},10000);
});
})();