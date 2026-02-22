import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { FaPartyHorn } from "react-icons/fa";

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
                  setwinner(`${name1} Wins`)
                  setwined(true)
                  setplayer1count(prev => prev + 0.5)
                }
                else {
                  setwinner(`${name2} Wins`)
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
                  setwinner(`${name2} Wins`)
                  setwined(true)
                  setplayer2count(prev => prev + 0.5)
                }
                else {
                  setwinner(`${name1} Wins`)
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
  const [name2, setname2] = useState("Player 2")
  const [name1, setname1] = useState("Player 1");

  function changeName1() {
    let newname1 = prompt("Enter name of Player 1(X)")
    setname1(newname1 || "Player 1")
  }

  function changeName2() {
    let newname2 = prompt("Enter name of Player 2(O)")
    setname2(newname2 || "Player 2")

  }




  return (
    <>
      <div className='Body'>
        <h1 className="winner">{winner || "Welcome to Tic-Tac-Toe!" }</h1>
        <h1 className="turn">Its {player0 ? name1 : name2}'s Turn</h1>
        <div className='box'>
          <h1 className="heading">Tic-Tac-Toe</h1>
          <div className="game">
            {input.map((element, index) => {
              return <button className="btn" onClick={() => clicked(index)}>{element}</button>
            })}
          </div>
        </div>
        <div className="players">
          <button className="pl" onClick={changeName1}>{name1} = {player1count}</button>
          <button className="pl" onClick={changeName2}>{name2} = {player2count}</button>
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
