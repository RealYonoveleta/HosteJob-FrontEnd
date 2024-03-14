import { Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { SignupEmployeeComponent } from './component/signup-employee/signup-employee.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signup-employee', component: SignupEmployeeComponent},
    {path: 'signup', component: SignupComponent},
    {path: '', component: LoginComponent}
];
