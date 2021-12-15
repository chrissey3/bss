import sellFunction from "../Services/sellfunctions.js";
export default class SellPage {
    constructor() {
        this.template();
        //this.clickEvents();
        //this.sellFunction.initSells();
        this.modal = document.querySelector("#addProduct").style.display = "none";
        
        
        

    }


   
    template() {
        
        document.querySelector('#webapp').innerHTML += /*html*/
            `
            <main id="sell" class="page">
                <section class="sell-container" id="sell-container">
                    <section id="addBtn">
                    <!--add buttone for products to sell-->
                        <button type="button" id="show-modal-btn">Add Product</button>
                        
                        <!-- Vertically centered modal form -->
                        <form id="addProduct">
                        <header>
                            <span class="close">&times;</span>
                            <div id="divideHead">
                            <h1>Add or Edit an item on your list</h1>
                            <p>please enter the details of the item you would like to sell or distribute</p>
                            </div>
                        </header>
                        <div class="row">
                                <div class="col">
                                   <section id="filter-sell">
                                    <!--filter category options-->
                                        <label for="category">
                                            <select id="categoryBy" onchange="">
                                                <option value="All" selected>Select a category</option>
                                                <option value="fruits">Fruits</option>
                                                <option value="vegetables">Vegetables</option>
                                                <option value="dairies">Dairies</option>
                                                <option value="proteins">Proteins</option>
                                                <option value="grains">Grains</option>
                                            </select>
                                        </label>
                                    </section> 
                                </div>
                                 <div class="col">
                                    <input id="product-name" type="text" class="form-control" placeholder="Product name" aria-label="Last name">
                                </div>    
                                </div>
                            <div class="row">
                                <div class="col">
                                    <input id="product-purchase" type="date" class="form-control" placeholder="Date of purchase" aria-label="adr">
                                </div>
                                <div class="col">
                                    <input id="product-bestBefore" type="date" class="form-control" placeholder="Best before date" aria-label="City name">
                                </div>
                            </div>
                            <div class="row">
                                
                                <div class="col">
                                    <input id="product-price" type="text" class="form-control" placeholder="Price/Pcs/Kr (optional)" aria-label="Phone number">
                                </div>
                            </div>
                            <div class="row">
                                
                                <div class="col">
                                    <input id="product-img" type="file" class="form-control" placeholder="/Image path" aria-label="/img">
                                
                            </div>
                            <div class="row">
                                <div class="col">
                                     <textarea class="form-control" id="product-description" placeholder="Give a short state description of your product..."></textarea>
                                     
                                </div>
                                
                            </div>
                          
                                 <button type="button" id="add-btn" >Add Product</button>
                        </form>


                        
                    </section>  

                    

                <!----table of products start-->
                <div id="sell-table" class="table-responsive">
                    <table class="table table-hovere">
                          
                        <thead>
                        <tr>
                            
                            <th scope="col">CATEGORY</th>
                            <th scope="col">NAME</th>
                            <th scope="col">EXPIRATION DATE</th>
                            <th scope="col">PRICE</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                    <!--where the fetched data is printed -->
                        <tbody id="productList">
                            
                        </tbody> 
                    </table>
                    <!----table end-->
                </div>
                      
            </main>
                
        `;
        
        //document.querySelector("#show-modal-btn").onclick = () => showmodal();
    }


    showmodal(){
        let modal = document.querySelector("#addProduct");
        modal.style.display = "block";
    }

    closeModal(){
        let modal = document.querySelector("#addProduct");
        modal.style.display = "none";
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
    
    
    async CreatePost(){
	    const category = document.querySelector("#categoryBy").value;
        const price = document.querySelector("#product-price").value;
        const seller = JSON.parse(localStorage.getItem("loggedUser"));
        const name = document.querySelector("#product-name").value;
        const purchase = document.querySelector("#product-purchase").value;
        const best = document.querySelector("#product-bestBefore").value;
        const description = document.querySelector("#product-description").value;
    
        const post = {category: category, purchase: purchase, best: best, price: price, seller: seller.id, name: name, description: description };
        console.log(post);
    
        const response = await fetch("../backend/phpservice/postHandler.php/?action=create", {
            method: "POST",
            body: JSON.stringify(post)
        });
    
        const data = await response.json();
        console.log(data);
        await sellFunction.initSells();
        this.closeModal();
        //localStorage.setItem("messageChain", data.message);
        //console.log(data.message);
    }

    
    

}




