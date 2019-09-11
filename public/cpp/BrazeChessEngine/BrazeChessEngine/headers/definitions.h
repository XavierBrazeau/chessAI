//
//  definitions.h
//  BrazeChessEngine
//
//  Created by Xavier Brazeau on 19-09-06.
//  Copyright © 2019 Xavier Brazeau. All rights reserved.
//

#ifndef definitions_h
#define definitions_h

#define NAME "BRAZE 1.0"
#define NUM_OF_BOARD_TILES 120
#define MAXGAMEMOVES 2048

typedef unsigned long long U64;

enum{empty, wP, wN, wB, wR, wQ, wK, bP, bN, bB, bQ, bK};
enum{FILE_A, FILE_B, FILE_C, FILE_D, FILE_E, FILE_F, FILE_G, FILE_H, FILE_NULL};
enum{RANK_1, RANK_2, RANK_3, RANK_4, RANK_5, RANK_6, RANK_7, RANK_8, RANK_NULL};
enum{WHITE, BLACK, BOTH};

enum{whiteKingCastling = 1, whiteQueenCastling = 2, blackKingCastling = 3, blackQueenCastling = 4};




enum{
    A1 = 21, B1, C1, D1, E1, F1, H1,
    A2 = 31, B2, C2, D2, E2, F2, H2,
    A3 = 41, B3, C3, D3, E3, F3, H3,
    A4 = 51, B4, C4, D4, E4, F4, H4,
    A5 = 61, B5, C5, D5, E5, F5, H5,
    A6 = 71, B7, C7, D7, E7, F7, H7,
    A7 = 81, B8, C8, D8, E8, F8, H8,
    A8 = 91, B9, C9, D9, E9, F9, H9, NO_SQUARE
};



#endif /* definitions_h */
