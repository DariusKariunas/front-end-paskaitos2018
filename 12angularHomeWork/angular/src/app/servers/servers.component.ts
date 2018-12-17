import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No new servers';
  serverName='';
  serverCreated = false;
  servers = [
    {
      name: 'server1',
      id: 0.4,
    },
    {
      name: 'server2',
      id: 0.7,
    }
  ] ;
  serverId: number = 10;
  serverStatus: string = 'turned Off';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server with name ' + this.serverName + ' is created';
  }

  onUpdateServer( event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }



}
