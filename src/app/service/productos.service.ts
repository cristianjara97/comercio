import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* import {lastValueFrom, Observable} from "rxjs" */


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get("https://fakestoreapi.com/products")
  }
  getById(id:any){
    return this.http.get("https://fakestoreapi.com/products/"+id)
  }
}
