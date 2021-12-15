class SellFunction {
    constructor() {
        
        this._sellItems = [];
        //this.clickEvents();
        this.initSells();
        //this.initSells();
    }
    //istantiating the functions 
    async initSells() {
        this._sellItems = await this.getSellerData();
        await this.appendSells();
        
        
      
    

    }
    
   async edit(){

    
   }

    async remove(id){
        const product = id;
        const response = await fetch("../backend/phpservice/postHandler.php/?action=remove", {
            method: "POST",
            body: JSON.stringify(product)
        });
        const data = await response.json();
        this.initSells();

    }
    async getSellerData() {
        //const search = null;
        //const searchFilter = { search: search };
        const user = await JSON.parse(localStorage.getItem("loggedUser"));
        console.log(user);
        const id = user.id;

        const response = await fetch("../backend/phpservice/postHandler.php/?action=showOwn", {
            method: "POST",
            body: JSON.stringify(id)
        });
        const data = await response.json();
        return data.ownPost;
        
        
    }

    

    //looping through the data and printing all to a specified ID in the DOM
    async appendSells() {
        let htmlTemplate = "";
        for (const product of this._sellItems) {
            htmlTemplate += /*html*/
                `
            <tr id="${product.seller_id}" >
                
                <td>${product.food_category}</td>
                <td>${product.description}</td>
                <td>${product.expiration_date} </td>
                <td>${product.price} kr.</td>
              
                <td><button class="delete-btn" id="${product.id}"> Delete </button> </td>
            </tr>                                
            `;
        }
        document.querySelector("#productList").innerHTML = htmlTemplate;
    
        document.querySelectorAll('.delete-btn').forEach(item => {
            item.addEventListener('click', event => {
              this.remove(item.id);
              console.log(item.id);
              //localStorage.setItem("itemToDelete", item.id);
            })
          })
    }

    clickEvents(){
        //const addItem = document.querySelector("#add-btn");
        //const deleteItem = document.querySelector(`#${this.id} #delete-btn`);
        
        const modal = document.querySelector("#addProduct");
        const addBtn = document.querySelector("#show-modal-btn");
        //const editBtn = document.querySelector("#edit-btn");
        const span = document.getElementsByClassName("close")[0];

        modal.style.display = "none";
        addBtn.onclick = () =>  {
           modal.style.display = "block";
        };
       // editBtn.goToEdit = () => {
         //   modal.style.display = "block"
      //  };

        span.onclick = () =>{
            modal.style.display = "none";
        };

            
        
       
   

}


   

}

const sellFunction = new SellFunction();
export default sellFunction;