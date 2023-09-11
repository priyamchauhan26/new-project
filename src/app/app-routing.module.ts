import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { NgModule } from "@angular/core";
import { HomepageComponent } from "./homepage/homepage.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { AddsubcategoryComponent } from "./addsubcategory/addsubcategory.component";
import { AddcategoryComponent } from "./addcategory/addcategory.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileInfoComponent } from "./profile-info/profile-info.component";
import { BussinessInfoComponent } from "./bussiness-info/bussiness-info.component";
import { ChangepasswordComponent } from "./changepassword/changepassword.component";

const routes: Routes = [
    {path:'', redirectTo:'home',pathMatch:"full"},
    {path:'home',component:HomepageComponent},
    {path:'login' ,component:LoginComponent },
    {path:'signup',component:SignupComponent},
    {path:'addproduct',component:AddProductComponent,children:[
        {path:'new',component:AddProductComponent},
        {path:':id',component:AddProductComponent},
        {path:':id/edit',component:AddProductComponent}
    ] },
    {path:'addcategory',component:AddcategoryComponent},
    {path:'addsubcategory',component:AddsubcategoryComponent},
    {path:'productlist',component:ProductListComponent},
    {path:'dashboard',component:DashboardComponent,children:[
        {path:'profile',component:ProfileInfoComponent},
        {path:'business',component:BussinessInfoComponent},
        {path:'', redirectTo:'profile',pathMatch:'full'}
    ]},
    {path:"changepassword",component:ChangepasswordComponent}


]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}