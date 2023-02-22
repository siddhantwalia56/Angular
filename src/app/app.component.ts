import { Component,OnDestroy,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccountsService } from './account.service';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent  {

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
//   numbers = [1, 2, 3, 4, 5];
//   oddnumbers=[1,3,5,7]
//   evennumbers=[2,4,6,8]
//   onlyOdd = false;

//  accounts:{name:string,status:string}[]=[]
//  constructor(private accountservice:AccountsService){}
// ngOnInit(){
//   this.accounts=this.accountservice.accounts;
// }


// constructor(private userService:UserService) {}
// userActivated = false;
// private userstatus:Subscription
//   ngOnInit() {
// this.userstatus=this.userService.activatedEmitter.subscribe(didActivate=>{
//   this.userActivated=didActivate;
//   })
//   }
//   ngOnDestroy(){
//     this.userstatus.unsubscribe();
//   }

suggestUserName() {
  const suggestedName = 'Superuser';
}@ViewChild('f') signupform:NgForm
defaultQuestion='pet';
answer=''
// onSubmit(form:NgForm){
//   console.log(form);
// }
onSubmit(){
  console.log(this.signupform)
}
}
