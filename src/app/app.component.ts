import { Component,OnDestroy,OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AccountsService } from './account.service';
import { CustomValidators } from './custom-validators';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
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

// suggestUserName() {
//   const suggestedName = 'Superuser';
//   this.signupform.setValue({
//     userdata:{
//       username:suggestedName,
//       email:''
//     },
//     secret: 'pet',
//     QuestionAnswer:'',
//     gender: 'Male'
//   })
// }
// @ViewChild('f') signupform:NgForm
// defaultQuestion='';
// answer=''
// genders=['Male','Female']
// // onSubmit(form:NgForm){
// //   console.log(form);
// // }
// onSubmit(){
//   console.log(this.signupform)
// }
// projectForm:FormGroup

// ngOnInit(){
//   this.projectForm=new FormGroup({
//     'projectName': new FormControl(null,[ Validators.required,CustomValidators.invalidProjectname],
//       CustomValidators.asyncInvalidProjectName),
//     'email': new FormControl( null,[Validators.required, Validators.email]),
//     'Status': new FormControl('critical')
//   });
// }
// onsaveProject(){
//   console.log(this.projectForm.value)
// }

servers = [
  {
    instanceType: 'medium',
    name: 'Production Server',
    status: 'stable',
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'large',
    name: 'User Database',
    status: 'stable',
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'small',
    name: 'Development Server',
    status: 'offline',
    started: new Date(15, 1, 2017)
  },
  {
    instanceType: 'small',
    name: 'Testing Environment Server',
    status: 'stable',
    started: new Date(15, 1, 2017)
  }
];
getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
  return {
    'list-group-item-success': server.status === 'stable',
    'list-group-item-warning': server.status === 'offline',
    'list-group-item-danger': server.status === 'critical'
  };
}
}
