import { useState , useEffect } from 'react'
import './App.css'
import confetti from "canvas-confetti"
import Square from "./components/Square"
import { Turns } from './const'
import { gameOver , checkWinner } from './logic/board'
import { ModalWinner } from './components/ModalWinner'
import { saveGameToStorage  } from './logic/Turn'
function App() {
  const [Board, setBoard] = useState(() => {
    const boardToLocalStorage = window.localStorage.getItem("Board")
    return boardToLocalStorage ? JSON.parse(boardToLocalStorage) : Array(9).fill(null)})
  const [Turn, setTurn] = useState(() => {
    const turnStorage = window.localStorage.getItem("Turn")
    return turnStorage ?? Turns.X
  })
  const [Winner, setWinner] = useState(null)

const updateBoard = ( index ) => {
  if(Board[index] || Winner) return
      const newBoard = [...Board]
      newBoard[index] = Turn
      setBoard(newBoard)
      const newTurn = Turn == Turns.O ? Turns.X : Turns.O
      setTurn(newTurn)
      const newWinner = checkWinner(newBoard)
      if(newWinner){
        confetti({
          particleCount: 100,
          startVelocity: 30,
          spread: 360,
        })
        setWinner(newWinner)
      } 
      else if(gameOver(newBoard)){
        setWinner(false)
      }
  useEffect(
      saveGameToStorage({
        board : newBoard,
        turn : newTurn
      }),[Turn]
  )
}
const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(Turns.X)
  setWinner(null)
  window.localStorage.removeItem("Board")
  window.localStorage.removeItem("Turn")
}
  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <div id='container-Buttos-setTheme-restart'>
          <button onClick={resetGame}>Resetear</button>
        </div>
          <section className='game'>
            {
              Board.map((_,index) => {
                return(
                <Square
                key={index}
                index={index}
                userTurn={Turn}
                updateBoard={updateBoard}
                >
                  {_}
                </Square>
                )
              })
            }

          </section>
          <section className='turn'>
            <Square isSelected={Turn == Turns.O}>{Turns.O}</Square>
            <Square isSelected={Turn == Turns.X}>{Turns.X}</Square>
          </section>

          <ModalWinner Winner={Winner} resetGame={resetGame}/>
      </main>
    </>
  )
}

export default App
