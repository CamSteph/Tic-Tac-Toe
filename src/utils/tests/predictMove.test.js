import { describe, it, expect } from "vitest";
import { predictMove } from '../predictMove';

describe('Board tiles are filled', () => {

  
  it('Defend top row\'s last tile', () => {
    const arrOfTiles = ['X', 'X', '', '', '', '', '', '', ''];
    const spotToMoveTo = predictMove('X', arrOfTiles);
    expect(spotToMoveTo).toEqual(2);
  });
  
  it('Defend bottom row\'s first tile', () => {
    const arrOfTiles = ['', '', '', '', '', '', '', 'X', 'X'];
    const spotToMoveTo = predictMove('X', arrOfTiles);
    expect(spotToMoveTo).toEqual(6);
  });
  
  it('Defend middle column\'s middle tile', () => {
    const arrOfTiles = ['', 'X', '', '', '', '', '', 'X', ''];
    const spotToMoveTo = predictMove('X', arrOfTiles);
    expect(spotToMoveTo).toEqual(4);
  });
  
  it('Defend last columns\'s middle tile', () => {
    const arrOfTiles = ['', '', 'X', '', '', '', '', '', 'X'];
    const spotToMoveTo = predictMove('X', arrOfTiles);
    expect(spotToMoveTo).toEqual(5);
  });
  
  it('Defend left to right diagnal middle tile', () => {
    const arrOfTiles = ['X', '', '', '', 'X', '', '', '', ''];
    const spotToMoveTo = predictMove('X', arrOfTiles);
    expect(spotToMoveTo).toEqual(8);
  });
  
  it('Defend right to left diagnal middle tile', () => {
    const arrOfTiles = ['', '', 'X', '', 'X', '', '', '', ''];
    const spotToMoveTo = predictMove('X', arrOfTiles);
    expect(spotToMoveTo).toEqual(6);
  });
  
  it('Move to middle tile on last row', () => {
    const arrOfTiles = ['', '', '', '', '', '', 'O', '', 'O'];
    const spotToMoveTo = predictMove('O', arrOfTiles);
    expect(spotToMoveTo).toEqual(7);
  });

});