import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:[ReactiveFormsModule],
  exports:[ReactiveFormsModule],
  declarations: [
    HomeComponent
  ]
})
export default class SharedModule { };