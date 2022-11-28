
export const checkWinner = (
  mark, 
  arrOfTiles, 
  setWinner, 
  tallyScore, 
  setIsADraw
) => {

  if ( arrOfTiles[0] === mark && arrOfTiles[0] === arrOfTiles[1] && arrOfTiles[1] === arrOfTiles[2] ) {
    setWinner(arrOfTiles[0]);
    tallyScore(arrOfTiles[0]);
    return true;
  }
  else if ( arrOfTiles[3] === mark && arrOfTiles[3] === arrOfTiles[4] && arrOfTiles[4] === arrOfTiles[5] ) {
    setWinner(arrOfTiles[3]);
    tallyScore(arrOfTiles[3]);
    return true;
  }
  else if ( arrOfTiles[6] === mark && arrOfTiles[6] === arrOfTiles[7] && arrOfTiles[7] === arrOfTiles[8]) {
    setWinner(arrOfTiles[6]);
    tallyScore(arrOfTiles[6]);
    return true;
  }
  else if ( arrOfTiles[0] === mark && arrOfTiles[0] === arrOfTiles[3] && arrOfTiles[3] === arrOfTiles[6]) {
    setWinner(arrOfTiles[0]);
    tallyScore(arrOfTiles[0]);
    return true;
  }
  else if ( arrOfTiles[1] === mark && arrOfTiles[1] === arrOfTiles[4] && arrOfTiles[4] === arrOfTiles[7]) {
    setWinner(arrOfTiles[1]);
    tallyScore(arrOfTiles[1]);
    return true;
  }
  else if ( arrOfTiles[2] === mark && arrOfTiles[2] === arrOfTiles[5] && arrOfTiles[5] === arrOfTiles[8]) {
    setWinner(arrOfTiles[2]);
    tallyScore(arrOfTiles[2]);
    return true;
  }
  else if ( arrOfTiles[2] === mark && arrOfTiles[2] === arrOfTiles[4] && arrOfTiles[4] === arrOfTiles[6]) {
    setWinner(arrOfTiles[2]);
    tallyScore(arrOfTiles[2]);
    return true;
  }
  else if ( arrOfTiles[0] === mark && arrOfTiles[0] === arrOfTiles[4] && arrOfTiles[4] === arrOfTiles[8]) {
    setWinner(arrOfTiles[0]);
    tallyScore(arrOfTiles[0]);
    return true;
  }
  const areAllValuesSet = arrOfTiles.every(tile => tile.length > 0);
  if ( areAllValuesSet ) {
    tallyScore('draws');
    setIsADraw(true);
  }
  return false;

};
