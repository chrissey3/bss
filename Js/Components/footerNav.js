export default class FooterNav {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#webapp").innerHTML += /*html*/ `
        <main id="footer" class="tabbar">

                <section class="nav_body">
                            
                            <section class="navigation">

                                <div class="nav-links">
                                    <nav>
                                        <a id="menu1" href="#buy">Buy</a>
                                        <a id="menu2" href="#sell">Sell</a>
                                        <a id="menu3" href="#messages">Messages</a>
                                        <a id="menu4" href="#profile">Profile</a>
                                    </nav>
                                
                                </div>
                            </section>
                        </section>
        </main>
      
     
    `;
    }
}