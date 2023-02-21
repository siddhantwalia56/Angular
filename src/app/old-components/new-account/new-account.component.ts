import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../../account.service';
import { loggingservice } from '../../logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[]
})
export class NewAccountComponent {

sta=''
  constructor(private service:loggingservice, private accountservice:AccountsService
    ){this.accountservice.statuschanged.subscribe(
      (status:string)=> this.sta=status
    );}
  onCreateAccount(accountName: string, accountStatus: string) {
     this.accountservice.addaccount(accountName,accountStatus)
  }
}
