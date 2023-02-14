import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../account.service';
import { loggingservice } from '../logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[loggingservice,AccountsService]
})
export class NewAccountComponent {


  constructor(private service:loggingservice, private accountservice:AccountsService){}
  onCreateAccount(accountName: string, accountStatus: string) {
     this.accountservice.addaccount(accountName,accountStatus)
     this.service.logging(accountStatus)
  }
}
