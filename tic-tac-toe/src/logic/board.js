import { WINNER_COMBOS } from "../const"
export function checkWinner(boardTocheck) {
    for(const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(boardTocheck[a] && boardTocheck[a] === boardTocheck[b] && boardTocheck[a] === boardTocheck[c]){
        return boardTocheck[a]
      }
    }
}

export function gameOver( Array ) {
    const bool = !Array.includes(null)
    return bool
}