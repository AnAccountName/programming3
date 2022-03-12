
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








var matrix = [];

   

var grassArr = [];

var grassEaterArr = [];

var gishatichArr = [];
 
var ggEaterArr = [];

var eaterArr = [];


let side = 20;



function setup() {

 for(var y = 0; y < 30; y++){
     matrix[y] = [];
     for(var x = 0; x < 35; x++){
        matrix[y][x] = random([0, 0, 1, 1, 1, 1, 1, 2, 2, 3, 4, 5])
     }
 }



    frameRate(4);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for(var y = 0; y < matrix.length; y++){
        for(var x = 0; x < matrix[y].length; x++){
        if(matrix[y][x] == 1){
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        }
        else if(matrix[y][x] == 2) {
            var ge = new GrassEater(x, y, 2);
            grassEaterArr.push(ge);
        }
        else if(matrix[y][x] == 3) {
            var gi = new Gishatich(x, y, 3);
            gishatichArr.push(gi);
        }
        else if(matrix[y][x] == 4) {
            var gg = new GgEater(x, y, 4);
            ggEaterArr.push(gg);
        }
        else if(matrix[y][x] == 5) {
            var e = new Eater(x, y, 5);
            eaterArr.push(e);
        }
        }
    }
 }



function draw() {

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
                fill("white");  
            }
            else if (matrix[y][x] == 5) {
                fill("black");  
            }
            rect(x * side, y * side, side, side);
        }
    }

    for(var i in grassArr){
        grassArr[i].mul();
    }
 
    for(var i in grassEaterArr){
        grassEaterArr[i].eat();
    }

    for(var i in gishatichArr){
        gishatichArr[i].eat();
    }
    for(var i in ggEaterArr){
        ggEaterArr[i].eat();
    }
    for(var i in eaterArr){
        eaterArr[i].eat();
    }
 }
 





































