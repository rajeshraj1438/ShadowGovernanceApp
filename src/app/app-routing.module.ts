import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './components/components/admin/admin.component';
import { AnalyticalUserComponent } from './components/components/analytical-user/analytical-user.component';

import { EndUserComponent } from './components/components/end-user/end-user.component';
import { ShadowComponent } from './components/components/shadow/shadow.component';

const routes: Routes = [
  {path:'app-shadow', component: ShadowComponent},
  {path:'end-user', component: EndUserComponent},
  {path:'admin', component: AdminComponent},
  {path:'analytical-user', component: AnalyticalUserComponent}
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
