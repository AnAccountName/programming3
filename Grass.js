let LivingCreature = require('./LivingCreature');

module.exports = class Grass extends LivingCreature{
 

    mul () {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
 
        if(newCell && this.multiply >= 6){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;
 
            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }
 

}


// class GrassEater extends LivingCreature{
//     constructor(x,y,index) {
//         super(x, y, index);
//         this.energy = 8;
//         }

//         getNewCoordinates(){
//                 this.directions = [
//                     [this.x - 1, this.y - 1],
//                     [this.x    , this.y - 1],
//                     [this.x + 1, this.y - 1],
//                     [this.x - 1, this.y    ],
//                     [this.x + 1, this.y    ],
//                     [this.x - 1, this.y + 1],
//                     [this.x    , this.y + 1],
//                     [this.x + 1, this.y + 1]
//                 ];
//             }
            
//     chooseCell(character) {
//         this.getNewCoordinates();
//         return super.chooseCell(character);
//     }

    

//      mul () {
//         var emptyCells = this.chooseCell(0);
//         var newCell = random(emptyCells);
 
//         if(newCell && this.energy >= 12){
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = 2;
 
//             var newGrassEater = new GrassEater(newX, newY, 2);
//             grassEaterArr.push(newGrassEater);
//         }
//     }

//     move() {
//         var emptyCells = this.chooseCell(0);
//         var newCell = random(emptyCells);

//         if(newCell){
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = this.index;

//             matrix[this.y][this.x] = 0;

//             this.x = newX;
//             this.y = newY;

//             this.energy--;
            
//         }
//         this.die();
//     }

//     eat() {
//         var emptyCells = this.chooseCell(1);
//         var newCell = random(emptyCells);

//         if(newCell){
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = this.index;

//             matrix[this.y][this.x] = 0;

//             this.x = newX;
//             this.y = newY;

//             this.energy++;

//             for(var i in grassArr) {
//                 if (newX == grassArr[i].x && newY == grassArr[i].y) {
//                     grassArr.splice(i, 1);
//                     break;
//                 }            
//             }
//             this.mul();
//         }
        
//         else {
//             this.move();
//         }
//     }

//     die() {
//         if(this.energy <= 0){
//             for(var i in grassEaterArr) {
//                 if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
//                     grassEaterArr.splice(i, 1);
//                     matrix[this.y][this.x] = 0;
//                     break;
//                 }            
//             }
//         }
//     }
     
// }







// class Gishatich extends LivingCreature{
//     constructor(x,y,index) {
//         super(x, y, index);
//         this.energy = 8;
//     }
//     chooseCell(character) {
//         this.getNewCoordinates();
//         return super.chooseCell(character);
//     }

//     getNewCoordinates(){
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x    , this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y    ],
//             [this.x + 1, this.y    ],
//             [this.x - 1, this.y + 1],
//             [this.x    , this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//      }

//      mul () {
//         var emptyCells = this.chooseCell(0);
//         var newCell = random(emptyCells);
 
//         if(newCell && this.energy >= 12){
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = 3;
 
//             var gishatich = new Gishatich(newX, newY, 3);
//             gishatichArr.push(gishatich);
//         }
//     }

//     move() {
//         var emptyCells = this.chooseCell(0);
//         var newCell = random(emptyCells);

//         if(newCell){
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = this.index;

//             matrix[this.y][this.x] = 0;

//             this.x = newX;
//             this.y = newY;

//             this.energy--;
            
//         }
//         this.die();
//     }

//     eat() {
//         var emptyCells = this.chooseCell(2);
//         var newCell = random(emptyCells);

//         if(newCell){
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = this.index;

//             matrix[this.y][this.x] = 0;

//             this.x = newX;
//             this.y = newY;

//             this.energy++;

//             for(var i in grassEaterArr) {
//                 if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
//                     grassEaterArr.splice(i, 1);
//                     break;
//                 }            
//             }
//             this.mul();
//         }
        

//         else {
//             this.move();
//         }
//     }

//     die() {
//         if(this.energy <= 0){
//             for(var i in gishatichArr) {
//                 if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
//                     gishatichArr.splice(i, 1);
//                     matrix[this.y][this.x] = 0;
//                     break;
//                 }            
//             }
//         }
//     }
     
// }








// class GgEater extends LivingCreature{
//     constructor(x,y,index) {
//         super(x, y, index);
//         this.energy = 8;
//     }
//     chooseCell(character) {
//         this.getNewCoordinates();
//         return super.chooseCell(character);
//     }

//     getNewCoordinates(){
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x    , this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y    ],
//             [this.x + 1, this.y    ],
//             [this.x - 1, this.y + 1],
//             [this.x    , this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//      }

//      mul () {
//         var emptyCells = this.chooseCell(0);
//         var newCell = random(emptyCells);
 
//         if(newCell && this.energy >= 14){
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = 4;
 
//             var ggEater = new GgEater(newX, newY, 4);
//             ggEaterArr.push(ggEater);
//         }
//     }

//     move() {
//         var emptyCells = this.chooseCell(0);
//         var newCell = random(emptyCells);

//         if(newCell){
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = this.index;

//             matrix[this.y][this.x] = 0;

//             this.x = newX;
//             this.y = newY;

//             this.energy--;
            
//         }
//         this.die();
//     }

//     eat() {
//         var emptyCells = this.chooseCell(1, 3);
//         var newCell = random(emptyCells);

//         if(newCell){
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = this.index;

//             matrix[this.y][this.x] = 0;

//             this.x = newX;
//             this.y = newY;

//             this.energy++;

//             for(var i in grassArr) {
//                 if (newX == grassArr[i].x && newY == grassArr[i].y) {
//                     grassArr.splice(i, 1);
//                     break;
//                 }            
//             }
//             for(var i in gishatichArr) {
//                 if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
//                     gishatichArr.splice(i, 1);
//                     break;
//                 }            
//             }
//             this.mul();
//         }
        

//         else {
//             this.move();
//         }
//     }

//     die() {
//         if(this.energy <= 0){
//             for(var i in ggEaterArr) {
//                 if (this.x == ggEaterArr[i].x && this.y == ggEaterArr[i].y) {
//                     ggEaterArr.splice(i, 1);
//                     matrix[this.y][this.x] = 0;
//                     break;
//                 }            
//             }
//         }
//     }
     
// }





// class Eater extends LivingCreature{
//     constructor(x,y,index) {
//         super(x, y, index);
//         this.energy = 8;
//     }
//     chooseCell(character) {
//         this.getNewCoordinates();
//         return super.chooseCell(character);
//     }

//     getNewCoordinates(){
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x    , this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y    ],
//             [this.x + 1, this.y    ],
//             [this.x - 1, this.y + 1],
//             [this.x    , this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//      }

//      mul () {
//         var emptyCells = this.chooseCell(0);
//         var newCell = random(emptyCells);
 
//         if(newCell && this.energy >= 12){
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = 5;
 
//             var eater = new Eater(newX, newY, 5);
//             eaterArr.push(eater);
//         }
//     }

//     move() {
//         var emptyCells = this.chooseCell(0);
//         var newCell = random(emptyCells);

//         if(newCell){
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = this.index;

//             matrix[this.y][this.x] = 0;

//             this.x = newX;
//             this.y = newY;

//             this.energy--;
            
//         }
//         this.die();
//     }

//     eat() {
//         var emptyCells = this.chooseCell(4);
//         var newCell = random(emptyCells);

//         if(newCell){
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = this.index;

//             matrix[this.y][this.x] = 0;

//             this.x = newX;
//             this.y = newY;

//             this.energy++;

                        
            
//             for(var i in gishatichArr) {
//                 if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
//                     gishatichArr.splice(i, 1);
//                     break;
//                 }            
//             }
//             this.mul();
//         }
        

//         else {
//             this.move();
//         }
//     }

//     die() {
//         if(this.energy <= 0){
//             for(var i in eaterArr) {
//                 if (this.x == eaterArr[i].x && this.y == eaterArr[i].y) {
//                     eaterArr.splice(i, 1);
//                     matrix[this.y][this.x] = 0;
//                     break;
//                 }            
//             }
//         }
//     }
     
// }













