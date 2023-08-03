import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos:any=[]
  constructor( private productosService:ProductosService
    ) {   this.productosService.getAll()
      .subscribe(
        (data:any)=>{
          console.log(data)
          this.productos = data
        })
      
      }

  ngOnInit(): void {
  }

}
