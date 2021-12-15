 import profileF from "../Services/profile.js";
 export default class ProfilePage {
    constructor() {
        this.template();
        //profileF.initUpdate();
    }

    template() {
        document.querySelector('#webapp').innerHTML += /*html*/
            `
            <main id="profile" class="page">
                <section class="pages_body" id="profile_body">

                
            <div class="parts" id="main-container-update">
                
                
                <!-- signup form -->  
                 <section class="parts">
                 <section id="form-content">
                    <header class="topbar">
                        <h1> Update Profile </h1>
                        <p> Change the information you wish to edit on your profile and press update to continue with the app.</p>
                    </header>
                        <form>
                        <div class="row">
                                <div class="col">
                                    <input id="signFirstname" value="" type="text" class="form-control" placeholder="First name" aria-label="First name">
                                </div>
                                 <div class="col">
                                    <input id="signLastname" type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                                </div>    
                                </div>
                            <div class="row">
                                
                                <div class="col">
                                    <input id="signCityname" type="text" class="form-control" placeholder="City name" aria-label="City name">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input id="signEmail" type="text" class="form-control" placeholder="Email" aria-label="Email">
                                </div>
                                <div class="col">
                                    <input id="signPhone" type="text" class="form-control" placeholder="Phone number" aria-label="Phone number">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input id="signPassword" type="password" class="form-control" placeholder="Password" aria-label="Password">
                                </div>
                                
                      
                        </form>
                        <button type="button" id="btn-update" >Update</button>
                    </section>
                           
                    </section>
 
                </div> 
                  
                    
                </section>             
            </main>
                
        `;
    }


    

}

