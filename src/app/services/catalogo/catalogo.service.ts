import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Productos,respuestalista} from '../../interfaces/catalogo/productos'
import {AuthService} from '../../services/autenticador/auth.service'
@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
private urlCatalogo: string = 'https://dummyjson.com/auth/products'
public catalogodatos: respuestalista | null =null
  constructor(private http:HttpClient,public servauth:AuthService ) { }

public traerdatos(){
  this.http.get<respuestalista>(this.urlCatalogo,{headers:{
    'Authorization': 'Bearer '+ this.servauth.userdatos?.token,
    'Content-Type': 'application/json'
  }}).subscribe(datos=>{
    if(datos){this.catalogodatos = datos}
  })
}
}
