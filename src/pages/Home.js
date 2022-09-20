function Home() {
    let content = document.querySelector('.content');
    let div = document.createElement('div');
    div.classList.add('Home-div');

    let ResName = document.createElement('div');
    ResName.innerHTML = "eat'n run";
    ResName.classList.add("Home-Res-Name");

    let para = document.createElement("div"); 
    para.innerHTML = "fast food that makes your day.";
    para.classList.add('Home-div-1-para')

    let Order = document.createElement('button');
    Order.innerHTML = "Order Now";
    Order.classList.add('Order-btn');

    let div2 = document.createElement("div");
    div2.classList.add('Home-div-1');
    div2.appendChild(ResName);
    div2.appendChild(para);
    div2.appendChild(Order);
    div.appendChild(div2);
    div.appendChild(GenralDetails());
    content.appendChild(div);
}

function GenralDetails() {
    let div = document.createElement('div');
    div.classList.add('Home-div-2');

    let time = document.createElement('div');
    let location = document.createElement('div');
    time.innerHTML = "🕐 Monday-Thrusday: 8am - 8pm";
    location.innerHTML = "📌 Near Pier 39 California";

    time.classList.add("Home-time")
    location.classList.add('Home-location');

    div.appendChild(time);
    div.appendChild(location);
    return div;
}

export default Home;