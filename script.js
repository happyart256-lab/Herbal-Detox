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
image:"Manpower TEA.png",
badge:"20% OFF"
},

{
name:" Ulcers Tea",
price:"UGX60,000",
image:"Ulcers Tea.png",
badge:"Fresh"
},

{
name:"Full Body Cleanser Tea",
price:"UGX90,000",
image:"FullBody Cleansing Tea.png",
badge:"Organic"
},

{
name:"Diabetes Tea",
price:"UGX100,000",
image:"Dibetes Tea.png ",
badge:"Best Sale"
},

{
name:"Blood Pressure Tea",
price:"UGX100,000",
image:"BloodPressure Tea.png",
badge:""
},

{
name:"Prostate Tea",
price:"UGX85,000",
image:"Prostate Cleanser Tea.png",
badge:"15% OFF"
},

{
name:"Joints Pain & Arthritis  Tea",
price:"UGX73,000",
image:"Arthritiis Tea.png",
badge:""
},

{
name:"Weight Loss Belly fat Tea",
price:"UGX75,000",
image:"7 Days Bellyfat Tea.png",
badge:""
},

{
name:"UTI & Infections Tea",
price:"UGX80,000",
image:"Infections Tea.png",
badge:"Frozen"
},

{
name:"Nerves & Blood Tea",
price:"UGX83,000",
image:"Blood & Nerves Tea.png",
badge:"Best Sale"
},

{
name:"Colon Cleanser Tea",
price:"UGX85,000",
image:"Colon Detox Tea.png",
badge:"Fresh"
},

{
name:"Womb/ Uterus Cleanser Tea ",
price:"UGX90,000",
image:"Womb Cleanser Tea.png",
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




/* =====================================
   PRODUCT IMAGE GALLERY
===================================== */

const productImages = [

    "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1000&q=80",

    "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80",

    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1000&q=80",

    "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1000&q=80"

];


let currentImageIndex = 0;


const mainProductImage =
    document.getElementById("mainProductImage");


const thumbnails =
    document.querySelectorAll(".thumbnail");


const previousButton =
    document.getElementById("previousButton");


const nextButton =
    document.getElementById("nextButton");


/* =====================================
   CHANGE PRODUCT IMAGE
===================================== */

function changeProductImage(index) {

    currentImageIndex = index;


    mainProductImage.style.opacity = "0";


    setTimeout(() => {

        mainProductImage.src =
            productImages[currentImageIndex];

        mainProductImage.style.opacity = "1";

    }, 150);


    /* Update active thumbnail */

    thumbnails.forEach((thumbnail, i) => {

        thumbnail.classList.toggle(
            "active",
            i === currentImageIndex
        );

    });

}


/* =====================================
   THUMBNAIL CLICK
===================================== */

thumbnails.forEach((thumbnail) => {

    thumbnail.addEventListener("click", () => {

        const index =
            Number(thumbnail.dataset.index);

        changeProductImage(index);

    });

});


/* =====================================
   PREVIOUS BUTTON
===================================== */

previousButton.addEventListener("click", () => {

    currentImageIndex--;

    if (currentImageIndex < 0) {

        currentImageIndex =
            productImages.length - 1;

    }

    changeProductImage(currentImageIndex);

});


/* =====================================
   NEXT BUTTON
===================================== */

nextButton.addEventListener("click", () => {

    currentImageIndex++;

    if (
        currentImageIndex >=
        productImages.length
    ) {

        currentImageIndex = 0;

    }

    changeProductImage(currentImageIndex);

});


/* =====================================
   SIZE SELECTOR
===================================== */

const sizeOptions =
    document.querySelectorAll(".size-option");


sizeOptions.forEach((option) => {

    option.addEventListener("click", () => {

        sizeOptions.forEach((item) => {

            item.classList.remove("active");

        });


        option.classList.add("active");


        console.log(
            "Selected size:",
            option.dataset.size
        );

    });

});


/* =====================================
   QUANTITY
===================================== */

let quantity = 1;


const quantityDisplay =
    document.getElementById("quantity");


const decreaseQuantity =
    document.getElementById("decreaseQuantity");


const increaseQuantity =
    document.getElementById("increaseQuantity");


/* Increase */

increaseQuantity.addEventListener("click", () => {

    quantity++;

    quantityDisplay.textContent =
        quantity;

});


/* Decrease */

decreaseQuantity.addEventListener("click", () => {

    if (quantity > 1) {

        quantity--;

        quantityDisplay.textContent =
            quantity;

    }

});


/* =====================================
   WISHLIST
===================================== */

const wishlistButton =
    document.getElementById("wishlistButton");


wishlistButton.addEventListener("click", () => {

    wishlistButton.classList.toggle("active");


    const icon =
        wishlistButton.querySelector("i");


    if (
        wishlistButton.classList.contains("active")
    ) {

        icon.classList.remove(
            "fa-regular"
        );

        icon.classList.add(
            "fa-solid"
        );

    } else {

        icon.classList.remove(
            "fa-solid"
        );

        icon.classList.add(
            "fa-regular"
        );

    }

});


/* =====================================
   ADD TO CART
===================================== */

const addToCartButton =
    document.getElementById("addToCartButton");


addToCartButton.addEventListener("click", () => {

    const selectedSize =
        document.querySelector(
            ".size-option.active"
        ).dataset.size;


    alert(

        "Added to cart!\n\n" +

        "Product: SilkSkin Serum\n" +

        "Size: " +
        selectedSize +
        "\n" +

        "Quantity: " +
        quantity

    );

});


/* =====================================
   BUY NOW
===================================== */

const buyNowButton =
    document.getElementById("buyNowButton");


buyNowButton.addEventListener("click", () => {

    const selectedSize =
        document.querySelector(
            ".size-option.active"
        ).dataset.size;


    alert(

        "Proceeding to checkout...\n\n" +

        "Product: SilkSkin Serum\n" +

        "Size: " +
        selectedSize +
        "\n" +

        "Quantity: " +
        quantity

    );

});


/* =====================================
   PRODUCT TABS
===================================== */

const tabButtons =
    document.querySelectorAll(".tab-button");


const tabContents =
    document.querySelectorAll(".tab-content");


tabButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedTab =
            button.dataset.tab;


        /* Remove active from buttons */

        tabButtons.forEach((item) => {

            item.classList.remove(
                "active"
            );

        });


        /* Remove active from content */

        tabContents.forEach((content) => {

            content.classList.remove(
                "active"
            );

        });


        /* Activate clicked tab */

        button.classList.add("active");


        const targetContent =
            document.getElementById(
                selectedTab
            );


        targetContent.classList.add(
            "active"
        );

    });

});


/* =====================================
   REVIEW SORT
===================================== */

const sortReviews =
    document.getElementById("sortReviews");


sortReviews.addEventListener("change", () => {

    const selectedValue =
        sortReviews.value;


    console.log(
        "Reviews sorted by:",
        selectedValue
    );

});