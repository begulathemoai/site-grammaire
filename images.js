let images = Array.from(document.getElementsByClassName("contour-actif"));

for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover",startHover);
    images[i].addEventListener("mouseout",endHover);
    images[i].style.transition = "all 0.2s";
}

console.log("Added Event Listeners to "+String(images.length)+" elements.")

function startHover() {
    this.style.boxShadow = "0px 0px 0px 5px #000000";
    console.log("Start Hover")
}

function endHover() {
    this.style.boxShadow = "none";
    console.log("End Hover");
}
