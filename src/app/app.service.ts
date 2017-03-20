import {Injectable} from '@angular/core';

import {Player} from './player';

@Injectable()
export class AppService{
    allPlayers:Player[]=[]; //所有玩家
    addPlayer(newplayer:Player):void{
        this.allPlayers.push(newplayer);
    }
    restart(){

    }
}