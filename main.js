const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slidesWrapper = document.querySelector(".slides-wrapper");

const startAutoSlides = document.querySelector(".start-slide");
const stopAutoSlides = document.querySelector(".stop-slide");
 
let currentSlide = 0;

function loadSlide(){
    slides.forEach((el,index)=>{
        if(index===currentSlide){
            el.classList.add("active");
        }else{
            el.classList.remove("active")
        }
    })
}

function goToNextSlide(){
    if(currentSlide===slides.length-1){
        currentSlide = 0;
    }else{
        currentSlide++;
    }
    loadSlide()
}

function goToPrevSlide() {
	if (currentSlide === 0) {
		currentSlide = slides.length - 1;
	} else {
		currentSlide -= 1;
	}
	loadSlide();
}
slides[currentSlide].classList.add("active");

let sliderIntervalId = null;

sliderIntervalId = setInterval(goToNextSlide,30000);


slidesWrapper.addEventListener("mouseenter",()=>{
    sliderIntervalId=setInterval(goToNextSlide,4000);
    console.log("nasara")
});

slidesWrapper.addEventListener("mouseleave",()=>{
    clearInterval(sliderIntervalId)
})