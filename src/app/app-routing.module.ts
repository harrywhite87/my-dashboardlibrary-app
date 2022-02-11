import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagerndComponent } from './RND/pagernd/pagernd.component'
import { ChartsPageComponent } from './containers/charts-page/charts-page.component'
import { UiInventoryPageComponent } from './containers/ui-inventory-page/ui-inventory-page.component';
import { PagegridComponent } from './RND/pagegrid/pagegrid.component'
import { UiDesignComponent } from './RND/ui-design/ui-design.component';
import { HomeComponent } from './containers/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/ui-inventory-page', pathMatch: 'full'},
  {path: 'page-flex', component: PagerndComponent},
  {path: 'page-grid', component: PagegridComponent},
  {path: 'ui-design', component: UiDesignComponent},
  {path: 'home-page', component: HomeComponent},
  {path: 'ui-inventory-page', component: UiInventoryPageComponent},
  {path: 'charts-page', component: ChartsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
