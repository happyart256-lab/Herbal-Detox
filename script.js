/*==================================================
    GREENBASKET E-COMMERCE
    PART A - FOUNDATION & SIDEBAR
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=============================
      SELECT ELEMENTS
    =============================*/

    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");
    const navLinks = document.querySelectorAll(".sidebar a");

    /*=============================
      OPEN SIDEBAR
    =============================*/

    if (menuBtn && sidebar && overlay) {

        menuBtn.addEventListener("click", () => {

            sidebar.classList.add("active");
            overlay.classList.add("active");

        });

    }

    /*=============================
      CLOSE SIDEBAR
    =============================*/

    function closeSidebar() {

        if (sidebar) sidebar.classList.remove("active");

        if (overlay) overlay.classList.remove("active");

    }

    if (closeBtn) {

        closeBtn.addEventListener("click", closeSidebar);

    }

    if (overlay) {

        overlay.addEventListener("click", closeSidebar);

    }

    navLinks.forEach(link => {

        link.addEventListener("click", closeSidebar);

    });

});


const products=[

{
name:"Sexual Power Tea",
price:"UGX80,000",
image:"Tea for Sexual.png",
badge:"20% OFF"
},

{
name:" Ulcers Tea",
price:"UGX60,000",
image:"ulcer tea for menu-chart.png",
badge:"Fresh"
},

{
name:"Full Body Cleanser Tea",
price:"UGX90,000",
image:"fullbody cleanser.png",
badge:"Organic"
},

{
name:"Diabetes Tea",
price:"UGX100,000",
image:"diabetes tea.png ",
badge:"Best Sale"
},

{
name:"Blood Pressure Tea",
price:"UGX100,000",
image:"blood pressure tea.png",
badge:""
},

{
name:"Prostate Tea",
price:"UGX85,000",
image:"prostate tea.png",
badge:"15% OFF"
},

{
name:"Joints Pain Tea",
price:"UGX73,000",
image:"joint pain.png",
badge:""
},

{
name:"Weight Loss Belly fat Tea",
price:"UGX75,000",
image:"fullbody cleanser.png",
badge:""
},

{
name:"UTI & Infections Tea",
price:"UGX80,000",
image:"infection tea.png",
badge:"Frozen"
},

{
name:"Nerves & Blood Tea",
price:"UGX83,000",
image:"fullbody cleanser.png",
badge:"Best Sale"
},

{
name:"Colon Cleanser Tea",
price:"UGX85,000",
image:"colon cleanser.png",
badge:"Fresh"
},

{
name:"Womb/ Uterus Cleanser Tea ",
price:"UGX90,000",
image:"uterus cleanser.png",
badge:""
},

{
name:"Orange",
price:"$7.25",
image:"fullbody cleanser.png",
badge:""
},

{
name:"Tomatoes",
price:"$5.80",
image:"fullbody cleanser.png",
badge:"Fresh"
},

{
name:"Cucumber",
price:"$3.60",
image:"fullbody cleanser.png",
badge:"Organic"
},

{
name:"Carrots",
price:"$4.80",
image:"fullbody cleanser.png",
badge:""
}

];

function displayProducts(items){

    let output = "";

    items.forEach(product => {

        output += `
        <div class="card">

            ${product.badge ? `<div class="badge">${product.badge}</div>` : ""}

            <img src="${product.image}">

            <div class="title">${product.name}</div>

            <div class="rating">
                ⭐ 4.8/5
            </div>

            <div class="price">
                <h3>${product.price}</h3>

                <div class="add">+</div>
            </div>

        </div>
        `;
    });

    document.getElementById("products").innerHTML = output;
}

displayProducts(products);





const search = document.getElementById("search");

search.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    const filteredProducts = products.filter(product =>

        product.name.toLowerCase().includes(value)

    );

    displayProducts(filteredProducts);

});