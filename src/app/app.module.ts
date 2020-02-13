import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { StoreComponent } from "./store/store.component";
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, StoreComponent, CartComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
