'use strict'

var gElMain = document.querySelector('.main-screen');

function init() {
    // console.log(getImgs());
    var imgs = getImgs();
    renderGallery(imgs);
}

function renderGallery(imgs) {
    var strHtmls = imgs.map(function(img) {
        return `<img src=${img.url} onClick="onImgSelect(${img.id}, event)"></img>`
    })
    strHtmls.unshift(
        `<div class="gallery">
        <section class="search-bar container flex space-between">
        <input type="text" name="search" placeholder="Search keys words">
        <div class="sort-by">Lorem ipsum dolor sit amet. - temp</div>
        </section>
        <section class="img-gallery container grid align-center space-between container">
        `)
    strHtmls.push(
        `</section>
        </div>`)
    gElMain.innerHTML = strHtmls.join('');

}

function onImgSelect(imgId, ev) {
    // console.log('event', ev);
    // console.log('imgId:', imgId);
    document.querySelector('.gallery').hidden = true;
    initEditor(imgId);
    ev.preventDefault();
}