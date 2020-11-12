//Smooth Scroll
function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top + window.pageYOffset-42;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null){
            startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration){
            requestAnimationFrame(animation);
        }
    }

    function ease(t, b, c, d){
        t /= d / 2;
        if (t <1) { 
            return (c/2*t*t+b);
        }
        t--;
        return -c / 2 * (t * (t-2) -1)+b;
    }
        
    requestAnimationFrame(animation);
}

//NavSlide
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation = '';
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.5}s`;
            }
        });
    })
    
}

//Query Selectors
var ourPrograms = document.querySelector('.programs-btn');
var tenDayProgram = document.querySelector('#tenDayProgram-btn');
var programNav = document.querySelector('#program-btn');
var faqNav = document.querySelector('#faq-btn-nav');
var instructorNav = document.querySelector('#instructor-btn');
var header = document.querySelector('#v-header');
//Event Listeners

ourPrograms.addEventListener('click', function(){
    smoothScroll('.program1', 850);
});
programNav.addEventListener('click', function(){
    smoothScroll('.program1', 850);
});
programNav.addEventListener('click', function(){
    smoothScroll('.program1', 850);
});
faqNav.addEventListener('click', function(){
    smoothScroll('.faq-header', 850);
});
instructorNav.addEventListener('click', function(){
    smoothScroll('.instructors', 850);
});
tenDayProgram.addEventListener('click', function(){
    smoothScroll('.program2', 850);
});
header.addEventListener('click', function(){
    smoothScroll('.fullscreen-video-wrap', 850);
});

const main = () => {
    navSlide();
}

main();