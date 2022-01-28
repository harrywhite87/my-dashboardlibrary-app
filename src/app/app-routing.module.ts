import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagerndComponent } from './containers/pagernd/pagernd.component'
import { OnePageComponent } from './containers/one-page/one-page.component'
import { ChartsPageComponent } from './containers/charts-page/charts-page.component'

const routes: Routes = [
  {path: '', redirectTo: '/one-page', pathMatch: 'full'},
  {path: 'pagernd', component: PagerndComponent},
  {path: 'one-page', component: OnePageComponent},
  {path: 'charts-page', component: ChartsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
