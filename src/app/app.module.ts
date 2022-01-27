import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { PageoneComponent } from './containers/pageone/pageone.component';
import { PagetwoComponent } from './containers/pagetwo/pagetwo.component';
import { ColorboxTextComponent } from './components/colorItems/colorbox-text/colorbox-text.component';
import { TitleHorizontallineComponent } from './components/colorItems/title-horizontalline/title-horizontalline.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlainBarComponent } from './components/sidebarItems/plain-bar/plain-bar.component';
import { ActiveBarComponent } from './components/sidebarItems/active-bar/active-bar.component';
import { FocusedBarComponent } from './components/sidebarItems/focused-bar/focused-bar.component';
import { PlainTabComponent } from './components/tabItems/plain-tab/plain-tab.component';
import { ActiveTabComponent } from './components/tabItems/active-tab/active-tab.component';
import { DownloadButtonComponent } from './components/buttonItems/download-button/download-button.component';
import { TexticonLinkComponent } from './components/buttonItems/texticon-link/texticon-link.component';
import { CardTooltipComponent } from './components/tooltipItems/card-tooltip/card-tooltip.component';
import { TitleTooltipComponent } from './components/tooltipItems/title-tooltip/title-tooltip.component';
import { CarditemTooltipComponent } from './components/tooltipItems/carditem-tooltip/carditem-tooltip.component';
import { PagethreeComponent } from './containers/pagethree/pagethree.component';
import { PagerndComponent } from './containers/pagernd/pagernd.component';
import { PagefullComponent } from './containers/pagefull/pagefull.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestDetailsComponent,
    PageoneComponent,
    PagetwoComponent,
    ColorboxTextComponent,
    TitleHorizontallineComponent,
    NavComponent,
    PlainBarComponent,
    ActiveBarComponent,
    FocusedBarComponent,
    PlainTabComponent,
    ActiveTabComponent,
    DownloadButtonComponent,
    TexticonLinkComponent,
    CardTooltipComponent,
    TitleTooltipComponent,
    CarditemTooltipComponent,
    PagethreeComponent,
    PagerndComponent,
    PagefullComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
