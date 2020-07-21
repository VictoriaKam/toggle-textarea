const TEXTAREA = document.querySelector('.textarea-wrapper');
const EXPAND_BUTTON = document.querySelector('.expand-button');
const EXPAND_TEXT = document.querySelector('.expand-button__text');
const ARROWS_TOP = document.querySelector('.arrows__top');
const ARROWS_BOTTOM = document.querySelector('.arrows__bottom');

EXPAND_BUTTON.addEventListener('click', (event) => {
    event.preventDefault();
    TEXTAREA.classList.toggle('expanded');
    EXPAND_BUTTON.classList.toggle('shrink');
    ARROWS_TOP.classList.toggle('arrows__top_expand');
    ARROWS_TOP.classList.toggle('arrows__top_shrink');
    ARROWS_BOTTOM.classList.toggle('arrows__bottom_expand');
    ARROWS_BOTTOM.classList.toggle('arrows__bottom_shrink');
    if (EXPAND_BUTTON.classList.contains('shrink')) { 
        EXPAND_TEXT.innerText = 'Shrink';
    } else {
        EXPAND_TEXT.innerText = 'Expand';
    }
});