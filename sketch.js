var tileSize = 100
var board
var selectedPiece
function setup(){
    createCanvas(800,800)
    board = new Board()
}

function draw(){
    background(100)
    showGrid()
    if(!mouseIsPressed){
        if(selectedPiece != null) {
            selectedPiece.move()
            selectedPiece.taken = false
        }
        selectedPiece = null
    }
    board.show()
    
}

function mousePressed(){
    selectedPiece = board.takePiece()
    board.clicked(selectedPiece)
} 

 
function showGrid(){
    for(var i = 0; i < 8; i++){
        for(var j = 0; j < 8; j++){
            if((i+j)%2 == 1){
                fill(0)
            }
            else{
                fill(255)
            }
            rect(i*tileSize,j*tileSize,tileSize,tileSize)
        }
    }
}


