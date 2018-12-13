import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import{HomeComponent} from './home/home.component';
import{ProductComponent} from './product/product.component';
import{ProDetailComponent}from './pro-detail/pro-detail.component';



const routes: Routes =[
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'home',component:HomeComponent},
  { path:'product',component:ProductComponent},
  {path:'pro-detail',
  children:[
    {path:'',component:ProDetailComponent},
    {path:':id',component:ProDetailComponent}
  ]
}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
