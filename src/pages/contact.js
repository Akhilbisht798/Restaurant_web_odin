function Contact() {
    let content = document.querySelector('.content');
    let div = document.createElement('div');
    div.classList.add('Contact-Main-Div');

    let Contacthead = document.createElement('div');
    Contacthead.innerHTML = "Contact Us";
    Contacthead.classList.add('Contact-Head');

    let ContactUsDiv = document.createElement('div');

    let time = document.createElement('div');
    let location = document.createElement('div');
    let phone = document.createElement('div');
    phone.innerHTML = "📞 (222)-333-1111";
    time.innerHTML = "🕐 Monday-Thrusday: 8am - 8pm";
    location.innerHTML = "📌 Near Pier 39 California";

    div.appendChild(Contacthead);

    ContactUsDiv.appendChild(time);
    ContactUsDiv.appendChild(location);
    ContactUsDiv.appendChild(phone)
    div.appendChild(ContactUsDiv);
    ContactUsDiv.classList.add('Contact-Details')

    content.appendChild(div);
}

export default Contact;