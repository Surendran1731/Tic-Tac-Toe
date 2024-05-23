import React, { useState } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
function TicTacToe() {
     const { width, height } = useWindowSize()
     //step1:To create board on ui to create board state
     const[board,setBoard]=useState([
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
     ])
     //to create state on X Turn
     const[isXturn,setIsXturn]=useState(true)
     //step3:To decide  the winner
     const desideWinner=(board)=>{
          const lines=[
               [0,1,2],
               [3,4,5],
               [6,7,8],
               [0,3,6],
               [1,4,7],
               [2,5,8],
               [0,4,8],
               [2,4,6],
          ]
          for(let i=0;i<lines.length;i++){
               console.log(lines[i]);
               const [a,b,c]=lines[i];
               console.log("i",i,"a=>",board[a],"b=>",board[b],"c=>",board[c]);
               if(board[a]!==null && board[a] ===board[b] && board[b]===board[c]){// to descide the winner
                    console.log(
               "After Condition of a=>",board[a],
               "After Condition ofb=>",board[b],
               "After Condition ofc=>",board[c]);
               console.log("Winner",board[a]);
               return board[a];
               }
          }
          return null;
     }
     const winner=desideWinner(board);
     console.log("Winner",winner);


      //step2:To click function on X and O 
      const handleClick=(index)=>{
          console.log(board);
          console.log(board[index]);
          console.log(index);
          if(winner===null&& !board[index]){
               const boardCopy=[...board];
               boardCopy[index]=isXturn?"X":"O";
               console.log("Board Copy",boardCopy);
               setBoard(boardCopy)
               setIsXturn(!isXturn)
          }
     }
  return (
    <div className='fullgame'>
     <h2>TicTacToe</h2>
     {winner ? <h1>Winner: {winner}</h1> : ""}
      {winner && <Confetti width={width} height={height} />}
      <div className="board">
     {winner === null && 
     board.map((val,index)=>(
               <GameBoard 
               key={index} 
               val={val} 
               onPlayerClick={()=>handleClick(index)}
               />
          ))
     }
     </div>
    </div>
  )
}

function GameBoard({val,onPlayerClick}){
     const styles={ color:val === "X"?"green":"red",}
     return(
     <div style={styles} className='game-board' onClick={onPlayerClick}>
        {val}
     </div>
     )
}


export default TicTacToe
