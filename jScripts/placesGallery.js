var currentIndex = 1;

function moveSlides(n) {
    showSlides(currentIndex += n);
}

function setSlide(n) {
    currentIndex = n;
    setImage();
}


function showSlides(n) {
    var i;
    var mainSlides = document.getElementsByClassName("mainSlide");

    if (n > mainSlides.length) {
        currentIndex = 1
    }

    if (n < 1) {
        currentIndex = mainSlides.length
    }

    setImage();
}


function setImage() {
    var mainSlides = document.getElementsByClassName("mainSlide");
    var thumbnails = document.getElementsByClassName("tumbnail");

    for (i = 0; i < mainSlides.length; i++) {
        mainSlides[i].style.display = "none";
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }

    mainSlides[currentIndex - 1].style.display = "block";
    thumbnails[currentIndex - 1].className += " active";

}