'use strict'

//<li class="gallery-nav">Gallery</li>
//<li class="memes-nav">Memes</li>
//<li class="about-nav">About</li>

function OnNav() {
    var elNav = document.querySelector('.nav-bar');
    elNav.addEventListener('click', foo);
    // const elGallery = document.querySelector('.gallery');
    // const elMemes = document.querySelector('.memes');
    // const elAbout = document.querySelector('.about-modal');
    const elEditor = document.querySelector('.meme-editor');
    elEditor.classList.add('hide');
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
            console.log('test');
            elEditor.classList.add('hide');
            elMemes.hidden = true;
            elAbout.hidden = true;
            elGallery.hidden = false;
            console.log(elGallery);
            renderGallery();
            break;
        case 'Memes':
            // elEditor.classList.add('hide');
            // elGallery.classList.add('hide');
            // elAbout.classList.add('hide');
            // elMemes.classList.remove('hide');
            renderMemes();
            break;
        case 'About':
            // elEditor.classList.add('hide');
            // elMemes.classList.add('hide');
            // elGallery.classList.add('hide');
            // elAbout.classList.remove('hide');
            openAboutModal();
            break;
    }
}

function renderMemes() {


}

function openAboutModal() {


}