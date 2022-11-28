
export const predictMove = (
  markToCheck, 
  arrOfTiles
) => {
  if ( arrOfTiles[0] === markToCheck && arrOfTiles[0] === arrOfTiles[1] && !arrOfTiles[2]) {
    return 2;
  }
  else if ( arrOfTiles[1] === markToCheck && arrOfTiles[1] === arrOfTiles[2] && !arrOfTiles[0] ) {
    return 0;
  }
  else if ( arrOfTiles[3] === markToCheck && arrOfTiles[3] === arrOfTiles[4] && !arrOfTiles[5] ) {
    return 5;
  }
  else if ( arrOfTiles[4] === markToCheck && arrOfTiles[4] === arrOfTiles[5] && !arrOfTiles[3] ) {
    return 3;
  }
  else if ( arrOfTiles[6] === markToCheck && arrOfTiles[6] === arrOfTiles[7] && !arrOfTiles[8] ) {
    return 8;
  }
  else if ( arrOfTiles[7] === markToCheck && arrOfTiles[7] === arrOfTiles[8] && !arrOfTiles[6] ) {
    return 6;
  }
  else if ( arrOfTiles[0] === markToCheck && arrOfTiles[0] === arrOfTiles[3] && !arrOfTiles[6] ) {
    return 6;
  }
  else if ( arrOfTiles[3] === markToCheck && arrOfTiles[3] === arrOfTiles[6] && !arrOfTiles[0] ) {
    return 0;
  }
  else if ( arrOfTiles[1] === markToCheck && arrOfTiles[1] === arrOfTiles[4] && !arrOfTiles[7] ) {
    return 7;
  }
  else if ( arrOfTiles[4] === markToCheck && arrOfTiles[4] === arrOfTiles[7] && !arrOfTiles[1] ) {
    return 1;
  }
  else if ( arrOfTiles[2] === markToCheck && arrOfTiles[2] === arrOfTiles[5] && !arrOfTiles[8] ) {
    return 8;
  }
  else if ( arrOfTiles[5] === markToCheck && arrOfTiles[5] === arrOfTiles[8] && !arrOfTiles[2] ) {
    return 2;
  }
  else if ( arrOfTiles[4] === markToCheck && arrOfTiles[4] === arrOfTiles[8] && !arrOfTiles[0] ) {
    return 0;
  }
  else if ( arrOfTiles[0] === markToCheck && arrOfTiles[0] === arrOfTiles[4] && !arrOfTiles[8] ) {
    return 8;
  }
  else if ( arrOfTiles[4] === markToCheck && arrOfTiles[4] === arrOfTiles[8] && !arrOfTiles[0] ) {
    return 0;
  }
  else if ( arrOfTiles[2] === markToCheck && arrOfTiles[2] === arrOfTiles[4] && !arrOfTiles[6] ) {
    return 6;
  }
  else if ( arrOfTiles[4] === markToCheck && arrOfTiles[4] === arrOfTiles[6] && !arrOfTiles[2] ) {
    return 2;
  }
  else if ( arrOfTiles[2] === markToCheck && arrOfTiles[2] === arrOfTiles[6] && !arrOfTiles[4] ) {
    return 4;
  }
  else if ( arrOfTiles[0] === markToCheck && arrOfTiles[0] === arrOfTiles[8] && !arrOfTiles[4] ) {
    return 4;
  }
  else if ( arrOfTiles[0] === markToCheck && arrOfTiles[0] === arrOfTiles[6] && !arrOfTiles[3] ) {
    return 3;
  }
  else if ( arrOfTiles[1] === markToCheck && arrOfTiles[1] === arrOfTiles[7] && !arrOfTiles[4] ) {
    return 4;
  }
  else if ( arrOfTiles[2] === markToCheck && arrOfTiles[2] === arrOfTiles[8] && !arrOfTiles[5] ) {
    return 5;
  }
  else if ( arrOfTiles[0] === markToCheck && arrOfTiles[0] === arrOfTiles[2] && !arrOfTiles[1] ) {
    return 1;
  }
  else if ( arrOfTiles[6] === markToCheck && arrOfTiles[6] === arrOfTiles[8] && !arrOfTiles[7] ) {
    return 7;
  }
  else if ( arrOfTiles[3] === markToCheck && arrOfTiles[3] === arrOfTiles[5] && !arrOfTiles[4] ) {
    return 4;
  }
};