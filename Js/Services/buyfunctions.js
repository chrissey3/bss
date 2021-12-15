import spaRoutes from "../Services/sparoutes.js";
import userMessages from "../Services/messages.js";
class BuyFunction {
    constructor() {
        this._products = [];
        //this.initBuys();
        
    }
    //istantiating the functions 
    async initBuys() {
        this._products = await this.getData();
        this.appendFoods();

    }
    /*getting data response after the defined task the is executed
    (await) wait for a promise before getting a return (async)*/
    async getData() {
        //const search = null;
        //const searchFilter = { search: search };
        const user = await JSON.parse(localStorage.getItem("loggedUser"));
        console.log(user);
        const id = await user.id;

        const response = await fetch("../backend/phpservice/postHandler.php/?action=showPost", {
            method: "POST",
            body: JSON.stringify(id)
        });
        const data = await response.json();
        return data.post;
        
        
    }

    async getSellerName(id){
        const userId = id;
        console.log(userId);


        const response = await fetch("../backend/phpservice/postHandler.php/?action=name", {
            method: "POST",
            body: JSON.stringify(userId)
        });
        const data = await response.json();
        console.log(data);
        return data.sellerName;
    }

    //looping through the data and printing all to a specified ID in the DOM
    async appendFoods() {
        
        let htmlTemplate = "";
        for (let food of this._products) {
            const name = await this.getSellerName(food.seller_id); 
          
            console.log(name);
           
            htmlTemplate += /*html*/
            `
            <tr>

                <td>${food.price} kr.</td>
                <td>${name.firstname} ${name.lastname}</td>
                <td>${food.food_category}</td>
                <td>${food.name}</td>
                <td>${food.description}</td>
                <td>${food.expiration_date}</td>
                <!-- <td>${food.date_of_purchase}</td> -->
                <td><p id="${food.seller_id}"  class="btnContact">Contact</p></td>
            </tr>  
                                        
            `;
        }
        this.Events();
        document.querySelector("#list").innerHTML = htmlTemplate;
        document.querySelectorAll('.btnContact').forEach(item => {
            item.addEventListener('click', event => {
              this.newMessage(item.id, item.name);
              console.log(item.id, item.name);
            })
          })
    }

    async newMessage(id, name){
        localStorage.setItem("sellerId", id);
        localStorage.setItem("product", name)
        await userMessages.ShowConnected();
        userMessages.addCon();
        spaRoutes.navigateTo("messages");
    }

    // added search and filtering function
search(value) {
    console.log(value);
    let searchFood = value.toLowerCase();
    let searchResult = [];

    for (let food of this._products) {

        let description = food.description.toLowerCase();
        //let seller = food.seller.toLowerCase();
        //let category = food.food_category.toLowerCase();
        let productName = food.name.toLowerCase();


        if (
            description.includes(searchFood) ||
            //seller.includes(searchFood) ||
            //category.includes(searchFood) ||
            productName.includes(searchFood)
        ) {

            searchResult.push(food);
        }
    }
    console.log(searchResult);
    this.appendFoods(searchResult);

}          
        
searchBy(option) {
    console.log(option);

    const foodCategory = this._products.filter(food => food.food_category == option);
    this.appendFoods(foodCategory);

    console.log(foodCategory);
    this.appendFoods(foodCategory);

}


Events() {
    window.search = (value) => this.search(value);
    window.searchBy = (option) => this.searchBy(option);
}
}

const buyFunction = new BuyFunction();
export default buyFunction;