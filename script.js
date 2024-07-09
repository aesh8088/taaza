// Sidebar Menu

function showSidebar(){
    let sidebar = document.querySelector('.sub-nav');
    sidebar.style.display = 'flex';
}


function hideSidebar(){
    let sidebar = document.querySelector('.sub-nav');
    sidebar.style.display = 'none';
}


// AOS Animation

window.addEventListener("load", () => {
    let preloader = document.querySelector(".preloader");
    preloader.classList.add("fade-out");


    setTimeout(() => {
        preloader.style.display = "none";
        AOS.init();
    }, 3000);
}); 