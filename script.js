const rightArrow = document.getElementById('right')
const leftArrow = document.getElementById('left')
const body = document.body
const slides = document.querySelectorAll('.slide')
let activeSlide =0
rightArrow.addEventListener('click', ()=>{
    activeSlide++
    if(activeSlide>slides.length-1){
        activeSlide =0
    }
    changeSlide()
    changeBgBody()
    
})
leftArrow.addEventListener('click', ()=>{
    activeSlide--
    if(activeSlide<0){
        activeSlide = slides.length-1
    }
    changeSlide()
    changeBgBody()
    
})


function changeSlide(){
    slides.forEach((slide)=>{
        slide.classList.remove('active')
        slides[activeSlide].classList.add('active')
     })
}

function changeBgBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}