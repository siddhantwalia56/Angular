import { Component, EventEmitter, Input, Output } from '@angular/core';
import { loggingservice } from '../logging.service';
import { AccountsService } from '../account.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[ ]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

constructor(private service:loggingservice,private accountservice:AccountsService){}

  onSetTo(status: string) {
    this.accountservice.updateaccount(this.id,status)
this.accountservice.statuschanged.emit(status)
  }
}
