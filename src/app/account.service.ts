import {Injectable,EventEmitter} from '@angular/core';
import { loggingservice} from "./logging.service";

@Injectable()
export class AccountsService{
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
   constructor(private loggingser:loggingservice){}
   statuschanged=new EventEmitter<string>();
  addaccount(name:string, status:string){
    this.accounts.push({name:name,status:status});
    this.loggingser.logging(status)
  }

  updateaccount(id:number,status:string){
    this.accounts[id].status=status;
    this.loggingser.logging(status)
  }
}
