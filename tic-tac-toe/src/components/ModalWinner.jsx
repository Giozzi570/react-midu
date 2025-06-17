import Square from "./Square"


export function ModalWinner( {Winner , resetGame} ){
    if(Winner == null) return null
    const winnerText = Winner == false ? 'Empate' : "Gano"
    return(
              <section className='winner'>
                <div className='text'>
                  <h2>{winnerText}</h2>
                  <header className='win'><Square>{Winner}</Square></header>
                  <button onClick={resetGame}>Jugar de vuelta</button>
                </div>
              </section>
            )
          
}