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
  
  server = [
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
  serverStatus: string = 'turned Off' ;


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.server.push( { name: this.serverName, id: Math.random() } );
    this.serverName = '' ;
    this.serverCreationStatus = 'Server with name ' + this.serverName + ' is created';
  }

  onUpdateServer( event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

  getServerStatus(server){
    return server.id > 0.5 ;
  }

  onTaskRemove(id){
    console.log('remove', id)
    const index = this.server.findIndex(s => s.id === id);
    this.server = [
      ...this.server.slice(0, index),
      ...this.server.slice(index + 1)
    ];
  }

}
