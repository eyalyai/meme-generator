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
    var filterKey = getFilter();
    //~Changed~ for partcial search
    if (filterKey) {
        imgsToRender = imgs.filter((img) => {
            let containsKey = false;
            img.keywords.forEach(
                (key) => {
                    if (key.startsWith(filterKey)) {
                        containsKey = true;
                    }
                });
            return containsKey;
        });

    }
    elImgGallery.innerHTML = imgsToRender.map((img) => `<img src=${img.url} onClick="onImgSelect(${img.id}, event)"></img>`).join('');
}

function renderKeyWord() {
    var keywords = getKeyWords();
    const elKeyWords = document.querySelector('.keys-sort');
    elKeyWords.innerHTML = Object.keys(keywords).map((keyword, idx) => (`<span onclick="onIncreaseKeyFont('${keyword}')">${keyword.fontsize(keywords[keyword])} </span>`)).join('');
}

function onImgSelect(imgId, ev) {
    document.querySelector('.gallery').hidden = true;
    initEditor(imgId);
    ev.preventDefault();
}


function onIncreaseKeyFont(keyword) {
    increaseKeyFont(keyword);
    updateFilter(keyword);
    renderGallery();
    renderKeyWord();
}

function onKeySearch(keyword) {
    keySearch(keyword);
    updateFilter(keyword);
    renderGallery();
}