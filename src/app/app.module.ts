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
import { PagerndComponent } from './RND/pagernd/pagernd.component';
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
import { UiInventoryPageComponent } from './containers/ui-inventory-page/ui-inventory-page.component';
import { PagegridComponent } from './RND/pagegrid/pagegrid.component';
import { ItemPiechartComponent } from './components/item-piechart/item-piechart.component';
import { ItemDonutchartComponent } from './components/item-donutchart/item-donutchart.component';
import { ItemGroupedbarchartComponent } from './components/item-groupedbarchart/item-groupedbarchart.component';
import { RndCharttooltipComponent } from './RND/rnd-charttooltip/rnd-charttooltip.component';
import { ItemYearvisitorschartComponent } from './components/item-yearvisitorschart/item-yearvisitorschart.component';
import { ItemSalesbycountrychartComponent } from './components/item-salesbycountrychart/item-salesbycountrychart.component';
import { ItemTotalsaleschartComponent } from './components/item-totalsaleschart/item-totalsaleschart.component';
import { ItemUniquepurchaseschartComponent } from './components/item-uniquepurchaseschart/item-uniquepurchaseschart.component';
import { ItemOrderquantitychartComponent } from './components/item-orderquantitychart/item-orderquantitychart.component';
import { ItemAvgordervaluechartComponent } from './components/item-avgordervaluechart/item-avgordervaluechart.component';
import { ItemResponsivepiechartComponent } from './RND/item-responsivepiechart/item-responsivepiechart.component';
import { UiDesignComponent } from './RND/ui-design/ui-design.component';
import { UiInElTitleComponent } from './components/ui-in-el-title/ui-in-el-title.component';
import { UiInElTextdivComponent } from './components/ui-in-el-textdiv/ui-in-el-textdiv.component';
import { UiInElColorboxhashrgbComponent } from './components/ui-in-el-colorboxhashrgb/ui-in-el-colorboxhashrgb.component';
import { UiInElFontweighttextComponent } from './components/ui-in-el-fontweighttext/ui-in-el-fontweighttext.component';
import { UiInElCardsComponent } from './components/ui-in-el-cards/ui-in-el-cards.component';
import { UiInElGraphbarsComponent } from './components/ui-in-el-graphbars/ui-in-el-graphbars.component';
import { UiInElLegendComponent } from './components/ui-in-el-legend/ui-in-el-legend.component';
import { UiInElCustomersComponent } from './components/ui-in-el-customers/ui-in-el-customers.component';
import { RndElGridnavComponent } from './RND/rnd-el-gridnav/rnd-el-gridnav.component';
import { UiInElTooltipdonutchartComponent } from './components/ui-in-el-tooltipdonutchart/ui-in-el-tooltipdonutchart.component';
import { UiInElTooltipbarchartComponent } from './components/ui-in-el-tooltipbarchart/ui-in-el-tooltipbarchart.component';
import { ChElBarchartComponent } from './components/ch-el-barchart/ch-el-barchart.component';
import { ChElDonutchartComponent } from './components/ch-el-donutchart/ch-el-donutchart.component';

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
    UiInventoryPageComponent,
    PagegridComponent,
    ItemPiechartComponent,
    ItemDonutchartComponent,
    ItemGroupedbarchartComponent,
    RndCharttooltipComponent,
    ItemYearvisitorschartComponent,
    ItemSalesbycountrychartComponent,
    ItemTotalsaleschartComponent,
    ItemUniquepurchaseschartComponent,
    ItemOrderquantitychartComponent,
    ItemAvgordervaluechartComponent,
    ItemResponsivepiechartComponent,
    UiDesignComponent,
    UiInElTitleComponent,
    UiInElTextdivComponent,
    UiInElColorboxhashrgbComponent,
    UiInElFontweighttextComponent,
    UiInElCardsComponent,
    UiInElGraphbarsComponent,
    UiInElLegendComponent,
    UiInElCustomersComponent,
    RndElGridnavComponent,
    UiInElTooltipdonutchartComponent,
    UiInElTooltipbarchartComponent,
    ChElBarchartComponent,
    ChElDonutchartComponent,
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
