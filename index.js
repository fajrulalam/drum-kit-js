let numberOfDrums  = document.querySelectorAll(".drum").length;
for (i = 0; i<numberOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got clicked");
    })
}