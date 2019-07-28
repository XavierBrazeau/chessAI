class Board {
    constructor() {
      this.whitePieces = []
      this.blackPieces = []
      this.boardArray = Array.from(Array(8),() => new Array(8));
      this.score = 0
      this.setupPieces()
  
  
    }
  
    setupPieces() {
        this.whitePieces.push(new King(4, 7, true));
        this.whitePieces.push(new Queen(3, 7, true));
        this.whitePieces.push(new Bishop(2, 7, true));
        this.whitePieces.push(new Bishop(5, 7, true));
        this.whitePieces.push(new Knight(1, 7, true));
        this.whitePieces.push(new Rook(0, 7, true));
        this.whitePieces.push(new Knight(6, 7, true));
        this.whitePieces.push(new Rook(7, 7, true));
    
        this.whitePieces.push(new Pawn(4, 6, true));
        this.whitePieces.push(new Pawn(3, 6, true));
        this.whitePieces.push(new Pawn(2, 6, true));
        this.whitePieces.push(new Pawn(5, 6, true));
        this.whitePieces.push(new Pawn(1, 6, true));
        this.whitePieces.push(new Pawn(0, 6, true));
        this.whitePieces.push(new Pawn(6, 6, true));
        this.whitePieces.push(new Pawn(7, 6, true));
    
        //black pieces
        this.blackPieces.push(new King(4, 0, false));
        this.blackPieces.push(new Queen(3, 0, false));
        this.blackPieces.push(new Bishop(2, 0, false));
        this.blackPieces.push(new Bishop(5, 0, false));
        this.blackPieces.push(new Knight(1, 0, false));
        this.blackPieces.push(new Rook(0, 0, false));
        this.blackPieces.push(new Knight(6, 0, false));
        this.blackPieces.push(new Rook(7, 0, false));
    
        this.blackPieces.push(new Pawn(4, 1, false));
        this.blackPieces.push(new Pawn(3, 1, false));
        this.blackPieces.push(new Pawn(2, 1, false));
        this.blackPieces.push(new Pawn(5, 1, false));
        this.blackPieces.push(new Pawn(1, 1, false));
        this.blackPieces.push(new Pawn(0, 1, false));
        this.blackPieces.push(new Pawn(6, 1, false));
        this.blackPieces.push(new Pawn(7, 1, false));

        this.whitePieces.forEach(p => {
          this.boardArray[p.matrixPosition.x][p.matrixPosition.y] = p
        })

        this.blackPieces.forEach(p => {
            this.boardArray[p.matrixPosition.x][p.matrixPosition.y] = p
          })
      
    }

    show() {
        for (var i = 0; i < this.whitePieces.length; i++) {
          this.whitePieces[i].show()
        }
        for (var i = 0; i < this.blackPieces.length; i++) {
          this.blackPieces[i].show()
        }
    }

    takePiece(){
        return this.boardArray[(mouseX - mouseX % 100)/100][(mouseY - mouseY % 100)/100]
    }

    clicked(piece){
        if(piece == null){
            return
        }

        while(mouseIsPressed){

        }
        var positionX = (mouseX - mouseX % 100)/100
        var positionY = (mouseY - mouseY % 100)/100
        this.boardArray[piece.matrixPosition.x][piece.matrixPosition.y] = null
        this.boardArray[positionX][positionY] = piece
        piece.matrixPosition.x = positionX
        piece.matrixPosition.y = positionY
        
    }

}