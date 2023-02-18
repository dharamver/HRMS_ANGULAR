import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { LeaveComponent } from './leave/leave.component'
import { ProjectComponent } from './project/project.component';
import { SalaryComponent } from './salary/salary.component';
import { EmployeeDetailsPageComponent } from './employee-details-page/employee-details-page.component';
const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:'employee',component:EmployeeDetailsComponent},
  {path:'login',component:LoginComponent },
  {path:'leave',component:LeaveComponent},
  {path:'project',component:ProjectComponent},
  {path:'salary', component:SalaryComponent},
  {path:'details/:id',component:EmployeeDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
