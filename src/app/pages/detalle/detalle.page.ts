import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DetallesService} from '../../services/detallesprod/detalles.service'
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
public id : number = 0;
  constructor(public servdet:DetallesService, private rutaactiva:ActivatedRoute) { }

  ngOnInit() {
  }
ionViewWillEnter(){
this.rutaactiva.queryParams.subscribe(res =>{this.id = res['id'] as number
 this.servdet.detallesprodtraer(this.id)
})

}

}
