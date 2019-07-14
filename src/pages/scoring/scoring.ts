import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScoringPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-scoring',
  templateUrl: 'scoring.html',
})
export class ScoringPage {
  rings:{auto:{l:number,r:number,rc:number,t:number,u:number},
            teleop:{l:number,r:number,rc:number,t:number,u:number}} =
    {auto:{l:0,r:0,rc:0,t:0,u:0},teleop:{l:0,r:0,rc:0,t:0,u:0}};
  teleopMode:boolean = false;
  touchPenalties:number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  clear(){
    if(window.confirm("Are you sure you would like to clear?")){
      this.rings = {auto:{l:0,r:0,rc:0,t:0,u:0},teleop:{l:0,r:0,rc:0,t:0,u:0}};
      this.teleopMode = false;
      this.touchPenalties = 0;
    }
  }

  autoToggle(){
    // Commented out to disable transfer of auto points to teleopMode

    /*
    if(this.teleopMode == true){
      for(var obj in this.rings.teleop){
        if(this.rings.teleop.hasOwnProperty(obj) && this.rings.teleop[obj] != 0){
          return;
        }
      }
      this.rings.teleop = JSON.parse(JSON.stringify(this.rings.auto));
    }*/
  }

  autoTotal(){
    return (this.rings.auto.l*2+this.rings.auto.r*6+this.rings.auto.t*5);
  }

  teleopTotal(){
    return (this.rings.teleop.l*1 +this.rings.teleop.r*3 +this.rings.teleop.t*5 +this.rings.teleop.rc*5 +this.rings.teleop.u*10);
  }

  max(a, b){
    return Math.max(a, b);
  }
}
