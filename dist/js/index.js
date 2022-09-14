let navbar = document.querySelector(".navbar");

document.querySelector('#menu-btn').onclick = ()=> {
    navbar.classList.toggle("inactive");
    searchForm.classList.add("inactive");
    cartItem.classList.add("inactive");
}


let searchForm = document.querySelector(".search-form");
document.querySelector('#search-btn').onclick = ()=> {
    searchForm.classList.toggle("inactive");
    cartItem.classList.add("inactive");
    navbar.classList.add("inactive");
}


let cartItem = document.querySelector(".cart-items-container");
document.querySelector('#cart-btn').onclick = ()=> {
    cartItem.classList.toggle("inactive");
    navbar.classList.add("inactive");
    searchForm.classList.add("inactive");
}

window.onscroll = () =>{
    navbar.classList.add("inactive");
    searchForm.classList.add("inactive");
    cartItem.classList.add("inactive");
}

document.querySelector('.home').onclick =()=>{
    navbar.classList.add("inactive");
    searchForm.classList.add("inactive");
    cartItem.classList.add("inactive");
}

document.querySelector('.about').onclick =()=>{
    navbar.classList.add("inactive");
    searchForm.classList.add("inactive");
    cartItem.classList.add("inactive");
}
document.querySelector('.products').onclick =()=>{
    navbar.classList.add("inactive");
    searchForm.classList.add("inactive");
    cartItem.classList.add("inactive");
}

document.querySelector('.menu').onclick =()=>{
    navbar.classList.add("inactive");
    searchForm.classList.add("inactive");
    cartItem.classList.add("inactive");
}










// alert("hi")





