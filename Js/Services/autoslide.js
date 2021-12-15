/*class AutoSlide{
     constructor(){
       this.showslides();
       
        
     }
     // Auto Slide
    

     showslides() {
         let slideIndex = 0;
         var i;
         var slides = document.getElementsByClassName("slide_img");
         for (i = 0; i < slides.length; i++) {
             slides[i].style.display = "none";
         }
         slideIndex++;
         if (slideIndex > slides.length) {
             slideIndex = 1
           // slides[slideIndex - 1].style.display = "block";
             setTimeout(2000);
             // changge image every 2 seconds
         }
        }
    
}
 const autoslide = new AutoSlide();
 export default autoslide; */