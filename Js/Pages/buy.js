import buyFunction from "../Services/buyfunctions.js";
export default class BuyPage {
    constructor() {

        this.template();
        this.buyFunction = buyFunction;
        //this.buyFunction.initBuys();

    }
    //visual template as to show the printed data in the DOM 
    template() {
        document.querySelector("#webapp").innerHTML += /*html*/
            `
            <main id="buy" class="page">
                <section class="buy-container" id="buy_content">
                <section id="filter-search">
                <!--filter and searh options-->
                     <label for="filtertBy">Filter:
                        <select id="filterBy" onchange="">
                        <option value="All" selected>All</option>
                        <option value="fruits">Fruits</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="dairies">Dairies</option>
                        <option value="proteins">Proteins</option>
                        <option value="grains">Grains</option>
                        <input type="search" id="filterInput" placeholder="Search" onkeyup="" onsearch="search('')">
                        </select>
                    </label>
                </section>  

                <!----table start-->
                <div class="table-responsive">
                    <table class="table table-hovere">
                          
                        <thead>
                        <tr>
                            <th scope="col">PRICE</th>
                            <th scope="col">SELLER</th>
                            <th scope="col">CATEGORY</th>
                            <th scope="col">NAME</th>
                            <th scope="col">DESCRIPTION</th>
                            <th scope="col">EXPIRATION</th>
                            <th scope="col">CONTACT</th>
                        </tr>
                        </thead>
                    <!--where the fetched data is printed -->
                        <tbody id="list"></tbody> 
                    </table>
                    <!----table end-->
                </div>
            </section>
            </main>
                
        `;
    }





}