import burger from '../img/menu_items/burger.svg'
import pasta from '../img/menu_items/pasta.svg';
import pizza from '../img/menu_items/pizza.svg';
import fries from '../img/menu_items/frechfries.svg';

function Menu() {
    let content = document.querySelector('.content');
    let div = document.createElement('div');
    div.classList.add('Menu-Main-Div')
    let menuhead = document.createElement('div');
    menuhead.innerHTML = "👨🏻‍🍳 Menu";

    menuhead.classList.add("Menu-head")

    div.appendChild(menuhead);
    div.appendChild(createItems(burger,"Cheese Burger", "Order Burger and Enjoy with your freind and family"));
    div.appendChild(createItems(pasta,"pasta", "Order pasta and Enjoy with your freind and family"));
    div.appendChild(createItems(pizza,"Pizza", "Order pizza and Enjoy with your freind and family"));
    div.appendChild(createItems(fries,"Frech Fries", "Order frenchFries and Enjoy with your freind and family"));
    content.appendChild(div);
}

function createItems(imageName, heading, about) {
    let div = document.createElement('div');
    div.classList.add('Menu-Items-Div')
    let imageDiv = document.createElement('img');
    imageDiv.src = imageName; 
    imageDiv.classList.add('Menu-image');
    let head = document.createElement('h3');
    head.innerHTML = heading;  
    let ab = document.createElement('div');
    ab.innerHTML = about;

    let div2 = document.createElement('div');

    div.appendChild(imageDiv);
    div2.appendChild(head);
    div2.appendChild(ab);
    div.appendChild(div2)

    return div;
}

export default Menu;