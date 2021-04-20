'use strict'

var gCurrColor = 'black';
var gCurrStrokeColor = 'white';
var gCurrfont = '40px Impact';
var gCurrTextAlign = 'center'
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I never eat Falafel',
        size: 20,
        align: 'left',
        color: 'black',
        strokeColor: 'white',
        position: {
            x: 300,
            y: 100
        },
        font: '20px Impact',
    }]
}
var gCurrLine = gMeme.lines[gMeme.selectedLineIdx];

function drawText(text, x, y) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = gCurrStrokeColor;
    gCtx.fillStyle = gCurrColor;
    gCtx.font = gCurrfont;
    gCtx.textAlign = gCurrTextAlign;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function drawImg(imgId) {
    var img = getImg(imgId);
    drawImgFromlocal(img.url);
}

function drawImgFromlocal(imgUrl) {
    var img = new Image()
    img.src = imgUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
    }
}


function getLine(text) {
    gMeme.lines.push(createLine(text));
}

function createLine(text) {
    return {
        txt: 'Enter your text',
        size: 20,
        font: '20px Impact',
        align: 'left',
        color: 'black',
        strokeColor: 'white',
        position: {
            x: 300,
            y: 100
        }
    }
}

function updateLines(text) {
    gMeme.lines.push(createLine(text));
    drawText(gCurrLine.txt, gCurrLine.position.x, gCurrLine.position.y)
}

function updateSelectedLine(text = 'sample') {
    if (!gMeme.selectedLineIdx) {
        gMeme.selectedLineIdx = 1;
        return;
    } else drawText(text, 300, 500);
}

function updateFontSize(ev) {
    var val = +ev.target.dataset.value
    switch (val) {
        case 1:
            gMeme.lines[gMeme.selectedLineIdx].size++;

            break;
        case -1:
            gMeme.lines[gMeme.selectedLineIdx].size--;
            break;
    }
    // console.log(gMeme.lines[gMeme.selectedLineIdx].size);
}

function updateTextAlign(ev) {
    var val = ev.target.dataset.value;
    console.log(val);
    switch (val) {
        case 'right':
            gMeme.lines[gMeme.selectedLineIdx].align = 'right';
        case 'center':
            gMeme.lines[gMeme.selectedLineIdx].align = 'center';
        case 'left':
            gMeme.lines[gMeme.selectedLineIdx].align = 'left';
    }
    // console.log(gMeme.lines[gMeme.selectedLineIdx].align);
}

// function resizeCanvas(elImg) {
//     var elContainer = document.querySelector('.canvas-container');
//     gCanvas.width = elContainer.offsetWidth
//     gCanvas.height = elContainer.offsetHeight
// }