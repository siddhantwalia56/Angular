import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,
              private route:ActivatedRoute,
              private authservice:AuthService) { }

  ngOnInit() {
  }
  onclick(id:number){
    // complex computation
    this.router.navigate(['servers',id,'edit'],{queryParams:{allowedit:'1'},fragment:'loading'})
  }
  OnLogin(){
    this.authservice.login();
  }
  OnLogout(){
    this.authservice.logout();
  }
}
