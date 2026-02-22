import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ]
  const [input, setinput] = useState(["", "", "", "", "", "", "", "", ""])

  const [player0, setplayer0] = useState(true)

  const [player1count, setplayer1count] = useState(0);
  const [player2count, setplayer2count] = useState(0)
  const [wined, setwined] = useState(false)

  const [winner, setwinner] = useState("")




  function clicked(num) {
    // winPatterns.forEach((pattern) => {
    //   if (input[pattern[0]] !== "") {
    //     if (input[pattern[0]] == input[pattern[1]] && input[pattern[1]] == input[pattern[2]]) {
    //       if (input[pattern[0]] == "X") {
    //         setwinner("player 1 Wins")
    //         console.log("Player 1 wins")
    //         setplayer1count((prev) => (prev + 1))
    //       }
    //       else {
    //         setwinner("player 2 Wins")
    //         console.log("Player 2 wins")

    //         setplayer2count((prev) => (prev + 1))
    //       }
    //     }
    //   }
    // })



    if (!wined && input[num] == "") {
      if (player0) {
        setplayer0(false)

        setinput((prev) => {
          let newInput = [...prev]
          newInput[num] = "X";

          winPatterns.forEach((pattern) => {
            if (newInput[pattern[0]] !== "") {
              if (newInput[pattern[0]] == newInput[pattern[1]] && newInput[pattern[1]] == newInput[pattern[2]]) {
                if (newInput[pattern[0]] == "X") {
                  setwinner("player 1 Wins")
                  setwined(true)
                  setplayer1count(prev => prev + 0.5)
                }
                else {
                  setwinner("player 2 Wins")
                  setwined(true)
                  setplayer2count(prev => prev + 0.5)
                }
              }

            }
          })



          return newInput
        })

      }

      else {
        setplayer0(true)

        setinput((prev) => {
          let newInput = [...prev]
          newInput[num] = "O";

          winPatterns.forEach((pattern) => {
            if (newInput[pattern[0]] !== "") {
              if (newInput[pattern[0]] == newInput[pattern[1]] && newInput[pattern[1]] == newInput[pattern[2]]) {
                if (newInput[pattern[0]] == "O") {
                  setwinner("player 2 Wins")
                  setwined(true)
                  setplayer2count(prev => prev + 0.5)
                }
                else {
                  setwinner("player 1 Wins")
                  setwined(true)
                  setplayer1count(prev => prev + 0.5)
                }
              }

            }
          })




          return newInput
        })

      }
    }



  }
  function reset() {
    setinput(["", "", "", "", "", "", "", "", ""])
    setwinner("")
    setwined(false)
  }

  function newgame() {
    setinput(["", "", "", "", "", "", "", "", ""])
    setwinner("");
    setwined(false)

  }




  return (
    <>
      <div className='Body'>
        <h1>{winner}</h1>
        <div className='box'>
          <h1 className="heading">Tic-Tac-Toe</h1>
          <div className="game">
            {input.map((element, index) => {
              return <button className="btn" onClick={() => clicked(index)}>{element}</button>
            })}
          </div>
        </div>
        <div className="players">
          <button className="pl">Player 1 = {player1count}</button>
          <button className="pl">Player 2 = {player2count}</button>
        </div>
        <div className="agian">
          <button className="reset" onClick={reset}>Reset</button>
          <button className="newGame" onClick={newgame}>New Game</button>
        </div>

      </div>

    </>
  )
}

export default App
