import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/autenticador/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
public name:string=''
public pass:string =''
constructor(private service:AuthService) { }

  ngOnInit() {
  }
  public validardatos(){
    this.service.validador({
      username:this.name,
      password:this.pass,
    })
  }

}
