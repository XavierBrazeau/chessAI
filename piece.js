class Piece {
 
    constructor(x, y, isWhite){
       this.matrixPosition = createVector(x,y)
       this.piecePosition = createVector(tileSize * x + tileSize / 2, tileSize * y  + tileSize / 2)

       this.taken = false
       this.white = isWhite
    }

    show(){
            textSize(30)
            strokeWeight(10)
            if(this.white){
                fill(255)
                stroke(0)
            }else{
                fill(30)
                stroke(255)
            }
            textAlign(CENTER,CENTER)
            text(this.letter, this.piecePosition.x, this.piecePosition.y)
    }
    
    /* clicked(mouseX, mouseY){
        if(mouseX)
    } */

    move(){

    }

}

class King extends Piece{
    constructor(x,y,isWhite){
        super(x,y,isWhite)
        this.letter = "K"
    }
    
}

class Queen extends Piece{
    constructor(x,y,isWhite){
        super(x,y,isWhite)
        this.letter = "Q"
    }

}

class Bishop extends Piece{
    constructor(x,y,isWhite){
        super(x,y,isWhite)
        this.letter = "B"
    }
}

class Knight extends Piece{
    constructor(x,y,isWhite){
        super(x,y,isWhite)
        this.letter = "Kn"
    }
}

class Rook extends Piece{
    constructor(x,y,isWhite){
        super(x,y,isWhite)
        this.letter = "R"
    }
}

class Pawn extends Piece{
    constructor(x,y,isWhite){
        super(x,y,isWhite)
        this.letter = "P"
    }
}
