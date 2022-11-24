(function(){
  function animate_slideshow(containerID) {
    let slideIndex = 0;
    let ticked = false;
    const container = document.getElementById(containerID);
    const slideClass = container.querySelector(".slide-content").className;
    run(true);

     onclick="plusSlides(1)"

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
      ticked = true;
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
      ticked = true;
    }

    /**
     * Add buttons and define their functionality
     * Called once at the start. Never call it again.
     */
    function setButtons(container){
      let prevButton = container.querySelector(".prev")
      prevButton.onclick = () => plusSlides(-1);
      let nextButton = container.querySelector(".next")
      nextButton.onclick = () => plusSlides(1);

      let contentItems = container.getElementsByClassName("slide-content");
      let dotContainer = container.querySelector(".dots");
      for (let i=1; i<=contentItems.length; i++){
        let dotSpan = document.createElement('span');
        if (i==1){
          dotSpan.className = "dot active";
        } else {
          dotSpan.className = "dot";
        }
        dotSpan.onclick = () => currentSlide(i);
        dotContainer.appendChild(dotSpan)
      }
    }

    function showSlides(n) {
      let slides = container.getElementsByClassName("slide-content");
      let dots = container.getElementsByClassName("dot");
      if (container.querySelector(".fade-in") != null){
        container.querySelector(".fade-in").className = slideClass + " fade-out";
      }
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      slides[slideIndex-1].className = slideClass + " fade-in";

      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      dots[slideIndex-1].className += " active";
    }

    function run(first){
      if (first){
        setTimeout(()=>{
          slideIndex++;
          setButtons(container);
          showSlides(1);
        }, 50);
      }
      setTimeout(()=>{
        if (!ticked) {
            slideIndex++;
            showSlides(slideIndex);
        }
        run();
        ticked = false;
      }, 5*1000);
    }
  }

  const slideShowDivs = document.getElementsByClassName("slideshow-container");
  setTimeout(()=>{
    Array.prototype.forEach.call(slideShowDivs, (el) => animate_slideshow(el.id));
  }, 50);
})();
