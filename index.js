

document.addEventListener("keydown" , function(e) {

    console.log(e);

    var box = document.getElementsByClassName("box")[0];
    console.log(box)

    var posTop = box.offsetTop;
    var posLeft = box.offsetLeft;

    switch(e.key){
        case "ArrowUp":
            box.style.marginTop = (posTop - 40) + "px";
            break;
        case "ArrowDown":
            box.style.marginTop = (posTop + 40) + "px";
            break;
        case "ArrowLeft":
            box.style.marginLeft = (posLeft - 40) + "px";
            break;
        case "ArrowRight":
            box.style.marginLeft = (posLeft + 40) + "px";
            break;
    }

})

document.getElementById("btn").addEventListener("click", function() {
    var box =  document.getElementsByClassName("box")[0];
    box.style.marginLeft = "3px";
    box.style.marginTop = "700px";
})