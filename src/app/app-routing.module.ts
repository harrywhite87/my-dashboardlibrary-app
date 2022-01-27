import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleHorizontallineComponent } from './components/colorItems/title-horizontalline/title-horizontalline.component';
import { ColorboxTextComponent } from './components/colorItems/colorbox-text/colorbox-text.component';
import { PagerndComponent } from './containers/pagernd/pagernd.component'
import { OnePageComponent } from './containers/one-page/one-page.component'
import { ChartsPageComponent } from './containers/charts-page/charts-page.component'

const routes: Routes = [
  {path: '', redirectTo: '/one-page', pathMatch: 'full'},
  {path: 'title-horizontalline', component: TitleHorizontallineComponent},
  // {path: 'pagernd', component: PagerndComponent},
  {path: 'one-page', component: OnePageComponent},
  {path: 'charts-page', component: ChartsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
