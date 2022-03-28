let LivingCreature = require('./LivingCreature');

module.exports = class Gishatich extends LivingCreature{
    constructor(x,y,index) {
        super(x, y, index);
        this.energy = 8;
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
     }

     mul () {
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
 
        if(newCell && this.energy >= 12){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
 
            var gishatich = new Gishatich(newX, newY, 3);
            gishatichArr.push(gishatich);
        }
    }

    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = Math.random()*emptyCells;

        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            this.energy--;
            
        }
        this.die();
    }

    eat() {
        var emptyCells = this.chooseCell(2);
        var newCell = Math.random() *emptyCells;

        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            this.energy++;

            for(var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }            
            }
            this.mul();
        }
        

        else {
            this.move();
        }
    }

    die() {
        if(this.energy <= 0){
            for(var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }            
            }
        }
    }
     
}
