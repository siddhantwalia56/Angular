import { Component, OnInit } from '@angular/core';
import { TestCompService } from './test-comp.ervice';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css'],
  providers: [TestCompService]
})
export class TestCompComponent implements OnInit{
user:{
  name:string
}

isLoggedIn=false

constructor(private testservice:TestCompService){}

ngOnInit(){
  this.user=this.testservice.user;
}

}
