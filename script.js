// COUNTDOWN

function updateCountdown(){

    const target = new Date("October 10, 2026 00:00:00").getTime();

    const now = new Date().getTime();

    const gap = target - now;


    const days = Math.floor(gap / (1000 * 60 * 60 * 24));

    const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((gap / (1000 * 60)) % 60);

    const seconds = Math.floor((gap / 1000) % 60);


    if(document.getElementById("days")){

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

    }

}

updateCountdown();

setInterval(updateCountdown,1000);
function showSurprise(){

document.getElementById("loveMessage").style.display="block";

document.getElementById("surpriseText").innerHTML=
"Your surprise is here ❤️✨";

}
// FLOATING HEARTS ❤️

const hearts = document.querySelector(".hearts");

if(hearts){

setInterval(()=>{

let heart = document.createElement("span");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"%";
heart.style.bottom="-20px";
heart.style.fontSize=Math.random()*20+15+"px";
heart.style.animation="float 6s linear";

document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},6000);


},500);

}
