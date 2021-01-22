const carouselSlider = document.querySelector(".slider");
const carouselImages = document.querySelectorAll(".slider img")

//btn
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//counter

let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

//btn listner

nextBtn.addEventListener('click', () =>{
    if(counter >= carouselImages.length -1) return;
    carouselSlider.style.transition= "transform 0.4s ease-in-out";
    counter++;
   carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () =>{
    if(counter <= 0) return;
    carouselSlider.style.transition= "transform 0.4s ease-in-out";
    counter--;
   carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
carouselSlider.addEventListener('transitionend', () =>{
if(carouselImages[counter].id==='lastclone'){
    carouselSlider.style.transition="none";
    counter= carouselImages.length -2;
     carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
if(carouselImages[counter].id==='firstclone'){
    carouselSlider.style.transition="none";
    counter= carouselImages.length -counter;
     carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
});