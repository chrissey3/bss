//import autoslide from "../Services/autoslide.js";
export default class SliderPage {
    constructor() {
        this.template();
       // this.autoslide = autoslide;
       // autoslide.showslides();

    }

    template() {
        document.querySelector('#webapp').innerHTML += /*html*/
            `
            <main id="slider" class="page">
                <section class="pages_body" id="slider_body">
                    <!----image slider start ----->  
                    <div class="container-fluid">

                    <section class="slides_container">
                        <!----dots indicator start----->
                            <input type="radio" name="radio-btn" id="radio1" >
                            <input type="radio" name="radio-btn" id="radio2" >
                            <input type="radio" name="radio-btn" id="radio3" >
                            <input type="radio" name="radio-btn" id="radio4" >
                        
                        <!----dots indicator end ----->

                        <!----slide images start------->
                        <section class="slide_img first">
                            <img src="Images/app/img-1.png" alt="">
                        </section>
                        <section class="slide_img">
                            <img src="Images/app/img-2.png"alt="">
                        </section>
                        <section class="slide_img">
                            <img src="Images/app/img-3.png"alt="">
                        </section>
                        <section class="slide_img">
                            <img src="Images/app/img-4.png"alt="">
                        </section>
                        <!-------slide images end---->

                        <!--automatic navigation start-->
                        <div class = "navigation-auto" >
                            <div class = "auto-btn1"> </div> 
                            <div class = "auto-btn2"> </div> 
                            <div class = "auto-btn3"> </div> 
                            <div class = "auto-btn4"> </div>
                        </div> 
                        <!--automatic navigation end --->

                        <!--manual navigation start--->
                        <div class = "navigation-manual" >
                            <label for = "radio1" class = "manual-btn" > </label> 
                            <label for = "radio2" class = "manual-btn" > </label>
                            <label for = "radio3" class = "manual-btn" > </label>
                            <label for = "radio4" class = "manual-btn" > </label> 
                        </div> 
                        <!--manual navigation end-->
                    </section> 
                    <!----image slider end  -----> 
                    <!-----buttons for signup and login start---->
                    <section class="submit_btns">
                        <a class="btn_submit" href="#signUp"><button class="subsBtn" id="sub1">SIGN UP</button></a>
                        <a class="btn_submit" href="#logIn"><button class="subsBtn" id="sub2">  LOG IN </button ></a>
                    </section>
                    <!-----buttons for signup and login end---->    
                </section> 
                </div>           
            </main>
                
        `;
    }




}