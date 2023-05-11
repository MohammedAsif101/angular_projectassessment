import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './common/header/header.component';
// import { BodyComponent } from './common/body/body.component';
// import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
