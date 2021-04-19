'use strict'

var gCurrColor = 'black';
var gCurrStrokeColor = 'white';
var gCurrfont = '40px Impact';
var gCurrTextAlign = 'center'
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I never eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }]
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = gCurrStrokeColor;
    gCtx.fillStyle = gCurrColor;
    gCtx.font = gCurrfont;
    gCtx.textAlign = gCurrTextAlign;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function drawImgFromlocal(imgUrl) {
    var img = new Image()
    img.src = imgUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
    }
}

function resizeCanvas(elImg) {
    var elContainer = document.querySelector('.canvas-container');
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}

function getLine(text) {
    gMeme.lines.push(createLine(text));
}

function createLine(text) {
    return {
        txt: text,
        size: 20,
        align: 'left',
        color: 'red'
    }
}

function updateLines(text) {
    gMeme.lines.push(createLine(text));
    drawText(text, 300, 100)
}

function updateFontSize(val) {
    switch (val) {
        case 1:
            gMeme.lines[gMeme.selectedLineIdx].size++;
            break;
        case -1:
            gMeme.lines[gMeme.selectedLineIdx].size--;
            break;
    }
}