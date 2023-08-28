import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { NgModule } from "@angular/core";
import { HomepageComponent } from "./homepage/homepage.component";

const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:"full"},
    {path:'home',component:HomepageComponent},
    {path:'login' ,component:LoginComponent },
    {path:'signup',component:SignupComponent},

]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}