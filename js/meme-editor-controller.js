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

function addListeners() {
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

function onRemoveLine() { //not working
    var elRemovehBtn = document.querySelector('.btn-delete-line');
    elRemovehBtn.addEventListener('click', removeLine);
}

function removeLine() {
    console.log('remove idx:', gMeme.selectedLineIdx);
    console.log(gMeme.lines);
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
    console.log(gMeme.lines);
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

function onChangeStroke(ev, val) {
    // ev.classList.remove('hide');
    updateStroke(val);
    drawImg();
}

function onChangeColor(ev, val) {
    // ev.classList.remove('hide');
    updateColor(val);
    drawImg();
}

function onSetFont(val) {
    updateFont(val);
    drawImg();
}


function onDownload(elBtn) {
    console.log('hi');
    var canvasData = gCanvas.toDataURL();
    elBtn.href = canvasData;
    elBtn.download = 'my-canvas.jpg';
}

function closeModal() {
    var elModal = document.querySelector('.share-modal')
    elModal.hidden = true
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