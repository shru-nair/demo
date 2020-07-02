import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
{path:"register",component:RegisterComponent},
{path:"search",component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
