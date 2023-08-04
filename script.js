

let menuIcon = document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top =window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offset && top < offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');

            });
        }
       
    });


    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
//scrollreveal library is using for smooth scrolling effect

ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:300
})

ScrollReveal().reveal('.home-content,.heading',{origin:'top'})
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'})
ScrollReveal().reveal('.home-content h3,.about-img',{origin:'left'})
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

//typedjs

const typed=new Typed(".multiple-text",{
    strings:['Coder','Youtuber','Web Developer','Open Source Contributor'],loop:true, typeSpeed:100,backSpeed:80,backDelay:150
})