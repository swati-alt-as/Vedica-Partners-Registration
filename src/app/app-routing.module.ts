import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisitorsListComponent } from './visitors-list/visitors-list.component';
import { InvestersListComponent } from './investers-list/investers-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{
  path: 'VisitorsList',
  component: VisitorsListComponent
},
{
  path: 'InvestersList',
  component: InvestersListComponent
},
{
  path: '**',
  component:PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
