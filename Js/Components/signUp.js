import spaRoutes from "../Services/sparoutes.js";
export default class SignUp {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#webapp").innerHTML += /*html*/
            `
        <main id="signUp" class="page">
            <section class="pages_body" id="signup_body">
               
            
            <div class="parts" id="main-container">
                    <img id="img-part" src="/Images/app/BSSFood.png" alt="">
                
                <!-- signup form -->  
                 <section class="parts">
                 <section id="form-content">
                    <header class="topbar">
                        <h1> Sign Up </h1>
                        <p> please enter your personal details to continue with the app.</p>
                    </header>
                        <form>
                        <div class="row">
                                <div class="col">
                                    <input id="signupFirstname" type="text" class="form-control" placeholder="First name" aria-label="First name">
                                </div>
                                 <div class="col">
                                    <input id="signupLastname" type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                                </div>    
                                </div>
                            <div class="row">
                                <div class="col">
                                    <input id="signupAddress" type="text" class="form-control" placeholder="Address" aria-label="adr">
                                </div>
                                <div class="col">
                                    <input id="signupCity" type="text" class="form-control" placeholder="City name" aria-label="City name">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input id="signupMail" type="text" class="form-control" placeholder="Email" aria-label="Email">
                                </div>
                                <div class="col">
                                    <input id="signupPhone" type="text" class="form-control" placeholder="Phone number" aria-label="Phone number">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input id="signupPassword" type="password" class="form-control" placeholder="Password" aria-label="Password">
                                </div>
                                <div class="col">
                                    <input id="signupPasswordConfirm" type="password" class="form-control" placeholder="Repeat password" aria-label="Repeat password">
                                
                            </div>
                      
                        </form>
                    </section>
                            <button type="button" id="btn-signup" class="btn btn-primary">Sign up</button>
                    </section>
 
                </div> 
                  
                <div class="parts" id="sign-side-container">
                    <h1>Hello, Friend!</h1>
                    <p>Please enter your personal details and start your journey.</p>
                    <div class="inner_child">
                        <p>Already have an account?</p>
                        <a href="#logIn"><button type="button" id="btn-login" class="btn btn-primary">LOG IN</button></a>
                    </div>
                </div>  

            </section>
        </main>

    `;
    }
    async signup() {
        const firstname = document.querySelector("#signupFirstname").value;
        const lastname = document.querySelector("#signupLastname").value;
        const mail = document.querySelector("#signupMail").value;
        const password = document.querySelector("#signupPassword").value;
        const city = document.querySelector("#signupCity").value;
        const phone = document.querySelector("#signupPhone").value;
        const passwordCheck = document.querySelector("#signupPasswordConfirm").value;
    
        const user = { firstname, lastname, mail, password, city, phone, passwordCheck };
        console.log(user);
    
        const response = await fetch("../backend/phpservice/signup.php", {
            method: "POST",
            body: JSON.stringify(user)
        });
    
        const data = await response.json();
        console.log(data);
        spaRoutes.navigateTo('logIn');
        
    }
    
}
