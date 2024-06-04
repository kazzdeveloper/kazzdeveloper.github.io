function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }
    return age;
}
const birthdate = '2009-03-21';
document.getElementById('age').textContent = calculateAge(birthdate);

const outerCircle = document.querySelector("div#OuterCircleCursor");
let mouseX = 0;
let mouseY = 0;
let outerCircleX = 0;
let outerCircleY = 0;
let outerCircleSpeed = 0.12;
function animateOuterCircle(){
  let outerCircledDistX = mouseX - outerCircleX;
  let outerCircledDistY = mouseY - outerCircleY;
  outerCircleX = outerCircleX + (outerCircledDistX * outerCircleSpeed);
  outerCircleY = outerCircleY + (outerCircledDistY * outerCircleSpeed);
  outerCircle.style.left = outerCircleX + "px";
  outerCircle.style.top = outerCircleY + "px";
  requestAnimationFrame(animateOuterCircle);
}
animateOuterCircle();

const ball = document.querySelector("div#Ball");
let ballX = 0;
let ballY = 0;
let ballSpeed = 0.8;
function animateBall(){
  let ballDistX = mouseX - ballX;
  let ballDistY = mouseY - ballY;
  ballX = ballX + (ballDistX * ballSpeed);
  ballY = ballY + (ballDistY * ballSpeed);
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
  requestAnimationFrame(animateBall);
}
animateBall();

document.addEventListener("mousemove", function(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));

const ageText = document.getElementById("age");

function loadExternalScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

loadExternalScript('scramble.js', function() {
    const currentAge = calculateAge(birthdate);
    const ageAndBirthday = [currentAge.toString(), "2009/03/21"];
    const ageText = document.getElementById('age');
    const ageScrambled = new TextScramble(ageText);
    let counterAge = 0;
    const nextAge = () => {
        ageScrambled.setText(ageAndBirthday[counterAge]).then(() => {
            setTimeout(() => {
                counterAge = (counterAge + 1) % ageAndBirthday.length;
                nextAge();
            }, 3200);
        });
    };
    nextAge();

    const pasions = ['programming', '3D modeling'];
    const pasionText = document.getElementById('pasion');
    const passionScrambled = new TextScramble(pasionText);
    let counterPassion = 0;

    const nextPassion = () => {
        passionScrambled.setText(pasions[counterPassion]).then(() => { 
        setTimeout(nextPassion, 3200);
    });
        counterPassion = (counterPassion + 1) % pasions.length;
    };
    nextPassion();
});


