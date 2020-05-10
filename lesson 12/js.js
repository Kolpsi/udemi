"use strict";
class Options {
    constructor (height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.background = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv()  {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = "<h1>Привет!</h1>";
        newDiv.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.background}; font-size: ${this.fontSize}px; text-align: ${this.textAlign};`;
        document.body.appendChild(newDiv);
    }  
};

const square = new Options(220, 200, 'red', 14, 'center');

square.createDiv();