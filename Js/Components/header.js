import spaRoutes from "../Services/spaRoutes.js";
export default class Header {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#webapp").innerHTML += /*html*/ `
        <main id="header" class="">
            <section id=logo>
                <a href="#buy">
                    <img src="/Images/app/BSSFood.png" alt="logo">
                </a>
            </section>
              <a href="#logIn" id="logout">logout</button>
            
        </main>
      
    `;
    }
    
    logout(){
        
        
        localStorage.removeItem('loggedUser');
        localStorage.removeItem('sellerId');
        //location.reload();
    }
}