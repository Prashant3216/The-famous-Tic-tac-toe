import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
})
export class App {
  name = 'Tic Tac Toe';
  player =["X","O"]
  turn:number=0
  winner!:string | null 

  ticTacToe:string[]=Array(9).fill('')
  handleTicTacToe(index:number){
    this.ticTacToe[index]=this.player[this.turn]
    this.turn= this.turn?0:1
    this.winner=null
    this.handleWinner()
  }

  handleReset(){
    this.ticTacToe=Array(9).fill('')
    this.turn=0

  }
  handleWinner(){

    if((this.ticTacToe[0] === this.ticTacToe[1] && this.ticTacToe[1]=== this.ticTacToe[2] && this.ticTacToe[2]) 
    || (this.ticTacToe[3] === this.ticTacToe[4] && this.ticTacToe[4]=== this.ticTacToe[5]&& this.ticTacToe[5])
    || (this.ticTacToe[6] === this.ticTacToe[7] && this.ticTacToe[7]=== this.ticTacToe[8] && this.ticTacToe[8])
    || (this.ticTacToe[0] === this.ticTacToe[3] && this.ticTacToe[3]=== this.ticTacToe[6]&& this.ticTacToe[6]) 
    || (this.ticTacToe[1] === this.ticTacToe[4] && this.ticTacToe[4]=== this.ticTacToe[7] && this.ticTacToe[7])
    || (this.ticTacToe[2] === this.ticTacToe[5] && this.ticTacToe[5]=== this.ticTacToe[8]&& this.ticTacToe[8])
    || (this.ticTacToe[0] === this.ticTacToe[4] && this.ticTacToe[4]=== this.ticTacToe[8] && this.ticTacToe[8])
    || (this.ticTacToe[2] === this.ticTacToe[4] && this.ticTacToe[4]=== this.ticTacToe[6]&& this.ticTacToe[6])){
      this.winner=this.ticTacToe[0]
    }


  }

}

bootstrapApplication(App);
