'use strict'


var gElMain = document.querySelector('.main-screen');
var gCanvas;
var gCtx;

function initEditor(imgId) {
    renderEditor(imgId);
    gCanvas = document.getElementById('main-canvas');
    console.log(gCanvas);
    gCtx = gCanvas.getContext('2d');
}

function renderEditor(imgId, ev) {
    gElMain.classList.add('editor');
    var strHtml = `
    <section class="meme-editor container flex space-between">
    <canvas id="main-canvas" height="750" width="750" ></canvas>
    <section class="control-panel">
        <label for="text-line"></label>
        <input class="text-line" id="text-line" type="text" onchange="onInputText(this.value)">
        <button class="btn-up btn">&#129045;</button>
        <button class="btn-down btn">&#129047;</button>
        <button class="btn-switch btn">&#8645;</button>
        <button class="btn-add-line btn">&#43;</button>
        <button class="btn-delete-line btn">&#x1f5d1;</button>
        <button class="btn-font-increase btn">&#128474;</button>
        <button class="btn-font-decrease btn">&#x1f5db;</button>
        <button class="btn-align-right btn">-</button>
        <button class="btn-align-center btn">-</button>
        <button class="btn-align-left btn">-</button>
        <button class="btn-align-left btn">-</button>
        <select class="font-select" name="font" id="font" onchange="onSetFont(this.value)">
            <option value="line">font</option>
            <option value="triangle">font</option>
        </select>
        <button class="btn-border btn">A</button>
        <button class="btn-color btn">&#127912</button>
        <select class="sticker-select" name="sticker" id="sticker" onchange="onSetFont(this.value)">
            <option value="line">sticker</option>
            <option value="triangle">sticker</option>
        </select>
        <button class="btn-share btn">share</button>
        <button class="btn-download btn">download</button>
    </section>
    </section>`;
    gElMain.innerHTML = strHtml;
    var img = getImg(imgId);
    drawImgFromlocal(img.url);
    console.log(ev);
    // resizeCanvas(ev);
}


function onInputText(text) {
    updateLines(text);
}

document.querySelector('.btn-font-increase').addEventListener("click", updateFontSize(1));