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