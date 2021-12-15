import spaRoutes from "../Services/sparoutes.js";
import buyfunctions from "../Services/buyfunctions.js";
import sellFunction from "../Services/sellfunctions.js";
import userMessages from "../Services/messages.js";
import profileF from "../Services/profile.js";
//const prof = new profile();
export default class LogIn {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#webapp").innerHTML += /*html*/ `
    
            <main id="logIn" class="page">
            <section class="pages_body" id="login_body">
               
            
            <div class="parts" id="main-container">
                    <img id="img-part" src="/Images/app/BSSFood.png" alt="">
                
                <!-- login form -->  
                 <section class="parts">
                 <section id="log-form-content">
                    <header class="topbar" id="log-top">
                        <h1>Log In </h1>
                        <p> please sign in to your account to continue with the app</p>
                    </header>
                        <form id="log-form">
                            <div class="row">
                                <div class="col">
                                    <input id="loginMail" type="text" class="form-control" placeholder="Email" aria-label="Email">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input id="loginPassword" type="password" class="form-control" placeholder="Password" aria-label="Password">
                                </div>
                            </div>
                      
                        </form>
                    </section>
                            <button type="button" id="btn-log" class="btn btn-primary">Log in</button>
                    </section>
 
                </div> 
                  
                <div class="parts" id="log-side-container">
                    <h1>Welcome Back!</h1>
                    <p>To keep track of your sales and purchases, please sign in with your personal information</p>
                    <div class="inner_child">
                        <p>Don't have an account yet?</p>
                        <a href="#signUp"><button type="button" id="btn-sign" class="btn btn-primary">SIGN UP</button></a>
                    </div>
                </div>  

            </section>
        </main>

      
    `;
    }
    async login() {
        const mail = document.querySelector("#loginMail").value;
        const password = document.querySelector("#loginPassword").value;
        const user = { mail: mail, password: password };
        console.log(user);
    
        const response = await fetch("../backend/phpservice/login.php", {
            method: "POST",
            body: JSON.stringify(user)
        });
    
        const data = await response.json();
        console.log(data);
        localStorage.setItem("loggedUser", JSON.stringify(data.user));
        console.log(data.user);
        if(data.user){
        buyfunctions.initBuys();
        sellFunction.initSells();
        userMessages.initMessages();
        spaRoutes.navigateTo('buy');
        profileF.initUpdate();
    }
    }
}