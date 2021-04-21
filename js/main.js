'use strict'

function OnNav() {
    var elNav = document.querySelector('.nav-bar');
    elNav.addEventListener('click', foo);
    //relevant for future develop
    // const elGallery = document.querySelector('.gallery');
    // const elMemes = document.querySelector('.memes');
    // const elAbout = document.querySelector('.about-modal');
    const elEditor = document.querySelector('.meme-editor');
    elEditor.classList.add('hide');
    //relevant for future develop
    // elMemes.hidden = true;
    // elAbout.hidden = true;
    // elGallery.hidden = false;
}

function foo(ev) {
    var pageName = ev.target.dataset.value;
    const elGallery = document.querySelector('.gallery');
    const elMemes = document.querySelector('.memes');
    const elAbout = document.querySelector('.about-modal');
    const elEditor = document.querySelector('.meme-editor');
    switch (pageName) {
        case 'Gallery':
            elEditor.classList.add('hide');
            elMemes.hidden = true;
            elAbout.hidden = true;
            elGallery.hidden = false;
            renderGallery();
            break;
        case 'Memes': //relevant for future develop
            // elEditor.classList.add('hide');
            // elGallery.classList.add('hide');
            // elAbout.classList.add('hide');
            // elMemes.classList.remove('hide');
            // renderMemes();
            break;
        case 'About': //relevant for future develop
            // elEditor.classList.add('hide');
            // elMemes.classList.add('hide');
            // elGallery.classList.add('hide');
            // elAbout.classList.remove('hide');
            // openAboutModal();
            break;
    }
}