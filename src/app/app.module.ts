import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { ProductsComponent } from './products/products.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'jewellery', component: JewelleryComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'detail', component: DetailComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    FooterComponent,
    JewelleryComponent,
    ProductsComponent,
    DetailComponent,
    AboutComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }