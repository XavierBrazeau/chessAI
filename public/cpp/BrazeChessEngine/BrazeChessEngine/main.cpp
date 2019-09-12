//
//  main.cpp
//  BrazeChessEngine
//
//  Created by Xavier Brazeau on 19-09-06.
//  Copyright © 2019 Xavier Brazeau. All rights reserved.
//

#include <iostream>
#include <iomanip>
#include "headers/Move.hpp"
#include "headers/Board.hpp"

using namespace std;

void printOneTwentyArray(int oneTwentyArray[120]){
    int arrayPosition = 0;
    for(int row = 0; row < 12; row++){
        for(int column = 0; column < 10; column++){
            cout << setw(2) << setfill('0') << oneTwentyArray[arrayPosition++] << " ";
        }
        cout << endl;
    }
}

void printSixtyFourArray(int sixtyFourArray[64]){
    int arrayPosition = 0;
    for(int row = 0; row < 8; row++){
        for(int column = 0; column < 8; column++){
            cout << setw(2) << setfill('0') << sixtyFourArray[arrayPosition++] << " ";
        }
        cout << endl;
    }
}

int main(int argc, const char * argv[]) {
    // insert code here...
    cout << "Hello, World!\n";
    
    Board board = Board();
    
    board.setupOneTwentyToSixtyFour();
    printOneTwentyArray(oneTwentyToSixtyFour);
    
    cout << endl << endl;
    
    board.setupSixtyFourToOneTwenty();
    printSixtyFourArray(sixtyFourToOneTwenty);
    
    return 0;
}
