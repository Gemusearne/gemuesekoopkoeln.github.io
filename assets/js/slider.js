(function(){
  function animate_slideshow(containerID) {
    let slideIndex = 1;
    const container = document.getElementById(containerID);
    run(true);

     onclick="plusSlides(1)"
  
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
  
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
        }else{
          dotSpan.className = "dot";
        }
        dotSpan.onclick = () => currentSlide(i);
        dotContainer.appendChild(dotSpan)
      }
    }

    function showSlides(n) {
      let i;
      let slides = container.getElementsByClassName("slide-content");
      let dots = container.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    } 

    function run(first){
      if (first){
        setTimeout(()=>{
          setButtons(container);
          showSlides(1);
          slideIndex++;
        }, 50);
      }
      setTimeout(()=>{
          showSlides(slideIndex);
          slideIndex++;
          run();
        }, 5*1000);
    }
  }

  const slideShowDivs = document.getElementsByClassName("slideshow-container");
  setTimeout(()=>{
    Array.prototype.forEach.call(slideShowDivs, (el) => animate_slideshow(el.id));
  }, 50);
})();
