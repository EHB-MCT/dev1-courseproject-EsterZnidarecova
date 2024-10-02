"use strict";

signature();

function signature() {

    let canvas = document.querySelector("canvas");
    //sorry idk
    canvas.width = 500;
    canvas.height = 500;
    let context = canvas.getContext("2d");

    // context.lineWidth = 5;
    // context.strokeStyle = 'red';
    // context.beginPath();
    // context.moveTo(0, 0);
    // context.lineTo(300, 0);
    // context.lineTo(300, 300);
    // context.lineTo(0, 300);
    // context.lineTo(0, 0);
    // context.stroke();

    context.fillStyle = 'aqua';

    // the middle part

    context.fillRect(150, 270, 50, 50);
    context.fillRect(150, 220, 50, 50);

    //left square
    context.fillRect(30, 30, 100, 50);
    context.fillRect(30, 80, 100, 50);

    //right square
    context.fillRect(220, 30, 50, 50);
    context.fillRect(220, 80, 50, 50);
    context.fillRect(270, 30, 50, 50);
    context.fillRect(270, 80, 50, 50);

    context.fillRect(270, 270, 50, 50);
    context.fillRect(30, 270, 50, 50);

}
