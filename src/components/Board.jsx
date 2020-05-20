import React from 'react'
// import ReactDom from 'react-dom'
import Square from './Square'

// Board component extending ReactComponent
class Board extends React.Component {   
    constructor(props){
        super(props)
        // state exists in parent class ReactComponent
        this.state = {
            // data structure used to maintain which squares have been filled.
            squares:Array(9).fill(null),
            xIsNext: true,
        };
    }
  
    getNextPlayer = () => { return this.state.xIsNext ? 'X' : 'O';}

    handleClick(i){
        // we use the slice method to return the entire array.
        // we won't modify the state square directly but slice() will give us a copy of the array
        console.log("clicked");
        
        const squares = this.state.squares.slice();

        // when click event is called on the cell the array copy is assigned at the index position the X or O value
        squares[i] = this.getNextPlayer.call()
        this.setState({squares: squares,
                      xIsNext: !this.state.xIsNext})

    }

   // renderSquare arrow function which takes a single parameter 'i' and passes it to the Square component
   // board wil instruct each square of it's value based on the value in the array.
   // two props are being passed down to Square handleSquarClick function and the the value from the square
   renderSquare = (i) =>  <Square  value={this.state.squares[i]}   onClick={ () => this.handleClick(i)}/>

    render() {
       const winner = calculateWinner(this.state.squares)
        
       let status = winner ? 'Winner:' + winner : 'Next Player:' + this.getNextPlayer.call()

       return (
          <div>
            <div className="status">{status}</div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );      
    }
  }

  function calculateWinner(squares){   
    // array of possible moves that would have a winning play
    const lines= [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
  
  for (let i = 0; i < lines.length; i++){

    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a]
    }
  }
  return null;
}

export default Board