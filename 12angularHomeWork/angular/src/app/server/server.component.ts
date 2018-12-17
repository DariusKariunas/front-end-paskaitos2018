import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  serverId: number = 10 ;
  serverStatus: string = 'Server is turned off' ;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'turned On' : 'turned Off'
   }

  ngOnInit() {
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'turned On' ? 'green' : 'red' ;
  }

}
