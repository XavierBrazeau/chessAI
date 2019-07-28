var tileSize = 100
var test
function setup(){
    createCanvas(800,800)
    test = new Board()
}

function draw(){
    background(100);
    showGrid();
    test.show()
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


