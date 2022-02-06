import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagerndComponent } from './RND/pagernd/pagernd.component'
import { OnePageComponent } from './containers/one-page/one-page.component'
import { ChartsPageComponent } from './containers/charts-page/charts-page.component'
import { UiInventoryPageComponent } from './containers/ui-inventory-page/ui-inventory-page.component';
import { PagegridComponent } from './RND/pagegrid/pagegrid.component'
import { UiDesignComponent } from './containers/ui-design/ui-design.component';

const routes: Routes = [
  {path: '', redirectTo: '/charts-page', pathMatch: 'full'},
  {path: 'pagernd', component: PagerndComponent},
  {path: 'pagegrid', component: PagegridComponent},
  {path: 'one-page', component: OnePageComponent},
  {path: 'ui-design', component: UiDesignComponent},
  {path: 'ui-inventory-page', component: UiInventoryPageComponent},
  {path: 'charts-page', component: ChartsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
