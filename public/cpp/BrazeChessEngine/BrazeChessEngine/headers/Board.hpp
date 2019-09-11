//
//  board.hpp
//  BrazeChessEngine
//
//  Created by Xavier Brazeau on 19-09-06.
//  Copyright © 2019 Xavier Brazeau. All rights reserved.
//

#ifndef Board_hpp
#define Board_hpp

#include "definitions.h"
#include "Move.hpp"
#include <stdio.h>

class Board {
    int pieces[NUM_OF_BOARD_TILES];
    
    //64 bit attribute telling the positions of the pawns on the board.
    //First position is white pawns, second position is black pawns and
    //Third position is both
    U64 pawns[3];
    
    //Positions of kings : first is white second is black
    int squaresOfKings[2];
    
    //Whos turn is it?
    int side;
    
    //Tracks what is the current enPassant square
    int enPassantSquare;
    
    //Counter that increments up to fifty non-captured moves, meaning the game is over
    int fiftyMoveCounter;
    
    //How many half moves are into the current search
    int ply;
    
    //In the total game so far, how many ply's were played
    int historyOfPlys;

    //Unique key generated for each position
    U64 positionKey;
    
    //returns the amount of a given piece still left on the board
    int pieceNumber[13];
    
    //Number of big pieces stored by color
    int numberOfBigPieces[3];
    
    //Number of rooks and queens stored by color
    int numberOfMajorPieces[3];
    
    //Number of bishops and knights stored by color
    int numberOfMinorPieces[3];
    
    //Array of all previous moves
    Move moveHistory[MAXGAMEMOVES];
    
    
    
    
public:
    
};

#endif /* Board_hpp */
