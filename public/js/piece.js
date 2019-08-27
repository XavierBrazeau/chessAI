class Piece {
 
    constructor(x, y, isWhite, pBoardArray){
        this.matrixPosition = createVector(x,y)
        this.piecePosition = createVector(tileSize * x + tileSize / 2, tileSize * y  + tileSize / 2)

        this.boardArray = pBoardArray
        this.taken = false
        this.white = isWhite
    }

    show(){
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

    mouseTile(){
        return createVector((mouseX - mouseX % 100)/100,(mouseY - mouseY % 100)/100)
    }
    
    move(){
        var vector = this.mouseTile()
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
}

class Knight extends Piece{
    constructor(x,y,isWhite, boardArray){
        super(x,y,isWhite, boardArray)
        this.letter = "Kn"
    }
}

class Rook extends Piece{
    constructor(x,y,isWhite, boardArray){
        super(x,y,isWhite, boardArray)
        this.letter = "R"
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

    move(){
        
        var vector = super.mouseTile()
        if(this.white && vector.x == this.matrixPosition.x && vector.y == this.matrixPosition.y -1){
            super.move()
        }else if(!this.white && vector.x == this.matrixPosition.x && vector.y == this.matrixPosition.y + 1){
            super.move()
        }

        
    }
}
