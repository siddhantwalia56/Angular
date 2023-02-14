import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name='Siddhant'
   title = 'first-app';
  // serverElements=[{type:'server', name:'Testserver',content:'Just a test!'}]

  // onServerAdded(serverData:{serverName:string,serverContent: string}){
  //   this.serverElements.push({
  //     type:'server',
  //     name:serverData.serverName,
  //     content:serverData.serverContent
  //   })
  // }

  // onBlueprintAdded(blueprintData:{serverName:string,serverContent: string}){
  //   this.serverElements.push({
  //     type:'blueprint',
  //     name:blueprintData.serverName,
  //     content:blueprintData.serverContent
  //   })
  // }
  // OnChange(){
  //  this.serverElements[0].name='changed';
  // }
  numbers = [1, 2, 3, 4, 5];
  oddnumbers=[1,3,5,7]
  evennumbers=[2,4,6,8]
  onlyOdd = false;
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
