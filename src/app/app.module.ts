import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { PagerndComponent } from './containers/pagernd/pagernd.component';
import { ItemColorsComponent } from './components/item-colors/item-colors.component';
import { ItemTypographyComponent } from './components/item-typography/item-typography.component';
import { ItemIconsComponent } from './components/item-icons/item-icons.component';
import { ItemCardsComponent } from './components/item-cards/item-cards.component';
import { ItemGraphbarsComponent } from './components/item-graphbars/item-graphbars.component';
import { ItemLegendComponent } from './components/item-legend/item-legend.component';
import { ItemTablesComponent } from './components/item-tables/item-tables.component';
import { ChartsPageComponent } from './containers/charts-page/charts-page.component';
import { OnePageComponent } from './containers/one-page/one-page.component';
import { ItemBarchartComponent } from './components/item-barchart/item-barchart.component';

@NgModule({
  declarations: [
    AppComponent,
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
    PagerndComponent,
    ItemColorsComponent,
    ItemTypographyComponent,
    ItemIconsComponent,
    ItemCardsComponent,
    ItemGraphbarsComponent,
    ItemLegendComponent,
    ItemTablesComponent,
    ChartsPageComponent,
    OnePageComponent,
    ItemBarchartComponent,
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
