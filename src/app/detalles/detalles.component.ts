import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  productos:any=[]

  constructor(
    private activatedRoute:ActivatedRoute,
    private productosService:ProductosService
    ) { 
      const id = this.activatedRoute.snapshot.paramMap.get("id")

     console.log("id", id)

     this.productosService.getById(id)
     .subscribe(
       (data:any)=>{
         console.log(data)
         this.productos = data
       })
    } 


  ngOnInit(): void {
  }

}
