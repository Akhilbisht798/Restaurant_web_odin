import pageLoad from '../pages/pageload'

function remove() {
    let content = document.querySelector('.content');
    content.innerHTML = "";
    console.log('has removed');
    pageLoad();
}

export default remove;