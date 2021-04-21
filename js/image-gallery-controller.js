'use strict'

function init() {
    renderGallery();
    renderKeyWord();
    OnNav();
}

function renderGallery() {
    var imgs = getImgs();
    var imgsToRender = imgs;
    const elImgGallery = document.querySelector('.img-gallery');
    var filter = getFilter();
    if (filter) {
        imgsToRender = imgs.filter((img) => img.keywords.includes(filter));
    }
    elImgGallery.innerHTML = imgsToRender.map((img) => `<img src=${img.url} onClick="onImgSelect(${img.id}, event)"></img>`).join('');
}

function renderKeyWord() {
    var Keywords = getKeyWords();
    const elKeyWords = document.querySelector('.keys-sort');
    elKeyWords.innerHTML = Object.keys(Keywords).map((keyword) => (`<span onclick="onIncreaseKeyFont('${keyword}')">${keyword} </span>`)).join('');
}

function onImgSelect(imgId, ev) {
    // elGallery.classList.add('hide');
    document.querySelector('.gallery').hidden = true;
    initEditor(imgId);
    ev.preventDefault();
}


function onIncreaseKeyFont(keyword) {
    console.log(keyword);
    increaseKeyFont(keyword);
    updateFilter(keyword);
    renderGallery();
}

function onKeySearch(keyword) {
    keySearch(keyword);
    updateFilter(keyword);
    renderGallery();
}