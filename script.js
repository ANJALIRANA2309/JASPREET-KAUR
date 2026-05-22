const typingText = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Developer"
];

let index = 0;
let charIndex = 0;

const typingElement =
document.querySelector(".typing");

function type(){

    if(charIndex < typingText[index].length){

        typingElement.textContent +=
        typingText[index].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }else{

        setTimeout(erase,1500);
    }
}

function erase(){

    if(charIndex > 0){

        typingElement.textContent =
        typingText[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }else{

        index++;

        if(index >= typingText.length){
            index = 0;
        }

        setTimeout(type,500);
    }
}

document.addEventListener(
    "DOMContentLoaded",
    function(){
        setTimeout(type,500);
    }
);