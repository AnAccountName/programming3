let LivingCreature = require('./LivingCreature');

module.exports = class GrassEater extends LivingCreature{
    constructor(x,y,index) {
        super(x, y, index);
        this.energy = 8;
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
            
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    

     mul () {
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
 
        if(newCell && this.energy >= 8){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
 
            var newGrassEater = new GrassEater(newX, newY, 2);
            grassEaterArr.push(newGrassEater);
        }
    }

    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

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
        var emptyCells = this.chooseCell(1);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

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
            this.mul();
        }
        
        else {
            this.move();
        }
    }

    die() {
        if(this.energy <= 0){
            for(var i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }            
            }
        }
    }
     
}






