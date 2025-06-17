import { useState } from 'react'
import './App.css'
import confetti from "canvas-confetti"
import Square from "./components/Square"
import { Turns } from './const'
import { gameOver , checkWinner } from './logic/board'
import { ModalWinner } from './components/ModalWinner'


function App() {
  
  const [Board, setBoard] = useState(() => {
    const boardToLocalStorage = window.localStorage.getItem("Board")
    return boardToLocalStorage ? JSON.parse(boardToLocalStorage) : Array(9).fill(null)})
  const [Turn, setTurn] = useState(() => {
    const turnStorage = window.localStorage.getItem("Turn")
    return turnStorage ?? Turns.X
  })
  const [Winner, setWinner] = useState(null)


const turnAfter = Turn == Turns.O ? Turns.X : Turns.O

const updateBoard = ( index ) => {
  if(Board[index] || Winner) return
      const newBoard = [...Board]
      newBoard[index] = Turn
      setBoard(newBoard)
      setTurn(Turn == Turns.O ? Turns.X : Turns.O)
      window.localStorage.setItem('Board', JSON.stringify(newBoard))
      window.localStorage.setItem('Turn', turnAfter)
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
        <button onClick={resetGame}>Resetear</button>
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
