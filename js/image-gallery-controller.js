'use strict'

function init() {
    var imgs = getImgs();
    renderGallery(imgs);
}

function renderGallery(imgs) {
    const elImgGallery = document.querySelector('.img-gallery')
    elImgGallery.innerHTML = imgs.map((img) => `<img src=${img.url} onClick="onImgSelect(${img.id}, event)"></img>`).join('');
}

function onImgSelect(imgId, ev) {
    const elGallery = document.querySelector('.gallery');
    elGallery.classList.add('hide');
    initEditor(imgId);
    ev.preventDefault();
}