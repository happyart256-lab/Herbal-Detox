/*=========================================
    GREENBASKET JAVASCRIPT
=========================================*/

// Select Elements
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll("nav ul li a");

/*=========================================
    OPEN SIDEBAR
=========================================*/

menuBtn.addEventListener("click", () => {

    sidebar.classList.add("active");
    overlay.classList.add("active");

});

/*=========================================
    CLOSE SIDEBAR
=========================================*/

closeBtn.addEventListener("click", closeSidebar);

overlay.addEventListener("click", closeSidebar);

function closeSidebar(){

    sidebar.classList.remove("active");
    overlay.classList.remove("active");

}

/*=========================================
    CLOSE SIDEBAR AFTER CLICKING A LINK
=========================================*/

document.querySelectorAll(".sidebar a").forEach(link=>{

    link.addEventListener("click",()=>{

        closeSidebar();

    });

});

/*=========================================
    ACTIVE NAVIGATION
=========================================*/

navLinks.forEach(link=>{

    link.addEventListener("click",function(){

        navLinks.forEach(item=>{

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});

/*=========================================
    STICKY HEADER SHADOW
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow="0 8px 25px rgba(0,0,0,.12)";

    }else{

        header.style.boxShadow="0 3px 15px rgba(0,0,0,.08)";

    }

});

/*=========================================
    HERO FADE ANIMATION
=========================================*/

const heroText = document.querySelector(".hero-text");
const heroImage = document.querySelector(".hero-image");

window.addEventListener("load",()=>{

    heroText.style.opacity="0";
    heroImage.style.opacity="0";

    heroText.style.transform="translateX(-50px)";
    heroImage.style.transform="translateX(50px)";

    setTimeout(()=>{

        heroText.style.transition="1s";
        heroImage.style.transition="1s";

        heroText.style.opacity="1";
        heroImage.style.opacity="1";

        heroText.style.transform="translateX(0)";
        heroImage.style.transform="translateX(0)";

    },300);

});

/*=========================================
    BUTTON HOVER EFFECT
=========================================*/

const buttons = document.querySelectorAll(".shop,.explore");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-3px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0px)";

    });

});

/*=========================================
    IMAGE HOVER EFFECT
=========================================*/

const heroImg = document.querySelector(".hero-image img");

if(heroImg){

heroImg.addEventListener("mouseenter",()=>{

heroImg.style.transform="scale(1.04)";
heroImg.style.transition=".5s";

});

heroImg.addEventListener("mouseleave",()=>{

heroImg.style.transform="scale(1)";

});

}

/*=========================================
    SCROLL TO TOP
=========================================*/

window.addEventListener("beforeunload",()=>{

window.scrollTo(0,0);

});

console.log("GreenBasket Loaded Successfully!");

/*=========================
SCROLL TO TOP
=========================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==========================
SEARCH PRODUCTS
==========================*/

const search = document.getElementById("search");

if(search){

search.addEventListener("keyup",()=>{

const value = search.value.toLowerCase();

document.querySelectorAll(".product-card").forEach(card=>{

const title = card.querySelector("h3").innerText.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

/*==========================
CATEGORY FILTER
==========================*/

document.querySelectorAll("#categoryList li").forEach(item=>{

item.onclick=function(){

const filter=this.dataset.filter;

document.querySelectorAll(".product-card").forEach(card=>{

if(filter==="all"){

card.style.display="block";

}else if(card.dataset.category===filter){

card.style.display="block";

}else{

card.style.display="none";

}

});

}

});

/*==========================
ADD TO CART
==========================*/

let count=0;

const cartNumber=document.querySelector(".cart span");

document.querySelectorAll(".cart-btn").forEach(btn=>{

btn.onclick=function(){

count++;

cartNumber.innerHTML=count;

this.innerHTML="✓ Added";

setTimeout(()=>{

this.innerHTML='<i class="fas fa-shopping-cart"></i> Add';

},1200);

}

});


/*=========================
WISHLIST
=========================*/

document.querySelectorAll(".wishlist").forEach(icon=>{

icon.onclick=function(){

this.classList.toggle("fa-solid");

this.classList.toggle("fa-regular");

this.style.color="red";

};

});

/*=========================
QUICK VIEW
=========================*/

const modal=document.getElementById("quickView");

const modalImage=document.getElementById("modalImage");

const modalTitle=document.getElementById("modalTitle");

const modalPrice=document.getElementById("modalPrice");

const modalDescription=document.getElementById("modalDescription");

document.querySelectorAll(".quick-view").forEach(button=>{

button.onclick=function(){

const card=this.closest(".product-card");

modal.style.display="flex";

modalImage.src=card.querySelector("img").src;

modalTitle.innerHTML=card.querySelector("h3").innerHTML;

modalPrice.innerHTML=card.querySelector(".price span").innerHTML;

modalDescription.innerHTML="Fresh organic product carefully selected for quality and freshness.";

};

});

document.querySelector(".close-modal").onclick=function(){

modal.style.display="none";

};

window.onclick=function(e){

if(e.target==modal){

modal.style.display="none";

}

};

/*=========================
SAVE TO CART
=========================*/

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".cart-btn").forEach(button=>{

button.addEventListener("click",()=>{

const product={

name:button.dataset.name,

price:Number(button.dataset.price),

qty:1

};

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

alert("Product Added!");

});

});

/*=========================
LOAD CART
=========================*/

const cartItems=document.getElementById("cartItems");

const grand=document.getElementById("grandTotal");

if(cartItems){

let total=0;

cart.forEach((item,index)=>{

total += item.price * item.qty;

cartItems.innerHTML += `

<tr>

<td>${item.name}</td>

<td>$${item.price}</td>

<td>${item.qty}</td>

<td>$${(item.price*item.qty).toFixed(2)}</td>

<td>

<button onclick="removeItem(${index})">

❌

</button>

</td>

</tr>

`;

});

grand.innerHTML=total.toFixed(2);

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

}

/*======================
QUANTITY BUTTONS
======================*/

const qty=document.getElementById("qty");

const plus=document.getElementById("plus");

const minus=document.getElementById("minus");

if(plus){

plus.onclick=()=>{

qty.value++;

}

}

if(minus){

minus.onclick=()=>{

if(qty.value>1){

qty.value--;

}

}

}

/*======================
IMAGE GALLERY
======================*/

const main=document.querySelector(".main-image");

document.querySelectorAll(".thumbnails img").forEach(img=>{

img.onclick=function(){

main.src=this.src;

}

});