import { describe, it, expect } from "vitest";
import { predictMove } from '../predictMove';

describe('Board tiles are filled', () => {

  
  it('Top row\'s last tile to be filled', () => {
    const arrOfTiles = ['X', 'X', '', '', '', '', '', '', ''];
    const spotToMoveTo = predictMove('X', arrOfTiles);
    expect(spotToMoveTo).toEqual(2);
  });
  
  it('Bottom row\'s first tile to be filled', () => {
    const arrOfTiles = ['', '', '', '', '', '', '', 'X', 'X'];
    const spotToMoveTo = predictMove('X', arrOfTiles);
    expect(spotToMoveTo).toEqual(6);
  });
  
  it('Middle column\'s middle tile to be filled', () => {
    const arrOfTiles = ['', 'X', '', '', '', '', '', 'X', ''];
    const spotToMoveTo = predictMove('X', arrOfTiles);
    expect(spotToMoveTo).toEqual(4);
  });
  
  it('Last columns\'s middle tile to be filled', () => {
    const arrOfTiles = ['', '', 'X', '', '', '', '', '', 'X'];
    const spotToMoveTo = predictMove('X', arrOfTiles);
    expect(spotToMoveTo).toEqual(5);
  });
  
  it('Left to right diagnal middle tile to be filled', () => {
    const arrOfTiles = ['X', '', '', '', 'X', '', '', '', ''];
    const spotToMoveTo = predictMove('X', arrOfTiles);
    expect(spotToMoveTo).toEqual(8);
  });
  
  it('Right to left diagnal middle tile to be filled', () => {
    const arrOfTiles = ['', '', 'X', '', 'X', '', '', '', ''];
    const spotToMoveTo = predictMove('X', arrOfTiles);
    expect(spotToMoveTo).toEqual(6);
  });

});