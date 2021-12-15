import spaRoutes from "../Services/sparoutes.js";
class ProfileFunction{
initUpdate(){
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    console.log(user.firstname);
    document.getElementById("signFirstname").value = user.firstname;
    document.getElementById("signLastname").value = user.lastname;
    document.getElementById("signCityname").value = user.city_name;
    document.getElementById("signEmail").value = user.email;
    document.getElementById("signPhone").value = user.phone_number;
    document.getElementById("signPassword").value = user.password;
    
   
}
async Update(){
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const id = user.id;
    const firstname = document.getElementById("signFirstname").value;
    const lastname = document.getElementById("signLastname").value;
    const city = document.getElementById("signCityname").value;
    const mail = document.getElementById("signEmail").value;
    const phone = document.getElementById("signPhone").value;
    const password = document.getElementById("signPassword").value;
    const userUpdate = { id: id, firstname: firstname, lastname: lastname, city: city, mail: mail, phone: phone, password: password};

    const response = await fetch("../backend/phpservice/update.php?action=user", {
        method: "POST",
        body: JSON.stringify(userUpdate)
    });

    
    
   
    
    
    this.initUpdate();
    spaRoutes.navigateTo('sell');
    

}
}

const profileF = new ProfileFunction();
export default profileF;