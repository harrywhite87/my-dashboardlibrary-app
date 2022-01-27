import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageoneComponent } from './containers/pageone/pageone.component';
import { PagetwoComponent } from './containers/pagetwo/pagetwo.component';
import { TitleHorizontallineComponent } from './components/colorItems/title-horizontalline/title-horizontalline.component';
import { ColorboxTextComponent } from './components/colorItems/colorbox-text/colorbox-text.component';
import { PagethreeComponent } from './containers/pagethree/pagethree.component'
import { PagerndComponent } from './containers/pagernd/pagernd.component'
import { PagefullComponent } from './containers/pagefull/pagefull.component'

const routes: Routes = [
  {path: '', redirectTo: '/pagefull', pathMatch: 'full'},
  {path: 'pageone', component: PageoneComponent},
  {path: 'pagetwo', component: PagetwoComponent},
  {path: 'pagethree', component: PagethreeComponent},
  {path: 'title-horizontalline', component: TitleHorizontallineComponent},
  {path: 'colorbox-text', component: ColorboxTextComponent},
  {path: 'pagernd', component: PagerndComponent},
  {path: 'pagefull', component: PagefullComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
