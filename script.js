let button = document.querySelector(`button.dark_theme`);
let body = document.querySelector(`body`);
let page_navigation = document.querySelector(`nav.page_navigation`);
const topics = [];

let dark_theme = false;

button.addEventListener(`click`, function() {
    if (dark_theme) {
        body.style.color = `#000`;
        body.style.backgroundColor = `#FFF`;
        body.style.transitionDuration = `0.25s`;

        page_navigation.style.border = `1px solid #000`;

        dark_theme = false;
    } else {
        body.style.color = `#FFF`;
        body.style.backgroundColor = `#000`;
        body.style.transitionDuration = `0.25s`;

        page_navigation.style.border = `1px solid #FFF`;

        dark_theme = true;
    }
})
