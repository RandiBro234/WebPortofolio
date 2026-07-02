/* ==========================================
   TYPING EFFECT
========================================== */

const typingElement = document.getElementById("typing");

const texts = [
    "Applied Data Science Student",
    "ML Engineer",
    "Data Analyst",
    "AI Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;
let typingSpeed = 90;
let deletingSpeed = 50;
let delay = 1800;

function typeEffect(){

    const currentText = texts[textIndex];

    if(!deleting){

        typingElement.textContent = currentText.substring(0, charIndex + 1);

        charIndex++;

        if(charIndex === currentText.length){

            deleting = true;

            setTimeout(typeEffect, delay);

            return;

        }

    }else{

        typingElement.textContent = currentText.substring(0, charIndex - 1);

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            textIndex++;

            if(textIndex >= texts.length){

                textIndex = 0;

            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? deletingSpeed : typingSpeed
    );

}

typeEffect();