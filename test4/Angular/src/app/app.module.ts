import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContentComponent } from './shared/components/content/content.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './shared/components/banner/banner.component';
import { ProDetailComponent } from './pro-detail/pro-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    ProductComponent,
    BannerComponent,
    ProDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
