import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import SharedModule from "../shared.module";
// import { LoginComponent } from "./login/login.component";
// import { SignUpComponent } from "./sign-up/sign-up.component";
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from "./footer/footer.component";

const routes: Routes = [
    {
        path: 'body',
        component: BodyComponent
    },
    {
        path: 'footer',
        component: FooterComponent
    },

    {
        path: 'header',
        component: HeaderComponent
    }


]

@NgModule({
    imports: [SharedModule, RouterModule.forChild(routes)],
    declarations: [BodyComponent, FooterComponent, HeaderComponent],
    exports: [RouterModule]
})
export default class CommonModule { }