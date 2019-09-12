//
//  board.cpp
//  BrazeChessEngine
//
//  Created by Xavier Brazeau on 19-09-06.
//  Copyright © 2019 Xavier Brazeau. All rights reserved.
//

#include "headers/Board.hpp"

int oneTwentyToSixtyFour[120];
int sixtyFourToOneTwenty[64];

Board::Board() {
    
}

int Board::toOneTwenty(int sixtyFour){
    int rank    = sixtyFour / 8;
    
    int number  = sixtyFour + 21 + (2 * rank);
    
    return number;
}

int Board::toSixtyFour(int oneTwenty){
    int rank    = oneTwenty / 10 - 2;
    
    int number  = oneTwenty - 21 - (2 * rank);
    
    return number;
}

void Board::setupOneTwentyToSixtyFour(){
    int i = 0;
    for(; i < 20; i++){
        oneTwentyToSixtyFour[i] = NO_SQUARE;
    }
    
    for(;i < 100; i++){
        oneTwentyToSixtyFour[i] = NO_SQUARE;
        i++;
        for(int j = 0; j < 8;j++){
            oneTwentyToSixtyFour[i] = toSixtyFour(i);
            i++;
        }
        oneTwentyToSixtyFour[i] = NO_SQUARE;
    }
    
    for(;i < 120; i++){
        oneTwentyToSixtyFour[i] = NO_SQUARE;
    }
}

void Board::setupSixtyFourToOneTwenty(){
    for(int i = 0; i < 64; i++){
        sixtyFourToOneTwenty[i] = toOneTwenty(i);
    }
}

void Board::printBitBoard(U64 bitBoard){
    
    int rank = 0;
    int file = 0;
    
    for(;rank < 8; rank++){
        for(;file < 8; file++){
            
        }
    }
    

    
}

