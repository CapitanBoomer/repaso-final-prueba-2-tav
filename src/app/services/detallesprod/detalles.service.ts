import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CatalogoService} from '../../services/catalogo/catalogo.service'
import {AuthService} from '../../services/autenticador/auth.service'
import {Detallesprod,Productos} from '../../interfaces/catalogo/productos'
@Injectable({
  providedIn: 'root'
})
export class DetallesService {
  private urldet: string ='https://dummyjson.com/auth/products/:ID'
  public detalleinfo: Detallesprod |null =null
  public id:number =0
    constructor(private httpdet:HttpClient,public servprodt:CatalogoService ,private servauth:AuthService) { }

    public detallesprodtraer(id:number){
      this.httpdet.get<Detallesprod>(this.urldet,{headers:{
        'Authorization': 'Bearer '+ this.servauth.userdatos?.token,
        'Content-Type': 'application/json'
      }}).subscribe(datos =>{
        if(datos){this.detalleinfo=datos,console.log(datos)}
      })
    }
}
