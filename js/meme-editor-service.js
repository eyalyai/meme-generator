'use strict'

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
            txt: 'first line',
            size: 40,
            align: 'left',
            color: 'black',
            strokeColor: 'white',
            position: {
                x: 250,
                y: 100
            },
            font: 'Impact',
        },
        {
            txt: 'second line',
            size: 40,
            align: 'left',
            color: 'black',
            strokeColor: 'white',
            position: {
                x: 250,
                y: 600
            },
            font: 'Impact',
        },
        {
            txt: 'third line',
            size: 40,
            align: 'left',
            color: 'black',
            strokeColor: 'white',
            position: {
                x: 250,
                y: 500
            },
            font: 'Impact',
        },
        {
            txt: 'forth line',
            size: 40,
            align: 'left',
            color: 'black',
            strokeColor: 'white',
            position: {
                x: 250,
                y: 300
            },
            font: 'Impact',
        },
        {
            txt: 'sixt line',
            size: 40,
            align: 'left',
            color: 'black',
            strokeColor: 'white',
            position: {
                x: 250,
                y: 400
            },
            font: 'Impact',
        },
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
        case 'center':
            gMeme.lines[gMeme.selectedLineIdx].align = 'center';
        case 'left':
            gMeme.lines[gMeme.selectedLineIdx].align = 'left';
    }
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
    console.log(gMeme.lines);
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    console.log(gMeme.lines);
    // if (gMeme.lines.length === 0) {

    // }
    // if (!gMeme.selectedLineIdx === 0 && gMeme.lines.length > 0)
}
// function resizeCanvas(elImg) {
//     var elContainer = document.querySelector('.canvas-container');
//     gCanvas.width = elContainer.offsetWidth
//     gCanvas.height = elContainer.offsetHeight
// }