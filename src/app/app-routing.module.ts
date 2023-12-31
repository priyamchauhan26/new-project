import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { NgModule } from "@angular/core";
import { HomepageComponent } from "./homepage/homepage.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { AddsubcategoryComponent } from "./addsubcategory/addsubcategory.component";
import { AddcategoryComponent } from "./addcategory/addcategory.component";

const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:"full"},
    {path:'home',component:HomepageComponent},
    {path:'login' ,component:LoginComponent },
    {path:'signup',component:SignupComponent},
    {path:'addproduct',component:AddProductComponent},
    {path:'addcategory',component:AddcategoryComponent},
    {path:'addsubcategory',component:AddsubcategoryComponent},


]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}