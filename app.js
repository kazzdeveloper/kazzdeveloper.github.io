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
const ball = document.querySelector("div#Ball");
let mouseX = 0, mouseY = 0;
let outerCircleX = 0, outerCircleY = 0;
let outerCircleSpeed = 0.12;
let ballX = 0, ballY = 0;
let ballSpeed = 1;

function animateOuterCircle(){
  let outerCircledDistX = mouseX - outerCircleX;
  let outerCircledDistY = mouseY - outerCircleY;
  outerCircleX += (outerCircledDistX * outerCircleSpeed);
  outerCircleY += (outerCircledDistY * outerCircleSpeed);
  outerCircle.style.left = outerCircleX + "px";
  outerCircle.style.top = outerCircleY + "px";
  requestAnimationFrame(animateOuterCircle);
}

function animateBall(){
  let ballDistX = mouseX - ballX;
  let ballDistY = mouseY - ballY;
  ballX += (ballDistX * ballSpeed);
  ballY += (ballDistY * ballSpeed);
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
  requestAnimationFrame(animateBall);
}

document.addEventListener("mousemove", function(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
});

animateOuterCircle();
animateBall();


document.addEventListener("mousemove", function(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
})
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
    const ageAndBirthday = ["2009/03/21", currentAge.toString()];
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
var elements = document.querySelectorAll('.modelingProject');

elements.forEach(function(element) {
    var dataColor = element.getAttribute('data-color');

    if (dataColor) {
        element.style.filter = 'drop-shadow(1px 1px 4px ' + dataColor + ')';
    }
});

const email = document.getElementById("email");

email.onclick = function() {
  document.execCommand("copy");
}

email.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", "tibevdb@gmail.com");
    console.log(event.clipboardData.getData("text"))
    email.textContent = "COPIED"
    setTimeout(function() {
        email.textContent = "EMAIL"
      }, 1000);
  }
});