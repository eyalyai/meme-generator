'use strict'


var gElEditor = document.querySelector('.meme-editor');
// var gElTxtValue = document.querySelector('.text-line').value;    
var gCanvas;
var gCtx;

function initEditor(imgId) {
    document.querySelector('.meme-editor').classList.remove('hide');
    renderCanvas();
    updateImgId(imgId);
    drawImg();
    addListeners();
}


function renderCanvas() {
    gCanvas = document.getElementById('main-canvas');
    gCtx = gCanvas.getContext('2d');
}

function onInputText() {
    drawImg();
}

function drawText() {
    getCurrLine().txt = document.querySelector('.text-line').value;
    var lines = getLines();
    lines.forEach(line => {
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = `${line.strokeColor}`;
        gCtx.fillStyle = `${line.color}`;
        gCtx.font = `${line.size}px ${line.font}`;
        gCtx.textAlign = `${line.align}`;
        gCtx.fillText(`${line.txt}`, `${line.position.x}`, `${line.position.y}`);
        gCtx.strokeText(`${line.txt}`, `${line.position.x}`, `${line.position.y}`);
    });
}

function addListeners() {
    onBtnFontSize();
    onBtnTextAlign();
    onBtnMove();
    onSwitchLine();
    drawImg();
}

function onBtnFontSize() {
    var elFontSizes = document.querySelectorAll('.btn-font-size');
    Array.from(elFontSizes).map(btn => btn.addEventListener('click', updateFontSize));
}

function onBtnTextAlign() {
    var elAlignBtns = document.querySelectorAll('.btn-align');
    Array.from(elAlignBtns).map(btn => btn.addEventListener('click', updateTextAlign));
}

function onBtnMove() {
    var elMoveBtns = document.querySelectorAll('.btn-move');
    Array.from(elMoveBtns).map(btn => btn.addEventListener('click', updateYPosition));
}

function onSwitchLine() {
    var elSwitchBtn = document.querySelector('.btn-switch');
    elSwitchBtn.addEventListener('click', switchLine);

}

function switchLine() {
    updateCurrLine();
    document.querySelector('.text-line').value = getCurrLine().txt;
    document.querySelector('.text-line').focus();

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