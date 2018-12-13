import { Component, OnInit } from '@angular/core';
import{ ProductsService }from'../service/products.service';
import{ Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemProduct =[];
  errMsg:string;


  constructor(private privateSV:ProductsService,private route:Router) { }

  ngOnInit() {
    this.fetchProduct();
  }

  fetchProduct(){
    this.privateSV.GetProduct()
    .subscribe(data=> this.itemProduct = data,
     error => this.errMsg = error);
  
  }
  gotoShowProduct(productscode)
  {
    this.route.navigate(['/', 'pro-detail'], productscode);
    console.log(productscode);
  }
  
}
