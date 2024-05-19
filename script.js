//PRELOADER
let counter = 0;
function startLoader(){
    let preCounter = document.querySelector('.pre-counter');
    function updateCounter(){
        if(counter === 100){
            preCounter.classList.add('')
            return
        }
        counter += Math.floor(Math.random()* 10) +1;

        if(counter > 100){
            counter = 100;
        }

        preCounter.textContent = counter;

        let delay = Math.floor(Math.random()*200)+50;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}
startLoader();
gsap.to('.pre-counter',0.25, {
    delay:3.5,
    y:-10000
});
gsap.to('.animated-loader',0.25, {
    delay:3.5,
    y:-1000
});
gsap.to('.animated-loader lord-icon',0.25, {
    delay:3.5,
    height:0
});
gsap.to('.pre-bar',0.25, {
    delay:3.5,
    height:0,
    stagger: 0.08,
    ease: "power4.inOut"
});
gsap.to('.pre-loader', {
    delay:3.6,
    height: '0vw'
});

const slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.btn');
let bars = document.querySelectorAll('.bar');
let currentSlide = 1;

let manualNav = function(manual){
    slides.forEach((slide)=>{
        slide.classList.remove('active');
        btns.forEach((btn)=>{
            btn.classList.remove('active');
        })
    })
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}
btns.forEach((btn,i)=>{
    btn.addEventListener('click', ()=>{
        manualNav(i);
        currentSlide = i;
    })
})
let i = 1;

setInterval(()=>{
    btns.forEach((btn)=>{
        btn.classList.remove('active');
    })
    btns[i].classList.add('active');
    slides.forEach((slide)=>{
        slide.classList.remove('active');
    })
    slides[i].classList.add('active');
    i++;
    if(i == 4){
        i = 0;
    }
}, 6000);


gsap.from('.navbar-nav a',{
    opacity:0,
    delay:4.5,
    y:-100,
    duration: 1,
    stagger: 0.1
})
gsap.from('.headText', {
    opacity:0,
    delay:4.5,
    x:-100,
    duration: 1
})
gsap.from('.enquireNow', {
    y:10,
    repeat:4,
    yoyo: true
})
gsap.from('.statOne h4', {
        duration: 2,
        text: "0",
        newClass: "class2",
        delimiter: " ",
        repeat:-1,
        yoyo: true
})
gsap.from('.text-container', 
    {scrollTrigger:{
        trigger:'.schedule-header',
        start: 'top bottom',
        scrub: true
    },
    opacity:0,
    x:200,
    duration:2
})
gsap.from('.countdown-box', {
        scrollTrigger:{
            trigger:".counter",
            start: 'top bottom',
        },
        duration: 2,
        x:-100,
        opacity:0
})
gsap.from('.previous-text-box', {
        scrollTrigger:{
            trigger:".previous-box",
            start: 'top bottom'
        },
        duration: 2,
        y:-100,
        opacity:0
})
gsap.from('.dirCard', {
        scrollTrigger:{
            trigger:".directions-venue",
            start: 'top center'
        },
        duration: 2,
        x:-100,
        opacity:0,
        stagger:0.5
})
gsap.to('.headText button', {
    y: 10,
    repeat :-1,
    yoyo:true
})
gsap.to('.navbar', {
    scrollTrigger:{
        trigger:'.header',
        start:'bottom top',
        scrub:true
    },
    backgroundColor: '#000',
    duration: 1
})

gsap.to('.popbuttons', {
    scrollTrigger:{
        trigger:'.header',
        start: 'bottom center',
        scrub: true
    },
    opacity: 0
})

// COUNT DOWN
var target_date = new Date("Aug 14, 2024").getTime();
setInterval(()=>{
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    var days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left%86400;

    var hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    var minutes = parseInt(seconds_left / 60);
    var seconds = parseInt(seconds_left%60)

    document.querySelector('.countdown-days h1').innerHTML = `${days}`;
    document.querySelector('.countdown-hours h1').innerHTML = `${hours}`;
    document.querySelector('.countdown-minutes h1').innerHTML = `${minutes}`;
    document.querySelector('.countdown-seconds h1').innerHTML = `${seconds}`;


}, 1000)

// IMAGE GEN 
let imm = 0;
setInterval(()=>{   
    imm++;
    let arrImg = ['https://cdn.pixabay.com/photo/2017/05/27/21/59/dancer-2349565_640.png', 'https://cdn.pixabay.com/photo/2020/01/15/17/38/fireworks-4768501_640.jpg', 'https://cdn.pixabay.com/photo/2016/12/28/20/30/wedding-1937022_640.jpg', 'https://cdn.pixabay.com/photo/2017/08/07/21/56/people-2608316_640.jpg'];

    document.querySelector('.image-container').src = arrImg[i];
    if(imm == 2){
        imm = 0;
    }
}, 1000);

//EVENT POPUP









