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
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
        console.log('drawing');
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



// function createLine(text) {
//     return {
//         txt: 'Enter your text',
//         size: 20,
//         font: '20px Impact',
//         align: 'left',
//         color: 'black',
//         strokeColor: 'white',
//         position: {
//             x: 300,
//             y: 100
//         }
//     }
// }

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
    console.log(val);
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
    console.log(gMeme.lines[gMeme.selectedLineIdx].align);
    drawImg();
}

function updateYPosition(ev) {
    var val = ev.target.dataset.value;
    console.log(val);
    switch (val) {
        case 'up':
            gCurrLine.position.y -= 20;
            break;
        case 'down':
            gCurrLine.position.y += 20;
            break;
    }
    console.log(gCurrLine.position.y);
    drawImg();
}

function updateCurrLine() {
    gMeme.selectedLineIdx++;
    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0;
    gCurrLine = gMeme.lines[gMeme.selectedLineIdx];
}

function removeLine() {
    if (!gMeme.selectedLineIdx === 0 && gMeme.lines.length > 0) return;
    console.log(gMeme.lines);
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    console.log(gMeme.lines);
    // if (gMeme.lines.length === 0) {

    // }
}

function updateStroke(val) {
    gCurrLine.strokeColor = val;
}

function updateColor(val) {
    gCurrLine.color = val;
}

// function resizeCanvas(elImg) {
//     var elContainer = document.querySelector('.canvas-container');
//     gCanvas.width = elContainer.offsetWidth
//     gCanvas.height = elContainer.offsetHeight
// }