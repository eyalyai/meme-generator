'use strict'
var gFilter = undefined;
var gKeywords = {
    'happy': 7,
    'funny': 3,
    'funny puk': 5,
    'comics': 8,
    'animal': 2
};

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['happy', 'funny'] },
    { id: 2, url: 'img/2.jpg', keywords: ['happy', 'animal'] },
    { id: 3, url: 'img/3.jpg', keywords: ['happy', 'funny'] },
    { id: 4, url: 'img/4.jpg', keywords: ['happy', 'comics', 'animal'] },
    { id: 5, url: 'img/5.jpg', keywords: ['happy', 'funny puk'] },
    { id: 6, url: 'img/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'img/7.jpg', keywords: ['happy', 'funny'] },
    { id: 8, url: 'img/8.jpg', keywords: ['happy'] },
    { id: 9, url: 'img/9.jpg', keywords: ['happy', 'comics'] },
    { id: 10, url: 'img/10.jpg', keywords: ['happy'] },
    { id: 11, url: 'img/11.jpg', keywords: ['happy'] },
    { id: 12, url: 'img/12.jpg', keywords: ['happy', 'funny puk'] },
    { id: 13, url: 'img/13.jpg', keywords: ['happy'] },
    { id: 14, url: 'img/14.jpg', keywords: ['happy', 'funny', 'comics'] },
    { id: 15, url: 'img/15.jpg', keywords: ['happy', 'comics'] },
    { id: 16, url: 'img/16.jpg', keywords: ['happy'] },
    { id: 17, url: 'img/17.jpg', keywords: ['happy', 'funny'] },
    { id: 18, url: 'img/18.jpg', keywords: ['happy', 'funny puk', 'comics'] },
];

function getImgs() {
    return gImgs;
}

function getFilter() {
    return gFilter;
}

function getKeyWords() {
    return gKeywords;
}

function getImg(imgId) {
    var img = gImgs.find(img => { return img.id === imgId; });
    return img;
}

function increaseKeyFont(keyword) {
    gKeywords[keyword]++;
}

function updateFilter(keyword) {
    gFilter = keyword;
}

function keySearch(keyword) {
    gKeywords[keyword]++;
}