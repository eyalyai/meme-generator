'use strict'

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
            txt: 'first line',
            size: 40,
            align: 'center',
            color: 'black',
            strokeColor: 'white',
            position: {
                x: 375,
                y: 100
            },
            font: 'Impact',
        },
        {
            txt: 'second line',
            size: 40,
            align: 'center',
            color: 'black',
            strokeColor: 'white',
            position: {
                x: 375,
                y: 600
            },
            font: 'Impact',
        }
    ]
}
var gCurrLine = gMeme.lines[gMeme.selectedLineIdx];



function drawImg() {
    var img = getImg(gMeme.selectedImgId);
    drawImgFromlocal(img.url);
}

function drawImgFromlocal(imgUrl) {
    var img = new Image()
    img.src = imgUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        drawText();
    }
}

function updateImgId(imgId) {
    gMeme.selectedImgId = imgId;
}

function getLines() {
    return gMeme.lines;
}

function getCurrLine() {
    return gMeme.lines[gMeme.selectedLineIdx];
}



function createLine() {
    return {
        txt: 'New line',
        size: 40,
        align: 'center',
        color: 'black',
        strokeColor: 'white',
        position: {
            x: 375,
            y: 375
        },
        font: 'Impact',
    }
}


function updateSelectedLine(text = 'sample') {
    if (!gMeme.selectedLineIdx) {
        gMeme.selectedLineIdx = 1;
        return;
    } else drawText(text, 300, 500);
}

function addNewLine() {
    gMeme.lines.push(createLine());
    updateCurrLine();
}

function updateFontSize(ev) {
    var val = +ev.target.dataset.value
    switch (val) {
        case 1:
            gMeme.lines[gMeme.selectedLineIdx].size += 3;

            break;
        case -1:
            gMeme.lines[gMeme.selectedLineIdx].size -= 3;
            break;
    }
    drawImg()
}

function updateTextAlign(ev) {
    var val = ev.target.dataset.value;
    switch (val) {
        case 'right':
            gMeme.lines[gMeme.selectedLineIdx].align = 'right';
            break;
        case 'center':
            gMeme.lines[gMeme.selectedLineIdx].align = 'center';
            break;
        case 'left':
            gMeme.lines[gMeme.selectedLineIdx].align = 'left';
            break;
    }
    drawImg();
}

function updateYPosition(ev) {
    var val = ev.target.dataset.value;
    switch (val) {
        case 'up':
            gCurrLine.position.y -= 20;
            break;
        case 'down':
            gCurrLine.position.y += 20;
            break;
    }
    drawImg();
}

function updateCurrLine(v = 1) {
    gMeme.selectedLineIdx += v;
    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0;
    gCurrLine = gMeme.lines[gMeme.selectedLineIdx];
}


function updateStroke(val) {
    gCurrLine.strokeColor = val; //it does work but broke
}

function updateColor(val) {
    gCurrLine.color = val; //it does work but broke
}

function updateFont(val) {
    gMeme.lines[gMeme.selectedLineIdx].font = val;
}