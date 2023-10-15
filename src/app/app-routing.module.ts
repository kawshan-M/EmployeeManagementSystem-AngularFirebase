import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './features/employee/employee.component';
import { SigninComponent } from './features/signin/signin.component';
import { SidebarComponent } from './features/sidebar/sidebar.component';


const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {path: "home", component: EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
