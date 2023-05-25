window.onscroll = function(){
var count = 0;
var project1 = setInterval(project,100);
function project(){
    count ++;
    var num1 = document.getElementById("lnum1").innerHTML=count;
    if(count == 50){
        clearInterval(project1);
    }
}
var count2 = 0;
var project2 = setInterval(project_a,1000);
function project_a(){
    count2 ++;
    var num2 = document.getElementById("lnum2").innerHTML=count2;
    if(count2 == 50){
        clearInterval(project2);
    }
}

var count3 = 0;
var project3 = setInterval(project_b,100);
function project_b(){
    count3 ++;
    var num3 = document.getElementById("lnum3").innerHTML=count3; 
    if(count3 == 100){
        clearInterval(project3);
    }
}

var count4 = 0;
var project4 = setInterval(project_c,10);
function project_c(){
    count4 ++;
    var num4 = document.getElementById("lnum4").innerHTML=count4;
    if(count4 == 5){
        clearInterval(project4);
    }
}
}
/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */
const accordion = document.getElementsByClassName('lbody5_c_container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
var typed = new Typed(".auto-text", {
    strings: ["Our Trusted Partner","Your Pet Our Family","Everthing For Our Pet"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});
let value = document.querySelectorAll(".lbody4_e_a_2_num");
let interval = 10000;
value.forEach(value => {
    let startValue = 0;
    let endValue = parseInt(value.getAttribute("data-val"));
    let duaration = Math.floor(interval/endValue);
    let counter = setInterval(function(){
        startValue += 1;
        value.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duaration)
})

const lbody7_c_11 = document.getElementById("lbody7_c_11")
const lbody7_c_22 = document.getElementById("lbody7_c_22")
const lobdy7_dd = document.getElementById("lobdy7_dd2")
const lbody7_d_4 = document.getElementById("lbody7_d_4")
const lbody7_d_2_b_3 = document.getElementById("lbody7_d_2_b_3");
const lbody7_d_2_b_2 = document.getElementById("lbody7_d_2_b_2");
const lbody7_d_2_b_1 = document.getElementById("lbody7_d_2_b_1");
// myElm.style.backgroundColor = "green"
function fb (){
    lbody7_c_11.style.backgroundColor = "wheat"
    lbody7_c_11.style.color = "black"
    lbody7_c_22.style.backgroundColor = "black"
    lbody7_c_22.style.color = "white"
    lobdy7_dd.style.backgroundColor = "  #253d4e"
    lobdy7_dd.style.color = "white"
    lbody7_d_4.style.backgroundColor = "rgb(255, 68, 0)";
    lbody7_d_4.style.color = "white"
    lbody7_d_4.style.border = "none"
    lbody7_d_2_b_1.innerHTML = "39"
    lbody7_d_2_b_2.innerHTML = "49"
    lbody7_d_2_b_3.innerHTML = "99"
}
lbody7_c_11.onclick = fb;
function fb1 () {
    lbody7_c_22.style.backgroundColor = "wheat"
    lbody7_c_22.style.color = "black"
    lbody7_c_11.style.backgroundColor = "black"
    lbody7_c_11.style.color = "white"
    lobdy7_dd.style.backgroundColor = " rgb(250, 244, 237)"
    lobdy7_dd.style.color = "black"
    lbody7_d_4.style.backgroundColor = "white";
    lbody7_d_4.style.color = "black"
    lbody7_d_4.style.border = "1px solid red"
    lbody7_d_2_b_1.innerHTML = "390"
    lbody7_d_2_b_2.innerHTML = "490"
    lbody7_d_2_b_3.innerHTML = "990"

}
lbody7_c_22.onclick = fb1;
