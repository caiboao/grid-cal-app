import { Component } from '@angular/core';

import {Player} from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '计分';

  allPlayers:Player[]=[]; //所有玩家
  addPlayer(newplayers:Player[]):void{
    newplayers.forEach(p=>this.allPlayers.push(p));
  }
  restart(){
    this.allPlayers=[];
  }
  

}
