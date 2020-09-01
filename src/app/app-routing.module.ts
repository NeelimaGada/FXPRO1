import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { MainComponent } from './main/main.component';
import { ParticulardataComponent } from './particulardata/particulardata.component';

const routes: Routes = [ {
  path :'',component:DisplaydataComponent
},
{ path:'data/:userId', component:ParticulardataComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
