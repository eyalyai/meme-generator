'use strict'

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
    var newLine = document.querySelector('.text-line').value;
    var currLine = getCurrLine();
    if (currLine && newLine) {
        currLine.txt = newLine;
    }
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

function resizeCanvas() {
    document.querySelector('#main-canvas').style.width = '100%';
    document.querySelector('#main-canvas').style.height = '100%';
}

function onResize() {
    window.addEventListener('resize', () => {
        resizeCanvas()
    })
}

function addListeners() {
    onResize();
    onBtnFontSize();
    onBtnTextAlign();
    onBtnMove();
    onSwitchLine();
    onRemoveLine();
    onBtnStroke();
    onBtnColor();
    drawImg();
}

function onBtnFontSize() {
    var elFontSizes = document.querySelectorAll('.btn-font-size');
    Array.from(elFontSizes).map(btn => btn.addEventListener('click', updateFontSize));
}

function onBtnTextAlign() {
    var elAlignBtns = document.querySelectorAll('.btn-align');
    Array.from(elAlignBtns).map(btn => btn.addEventListener('click', updateTextAlign));
    drawImg();
}

function onBtnMove() {
    var elMoveBtns = document.querySelectorAll('.btn-move');
    Array.from(elMoveBtns).map(btn => btn.addEventListener('click', updateYPosition));
}

function onAddLine() {
    addNewLine();
    drawImg();
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

function onRemoveLine() {
    var elRemovehBtn = document.querySelector('.btn-delete-line');
    elRemovehBtn.addEventListener('click', removeLine);
}

function removeLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    if (gMeme.selectedLineIdx > 0) {
        updateCurrLine(-1);
    }
    if (gMeme.lines.length > 0) {
        document.querySelector('.text-line').value = getCurrLine().txt;
        document.querySelector('.text-line').focus();
    } else {
        document.querySelector('.text-line').value = '';
    }
    drawImg();
}

function onBtnStroke() {
    var elBtnStroke = document.querySelector('.btn-stroke');
    elBtnStroke.addEventListener('click', onChangeStroke);
}

function onBtnColor() {
    var elBtnColor = document.querySelector('.btn-color');
    elBtnColor.addEventListener('click', onChangeColor);
}

function onChangeStroke(val) {
    updateStroke(val);
    drawImg();
}

function onChangeColor(val) {
    updateColor(val);
    drawImg();
}

function onSetFont(val) {
    updateFont(val);
    drawImg();
}


function onDownload(elBtn) {
    var canvasData = gCanvas.toDataURL();
    elBtn.href = canvasData;
    elBtn.download = 'my-canvas.jpg';
}

function closeModal() {
    var elModal = document.querySelector('.share-modal')
    elModal.hidden = true
}