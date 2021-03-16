// helpers
const elQS = el => document.querySelector(el);
const elQSA = el => document.querySelectorAll(el);
const on = (el, event, value) => el.addEventListener(event, value);

// variables
const navbarNavs = elQSA('.navbar-nav');
const navbarMenu = elQS('.navbar-menu');

// functions
function navbarMenuEvent() {
    navbarNavs.forEach(navbarNav => {
        navbarNav.classList.toggle('collapse');
    })
}

// main
window.addEventListener('load', init);

function init() {
    load();
    eventListener();
}

function load() {}

function eventListener() {
    on(navbarMenu, 'click', navbarMenuEvent);
}