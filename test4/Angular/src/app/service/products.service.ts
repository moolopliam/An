import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import{Products} from'../Models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl:string="http://chapayom.codehansa.com/crud_product.php";

  constructor(private htttp:HttpClient) { }

  GetProduct()
  {
    return this.htttp.get<Products[]>(this.baseUrl+"?cmd=select");
  }
  getOneProduct(productCode){
    return this.htttp.get<Products[]>(this.baseUrl+"cmd=select&product_code="+productCode);
  }
}
