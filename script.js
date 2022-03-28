
/*var matrix = [
    [0,1,0,2,2,0,0,0],
    [0,3,0,1,1,0,0,0],
    [0,2,0,1,0,0,1,3],
    [0,0,1,2,2,0,2,2],
    [0,0,1,0,0,0,2,0],
    [0,0,3,0,1,1,0,0]
 ];
 function draw(){
 for(var y = 0; y < matrix.length; y++){
    for(var x = 0; x < matrix[y].length; x++){
        if(matrix[y][x] == 0){
            fill('#acacac');
            rect(x * side, y * side, 20, 20);
        }
        else if(matrix[y][x] == 1){
            fill(0, 0, 255);
            rect(x * side, y * side, 20, 20);
        }
        else if(matrix[y][x] == 2){
            fill(255, 0, 0);
            rect(x * side, y * side, 20, 20);
    }
    else if(matrix[y][x] == 3){
        fill(0, 255, 0);
        rect(x * side, y * side, 20, 20);
    }
 }


}
}*/


// function drow () {
//     var rx = random(100);
//     var ry = random(100);
//     fill(0, 0, 255)
//     elipse(rx, ry, 20, 20)
// }







// function setup() {
//     createCanvas(800,800);
//     background('#acacac');
//     frameRate(30);

//     for( var y = 0; y < m; y++){
//         matrix[y] = [];
//         for( var x = 0; x < n; x++){
//             if(x%2 == 1, y%2 == 1, x%2 != 1, y%2 != 1){
//                matrix[y][x] == 1 
//             }
//             else{
//                 matrix[y][x] = 0
//             }

//         }

//     }
    
// }


// function draw(){
//     for(var y = 0; y < matrix.length; y++){
//        for(var x = 0; x < matrix[y].length; x++){
//            if(matrix[y][x] == 0){
//                fill(255, 0, 0);
//                rect(x * side, y * side, side, side);
//            }
//            else if(matrix[y][x] == 1){
//                fill(0, 0, 255);
//                rect(x * side, y * side, side, side);
//            }
//         }
//     }
// }





    



// function draw(){
//     for(var y = 0; y < matrix.length; y++){
//        for(var x = 0; x < matrix[y].length; x++){
//            if(matrix[y][x] == 0){
//                fill(255, 0, 0);
//                rect(x * side, y * side, side, side);
//            }
//            else if(matrix[y][x] == 1){
//                fill(0, 0, 255);
//                rect(x * side, y * side, side, side);
//            }
//         }
//     }
// }







var socket = io();


let side = 20;



function setup() {

    
    createCanvas(35 * side, 35 * side);
    background('#acacac');

 }

// socket.on('send matrix', draw);  


function nkarel(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
 
            if (matrix[y][x] == 1) {
                fill("green"); 
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");  
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");  
            }
            else if (matrix[y][x] == 3) {
                fill("red");  
            }
            else if (matrix[y][x] == 4) {
                fill("violet");  
            }
            else if (matrix[y][x] == 5) {
                fill("black");  
            }
            rect(x * side, y * side, side, side);
        }
    }

 }
 socket.on("send matrix", nkarel);
 

 
 


 function kill() {
     socket.emit("kill");
 }
 function addGrass() {
     socket.emit("add gGrass");
 }
 function addGrassEater() {
     socket.emit("add GrassEater");
 }
 function addGishatich() {
    socket.emit("add Gishatich");
}
function addGgEater() {
    socket.emit("add GgEater");
}
function addEater() {
    socket.emit("add Eater");
}



































