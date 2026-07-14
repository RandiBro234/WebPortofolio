/* ==========================================
   MOBILE MENU
========================================== */

const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});


document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

    });

});


/* ==========================================
   SCROLL TOP BUTTON
========================================== */

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        scrollBtn.classList.add("show");

    }else{

        scrollBtn.classList.remove("show");

    }

});


scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   ACTIVE NAVBAR
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop-150;

        const height = section.clientHeight;

        if(scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


/* ==========================================
   PARALLAX HERO IMAGE
========================================== */

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth/2-e.clientX)/40;

    const y = (window.innerHeight/2-e.clientY)/40;

    heroImage.style.transform = `translate(${x}px,${y}px)`;

});


/* ==========================================
   REVEAL ON SCROLL
========================================== */

const reveal = document.querySelectorAll(

".section-title,.skill-card,.project-card,.timeline-item,.certificate-card,.stat-card"

);

function revealElement(){

    reveal.forEach(item=>{

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight-100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealElement);

revealElement();


/* ==========================================
   PROJECT CARD HOVER
========================================== */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX-rect.left;

        const y = e.clientY-rect.top;

        card.style.setProperty("--x",x+"px");

        card.style.setProperty("--y",y+"px");

    });

});
