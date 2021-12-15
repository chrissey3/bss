class MessagesFunction {
  constructor() {
    
    this.initMessages();
  }

  initMessages() {
    //this._messages = await this.getAllMessages();
    //this.appendMessages();
    this.ShowConnected();

    //this.appendMatchMessages();
    //this.clickEvents();
  }

  /*Own code*/

  async ShowConnected() {
    
    //const from = document.querySelector("#fromShow").value;
    const loggedUser = await JSON.parse(localStorage.getItem("loggedUser"));
    const from = await loggedUser.id;
    const user = { from: from };

    //const users = to;
    console.log(from);

    const response = await fetch(
      "../backend/phpservice/messageHandler.php/?action=init",
      {
        method: "POST",
        body: JSON.stringify(user),
      }
    );

    const data = await response.json();
    console.log(data);

    let htmlTemplate;
    for (const user of data.userCon) {
      htmlTemplate +=
        /*html*/
        `
            <section class="userslist" id="${user.id}" >
                <p>${user.firstname} ${user.lastname}</p> <p>---</p>
                
            </section>
            `;
      document.querySelector(".messages-users").innerHTML = htmlTemplate;
      //<p>${userMessage.productName}</p>
    }
    //document.querySelectorAll(".btn").onclick = () => showChain(this.id);
    this.event()
  }
  event(){
  document.querySelectorAll(".userslist").forEach((item) => {
    item.addEventListener("click", (event) => {
      this.showChain(item.id);
      console.log(item.id);
    });
  });
}
  
 async addCon(){
   const id = JSON.parse(localStorage.getItem("sellerId"));
   console.log(id);
   const response = await fetch(
    "../backend/phpservice/messageHandler.php/?action=new",
    {
      method: "POST",
      body: JSON.stringify(id),
    }
  );
  const data = await response.json();
  console.log(data);
  const seller = data.seller;
  console.log(seller);

  
  let htmlTemplate =
  /*html*/
  `
      <section class="userslist" id="${seller.id}" >
          <p>${seller.firstname} ${seller.lastname}</p> <p>---</p>
          
      </section>
      `;
document.querySelector(".messages-users").innerHTML += htmlTemplate;
//<p>${userMessage.productName}</p>

//document.querySelectorAll(".btn").onclick = () => showChain(this.id);
this.event();
  }
 

  async showChain(tot) {
    const to = tot;
    //const to = document.querySelector(".btn").id;
    localStorage.setItem("messageUser", JSON.stringify(to));
    //const from = document.querySelector("#fromShow").value;
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const from = loggedUser.id;
    const user = { to: to, from: from };

    //const users = to;
    console.log(from);

    const response = await fetch(
      "../backend/phpservice/messageHandler.php/?action=show",
      {
        method: "POST",
        body: JSON.stringify(user),
      }
    );

    const data = await response.json();
    console.log(data);
    //localStorage.setItem("messageChain", data.message);
    console.log(data.message);

    let htmlTemplate;
    for (const message of data.message) {
      if (message.from_id == loggedUser.id) {
        htmlTemplate += /*html*/ `
               <span>
                <section class="messages-send">
                <p>${message.the_message}</p>
                 </section>
                 </span>
               `;
      }else{
        htmlTemplate += /*html*/ `
        <span>
         <section class="messages-get">
         <p>${message.the_message}</p>
          </section>
          </span>
        `;
      }

      document.querySelector("#msg").innerHTML = htmlTemplate;
      
    }
    

    
    //document.querySelector("#btnSend").onclick = () => sendMessage();
  }
  async sendMessage(){
    const message = document.querySelector("#sentMsg").value;
    //const to = document.querySelector("#to").value;
    const to = JSON.parse(localStorage.getItem("messageUser"));
    //const from = document.querySelector("#from").value;
    const from = JSON.parse(localStorage.getItem("loggedUser"));

    const messageFetch = { message: message, to: to, from: from.id };
    console.log(messageFetch);

    const response = await fetch("../backend/phpservice/messageHandler.php/?action=send", {
        method: "POST",
        body: JSON.stringify(messageFetch)
    });

    const data = await response.json();
    console.log(data);
    this.showChain(to);
    
}
}

const userMessages = new MessagesFunction();
export default userMessages;
