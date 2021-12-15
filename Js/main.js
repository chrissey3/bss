//webapp pages

import sellFunction from "./Services/sellfunctions.js";
import buyfunctions from "./Services/buyfunctions.js";
import userMessages from "./Services/messages.js";
import SliderPage from "./Pages/slider.js";
import BuyPage from "./Pages/buy.js";
import SellPage from "./Pages/sell.js";
import MessagePage from "./Pages/messages.js";
import ProfilePage from "./Pages/profile.js";
import profileF from "./Services/profile.js";


//components pages
import SignUp from "./Components/signUp.js";
import LogIn from "./Components/logIn.js";
import Header from "./Components/header.js";
import FooterNav from "./Components/footerNav.js";

//service page
import spaRoutes from "./Services/sparoutes.js";

//import pageFunctions from "./Services/pagesfunctions.js";



//declare and init pages
//let sliderpage = new SliderPage();
let signup = new SignUp();
let login = new LogIn();
let header = new Header();
let footer = new FooterNav();
let sell = new SellPage();
let buy = new BuyPage();
let message = new MessagePage();
let profile = new ProfilePage();
//let pageFunctions = new pageFunctions();


//services
spaRoutes.init();
sellFunction.initSells();
buyfunctions.initBuys();


// _autoSlide.showSlides();

document.querySelector("#btn-signup").onclick = () => signup.signup();
document.querySelector("#btn-log").onclick = () => login.login();
document.querySelector("#logout").onclick = () => header.logout();
document.querySelector("#add-btn").onclick = () => sell.CreatePost();

document.querySelector("#show-modal-btn").onclick = () => sell.showmodal();
document.querySelector(".close").onclick = () => sell.closeModal();
var input = document.getElementById("sentMsg");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode == 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("sentMsg").click();
    userMessages.sendMessage();
  }
});
profileF.initUpdate();
document.querySelector("#btn-update").onclick = () => profileF.Update();
