import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';

import { ProductsService } from '../service/products.service';
@Component({
  selector: 'app-pro-detail',
  templateUrl: './pro-detail.component.html',
  styleUrls: ['./pro-detail.component.css']
})
export class ProDetailComponent implements OnInit {

  ProductDetail =[];
  errMsg:string;
  productCode:any;
  constructor(private productSV:ProductsService, private activetedRouter:ActivatedRoute)
   {
      this.activetedRouter.params.forEach(
        params=>
        {
          this.productCode == params.id;
          console.log(this.productCode);
        }
      );
    }

  ngOnInit() {
    this.showProductDetail();
  }
  showProductDetail(){
  
    this.productSV.getOneProduct(this.productCode)
    .subscribe(data=> this.ProductDetail = data,
     error => this.errMsg = error);
  }
 
}
