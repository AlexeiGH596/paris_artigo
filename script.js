let button = document.querySelector(`button.dark_theme`);
let img_button = document.querySelector(`img.img_button`);
let body = document.querySelector(`body`);
let page_navigation = document.querySelector(`nav.page_navigation`);

let dark_theme = false;

button.addEventListener(`click`, function () {
    body.style.transitionDuration = `0.3s`; // economizando código
    if (dark_theme) {
        body.style.color = `#000`;
        body.style.backgroundColor = `#FFF`;

        img_button.src = `Images/moon.png`;

        page_navigation.style.borderColor = `#000`;

        // também posso deixar o resultado vazio, retornando ao estado original

        dark_theme = false;
    } else {
        body.style.color = `#FFF`;
        body.style.backgroundColor = `#000`;

        img_button.src = `Images/sun.png`;

        page_navigation.style.borderColor = `#FFF`;

        dark_theme = true;
    }
})
