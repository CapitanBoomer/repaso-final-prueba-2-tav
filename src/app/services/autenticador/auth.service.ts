import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Logindatos,todoslosdatosuser} from '../../interfaces/login/logindatos'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private urlLogin: string ='https://dummyjson.com/auth/login'
public userdatos: todoslosdatosuser | null =null
  constructor(private http:HttpClient, private ruta:Router) { }
public validador({username,password}:Logindatos){
  this.http.post<todoslosdatosuser>(this.urlLogin,{username,password},{headers:{
    'Content-Type': 'application/json'
  }}).subscribe(datos=>{
    if(datos){this.userdatos=datos, this.ruta.navigate(['/catalogo'])}
  })
}
}
