class Piece {
 
    constructor(x, y, isWhite, pBoardArray){
        this.matrixPosition = createVector(x,y)
        this.piecePosition = createVector(tileSize * x + tileSize / 2, tileSize * y  + tileSize / 2)

        this.boardArray = pBoardArray
        this.taken = false
        this.captured = false
        this.white = isWhite
        
    }

    show(){

        if(!this.captured){
            textSize(30)
            //strokeWeight(10)
            if(this.white){
                fill(255)
                stroke(0)
            }else{
                fill(30)
                stroke(255)
            }
            textAlign(CENTER,CENTER)
            if(this.taken){
                text(this.letter, mouseX, mouseY)
            }else{
                text(this.letter, this.piecePosition.x, this.piecePosition.y)
            }
        }

    }

    mouseTile(){
        return createVector((mouseX - mouseX % 100)/100,(mouseY - mouseY % 100)/100)
    }
    
    move(){
        var vector = this.mouseTile()
        this.boardArray[this.matrixPosition.x][this.matrixPosition.y] = null
        this.matrixPosition = createVector(vector.x, vector.y)
        this.piecePosition = createVector(tileSize * vector.x + tileSize / 2, tileSize * vector.y  + tileSize / 2)
        this.boardArray[vector.x][vector.y] = this
    }
}

class King extends Piece{
    constructor(x,y,isWhite, boardArray){
        super(x,y,isWhite, boardArray)
        this.letter = "K"
    }

    move(){
        var vector = super.mouseTile()
        if(Math.abs(vector.x - this.matrixPosition.x) <= 1 && Math.abs(vector.y - this.matrixPosition.y) <= 1){
            if(this.boardArray[vector.x][vector.y] != null){
                if(this.boardArray[vector.x][vector.y].white != this.white){
                    this.boardArray[vector.x][vector.y].captured = true
                    super.move()
                }
            }else{
                super.move()
            }
        }
    }
    
}

class Queen extends Piece{
    constructor(x,y,isWhite, boardArray){
        super(x,y,isWhite, boardArray)
        this.letter = "Q"
    }


}

class Bishop extends Piece{
    constructor(x,y,isWhite, boardArray){
        super(x,y,isWhite, boardArray)
        this.letter = "B"
    }

    move(){
        var vector = super.mouseTile()
        var horizontalDistance = Math.abs(this.matrixPosition.x - vector.x)
        var verticalDistance = Math.abs(this.matrixPosition.y - vector.y)
        if(horizontalDistance == verticalDistance && this.verifyLine(vector)){
            if(this.boardArray[vector.x][vector.y] != null){
                if(this.boardArray[vector.x][vector.y].white != this.white){
                    this.boardArray[vector.x][vector.y].captured = true
                    super.move()
                }
            }else{
                super.move()
            }
        }
    }

    verifyLine(vector){
        var horizontalDistance = this.matrixPosition.x - vector.x
        var verticalDistance = this.matrixPosition.y - vector.y
        var x = horizontalDistance < 0 ? 1 : -1
        var y = verticalDistance < 0 ? 1 : -1
        var goodLine = true
        for(var i = 1; i < Math.abs(horizontalDistance); i++){
            if(this.boardArray[this.matrixPosition.x + i*x][this.matrixPosition.y + i*y] != null){
                goodLine = false
                return goodLine
            }
        }
        return goodLine
    }
}

class Knight extends Piece{
    constructor(x,y,isWhite, boardArray){
        super(x,y,isWhite, boardArray)
        this.letter = "Kn"
    }

    move(){
        var vector = super.mouseTile()
        var horizontalDistance = Math.abs(this.matrixPosition.x - vector.x)
        var verticalDistance = Math.abs(this.matrixPosition.y - vector.y)
        if((horizontalDistance == 2 && verticalDistance == 1) || (horizontalDistance == 1 && verticalDistance == 2)){
            if(this.boardArray[vector.x][vector.y] != null){
                if(this.boardArray[vector.x][vector.y].white != this.white){
                    this.boardArray[vector.x][vector.y].captured = true
                    super.move()
                }
            }else{
                super.move()
            }
        }
    }
}

class Rook extends Piece{
    constructor(x,y,isWhite, boardArray){
        super(x,y,isWhite, boardArray)
        this.letter = "R"
    }

    move(){
        var vector = super.mouseTile()
        if(((vector.x != this.matrixPosition.x && vector.y == this.matrixPosition.y) || (vector.y != this.matrixPosition.y && vector.x == this.matrixPosition.x)) && this.verifyLine(vector)){
            if(this.boardArray[vector.x][vector.y] != null){
                if(this.boardArray[vector.x][vector.y].white != this.white){
                    this.boardArray[vector.x][vector.y].captured = true
                    super.move()
                }
            }else{
                super.move()
            }
        }
    }

    verifyLine(vector){
        var horizontalDistance = this.matrixPosition.x - vector.x
        var verticalDistance = this.matrixPosition.y - vector.y
        var isHorizontal = horizontalDistance != 0 ? true : false
        var goodLine = true
        var x = horizontalDistance < 0 ? 1 : -1
        var y = verticalDistance < 0 ? 1 : -1
        for(var i = 1; i < Math.abs(isHorizontal ? horizontalDistance : verticalDistance); i++){
            if(isHorizontal && this.boardArray[this.matrixPosition.x + i*x][this.matrixPosition.y] != null){
                goodLine = false
                return goodLine
            }else if(!isHorizontal && this.boardArray[this.matrixPosition.x][this.matrixPosition.y + i*y] != null){
                goodLine = false
                return goodLine
            }
        }
        return goodLine
    }

}

class Pawn extends Piece{
    constructor(x,y,isWhite, boardArray){
        super(x,y,isWhite, boardArray)
        this.letter = "P"
        this.firstMove = true
    }

    show(){
        super.show()
    }

    //TODO: Pieces cannot go further than chess board

    move(){
        
        var vector = super.mouseTile()
        //If this piece is a white piece (since white and black pawns don't move in same directions)
        if(this.white){
            //If there is a piece on the tile we want to move on (to verify if we capture or simply move)
            if(this.boardArray[vector.x][vector.y] != null){
                //Verify if the capture position is really one space in diagonal to the pawn in white panws' direction
                if( (vector.x == this.matrixPosition.x + 1 || vector.x == this.matrixPosition.x - 1 ) 
                && vector.y == this.matrixPosition.y - 1){
                    this.boardArray[vector.x][vector.y].captured = true
                    super.move()
                } else{
                    return
                }
            }else if(vector.x == this.matrixPosition.x && vector.y == this.matrixPosition.y - 1){
                super.move()
            }
        }else if(!this.white){
            //If there is a piece on the tile we want to move on (to verify if we capture or simply move)
            if(this.boardArray[vector.x][vector.y] != null){
                //Verify if the capture position is really one space in diagonal to the pawn in black pawns' direction
                if( (vector.x == this.matrixPosition.x + 1 || vector.x == this.matrixPosition.x - 1 ) 
                && vector.y == this.matrixPosition.y + 1){
                    this.boardArray[vector.x][vector.y].captured = true
                    super.move()
                }else {
                    return
                }
            }else if(!this.white && vector.x == this.matrixPosition.x && vector.y == this.matrixPosition.y + 1){
                super.move()
            }
        }
        


        
    }
}
