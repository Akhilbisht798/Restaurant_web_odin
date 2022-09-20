import HomePage from './Home'
import remove from '../function/remove';
import MenuPage from './Menu';
import ContactPage from './contact'

function header() {
    let content = document.querySelector('.content');
    let div = document.createElement('div');
    div.classList.add("navbar");

    let resName = document.createElement('div');
    resName.classList.add("Title");
    resName.innerHTML = "eat'n run";

    let div2 = document.createElement('div');
    div2.classList.add("link");

    let Home = document.createElement('a');
    let Menu = document.createElement('a');
    let contact = document.createElement('a');


    Home.classList.add("links");
    Menu.classList.add("links");
    contact.classList.add("links");

    Home.innerHTML = "Home";
    Home.setAttribute('href',"#");
    Menu.innerHTML = "Menu";
    Menu.setAttribute('href',"#");
    contact.innerHTML = "Contact";
    contact.setAttribute('href',"#");

    Home.addEventListener("click", () => {
        console.log("Home");
        remove();
        HomePage();
    })
    Menu.addEventListener("click", () => {
        console.log("Menu");
        remove();
        MenuPage();
    })
    contact.addEventListener("click", () => {
        console.log("contact");
        remove();
        ContactPage();
    })
    div.appendChild(resName);
    div2.appendChild(Home);
    div2.appendChild(Menu);
    div2.appendChild(contact);
    div.appendChild(div2);
    content.appendChild(div);
}

export default header;