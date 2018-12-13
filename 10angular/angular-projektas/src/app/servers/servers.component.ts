import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'dar nera jokio serverio';
  serverName='testinis serveris';
  serverCreated= false;
  servers=['pirmas' , 'antras'];

  constructor() {
      setTimeout(()=>{
        this.allowNewServer=true;
      },2000) ;


   }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus= 'serveris pavadinimu ' + this.serverName + ' sukurtas' ;
  }

  onUpdateServer(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
