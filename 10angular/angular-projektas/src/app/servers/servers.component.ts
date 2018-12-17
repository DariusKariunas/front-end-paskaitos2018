import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'dar nera jokio serverio';
  serverName='';
  serverCreated= false;
  servers=[
    {
      name: 'server1',
      id: 0.4,
    },
    {
      name: 'server2',
      id: 0.7,
    }
  ];
  serverId: number = 10;
  serverStatus: string='isjungtas';

  constructor() {
      setTimeout(()=>{
        this.allowNewServer=true;
      },2000) ;


   }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push({ name: this.serverName, id: Math.random()});
    this.serverName = '';
    this.serverCreationStatus= 'serveris pavadinimu ' + this.serverName + ' sukurtas' ;
  }

  onUpdateServer(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getServerStatus(server){
    return server.id > 0.5 ;
  }

  onTaskRemove(id) {
    console.log('remove', id)
    const index = this.servers.findIndex(s => s.id === id);
    this.servers = [
      ...this.servers.slice(0, index),
      ...this.servers.slice(index + 1)
    ];
  }
}
