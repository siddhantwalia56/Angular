import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { TestCompService } from './test-comp.service';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css'],
  providers: [TestCompService,DataService]
})
export class TestCompComponent implements OnInit{
user:{
  name:string
}
isLoggedIn=false
data:string

constructor(private testservice:TestCompService,
            private dataservice:DataService){}

ngOnInit(){
  this.user=this.testservice.user;
  this.dataservice.getDetails().then((data:string) => this.data = data)
}
}
