let LivingCreature = require('./LivingCreature');

module.exports = class GgEater extends LivingCreature{
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
 
        if(newCell && this.energy >= 14){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;
 
            var ggEater = new GgEater(newX, newY, 4);
            ggEaterArr.push(ggEater);
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
        var emptyCells = this.chooseCell(1, 3);
        var newCell = Math.random()*emptyCells;

        if(newCell){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            this.energy++;

            for(var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }            
            }
            for(var i in gishatichArr) {
                if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
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
            for(var i in ggEaterArr) {
                if (this.x == ggEaterArr[i].x && this.y == ggEaterArr[i].y) {
                    ggEaterArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }            
            }
        }
    }
     
}

