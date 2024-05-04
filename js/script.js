let boxs = document.querySelectorAll(".box");
boxs[0].innerHTML = "box0";
boxs[1].innerHTML = "box1";
boxs[2].innerHTML = "box2";
boxs[3].innerHTML = "box3";
boxs[4].innerHTML = "box4";
boxs[5].innerHTML = "box5";
boxs[6].innerHTML = "box6";
boxs[7].innerHTML = "box7";
boxs[8].innerHTML = "box8";
boxs[9].innerHTML = "box9";
boxs[10].innerHTML = "box10";
boxs[11].innerHTML = "box11";
boxs[12].innerHTML = "box12";
boxs[13].innerHTML = "box13";
boxs[14].innerHTML = "box14";
boxs[15].innerHTML = "box15";
boxs[16].innerHTML = "box16";
boxs[17].innerHTML = "box17";

boxs[0].addEventListener("mouseover", () => {
    boxs[0].innerHTML = "mouseover";
});
boxs[0].addEventListener("mouseout", () => {
    boxs[0].innerHTML = "mouseout";
});

// Get the box2
var box2 = boxs[1];

// Get the offset position of the box2
var sticky = box2.offsetTop;

// Add the active class to box2 when you reach its scroll position. Remove "active" when you leave the scroll position
window.onscroll = function() {
    myFunction();
};

function myFunction() {
    if (window.pageYOffset >= sticky) {
        box2.classList.add("active");
    } else {
        box2.classList.remove("active");
    }
}