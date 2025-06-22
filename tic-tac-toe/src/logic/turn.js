export const saveGameToStorage = ({ board, turn }) => {
  // guardar aqui partida
  window.localStorage.setItem('Board', JSON.stringify(board))
  window.localStorage.setItem('Turn', turn)
}

export const removeItemStorage = () => {
  window.localStorage.removeItem("Board")
  window.localStorage.removeItem("Turn")
}