//
//  Move.hpp
//  BrazeChessEngine
//
//  Created by Xavier Brazeau on 19-09-11.
//  Copyright © 2019 Xavier Brazeau. All rights reserved.
//

#ifndef Move_hpp
#define Move_hpp

#include <stdio.h>

#include "definitions.h"
#include <stdio.h>

using namespace std;

class Move {
    int moveNumber;
    int castlePermission;
    int enPassantSquare;
    int fiftyMoveStatus;
    U64 positionKey;
public:
    Move();
};

#endif /* Move_hpp */

