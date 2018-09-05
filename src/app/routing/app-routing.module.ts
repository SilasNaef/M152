import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NghomeComponent } from '../nghome/nghome.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HelloworldComponent } from '../helloworld/helloworld.component';


const routes: Routes = [
  { path: 'ng', component: NghomeComponent },
  { path: '', component: DashboardComponent },
  { path: 'hw', component: HelloworldComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
