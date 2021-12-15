import userMessages from "../Services/messages.js";
export default class MessagePage {
    constructor() {
        this.template();
       

    }

    template() {
        document.querySelector('#webapp').innerHTML += /*html*/
            `
            <main id="messages" class="page">
                <section class="messages-container" id="message-container">

                    <section class="messages-sidebar">

                        <span class="messages-users">
                            
                        </span>

                    </section>

                    <section class="messages-content">
                        
                        <header class="message-title"></header>
                        
                        <section class="message-connect" id="msg">
                        <div>
                        </div>
                           
                            

                        </section>

                        <section id="fixed">
                            <div class="row">
                                <div class="col">
                                     <textarea class="form-control" id="sentMsg" placeholder="Send" onclick=""></textarea>
                                     
                                </div>
                                
                            </div>
                        </section>
                    
                    </section>
                    
                </section>             
            </main>
                
        `;
    }




}