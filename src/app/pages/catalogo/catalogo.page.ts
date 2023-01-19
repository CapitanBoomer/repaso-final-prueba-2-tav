import { Component, OnInit } from '@angular/core';
import {CatalogoService} from '../../services/catalogo/catalogo.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  constructor(public servcat:CatalogoService , private ruta:Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.servcat.traerdatos()
  }

}
