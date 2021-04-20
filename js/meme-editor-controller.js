'use strict'


var gElMain = document.querySelector('.main-screen');
var gCanvas;
var gCtx;

function initEditor(imgId) {
    renderEditor();
    renderCanvas();
    drawImg(imgId);
    addListeners();
    // console.log(gCtx.font);
}

function renderEditor(ev) {
    gElMain.classList.add('editor');
    var strHtml = `
    <section class="meme-editor container flex space-between">
    <div class="canvas-container"></div>
    <section class="control-panel">
        <label for="text-line"></label>
        <input class="text-line" id="text-line" type="text" onchange="onInputText(this.value)">
        <button class="btn-up btn">&#129045;</button>
        <button class="btn-down btn">&#129047;</button>
        <button class="btn-switch btn">&#8645;</button>
        <button class="btn-add-line btn">&#43;</button>
        <button class="btn-delete-line btn">&#x1f5d1;</button>
        <button class="btn-font-size btn" data-value="1">&#128474;</button>
        <button class="btn-font-size btn" data-value="-1">&#x1f5db;</button>
        <button class="btn-align btn" data-value="right">-</button>
        <button class="btn-align btn" data-value="center">-</button>
        <button class="btn-align btn" data-value="left">-</button>
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

    console.log(ev);
    // resizeCanvas(ev);
}

function renderCanvas() {
    var strHtml = `<canvas id="main-canvas" height="750" width="750" ></canvas>`;
    document.querySelector('.canvas-container').innerHTML = strHtml;
    gCanvas = document.getElementById('main-canvas');
    gCtx = gCanvas.getContext('2d');
}

function onInputText(text) {
    updateLines(text);
}

function addListeners() {
    onBtnFontSize();
    onBtnTextAlign();
    renderCanvas();
}

function onBtnFontSize() {
    var elFontSizes = document.querySelectorAll('.btn-font-size');
    Array.from(elFontSizes).map(btn => btn.addEventListener('click', updateFontSize));
}

function onBtnTextAlign() {
    var elFontSizes = document.querySelectorAll('.btn-align');
    Array.from(elFontSizes).map(btn => btn.addEventListener('click', updateTextAlign));
}

// addMouseListeners()
// addTouchListeners()
// window.addEventListener('resize', () => {
// resizeCanvas()
// })
// console.log(gCtx.font);


// Window.addEventListener('click', doStuff(event));

// function doStuff(event) {
//     console.log(event.target.class);
// }