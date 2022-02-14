import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagerndComponent } from './RND/pagernd/pagernd.component';
import { ChartsPageComponent } from './containers/charts-page/charts-page.component';
import { UiInventoryPageComponent } from './containers/ui-inventory-page/ui-inventory-page.component';
import { PagegridComponent } from './RND/pagegrid/pagegrid.component';
import { ItemGroupedbarchartComponent } from './RND/item-groupedbarchart/item-groupedbarchart.component';
import { RndCharttooltipComponent } from './RND/rnd-charttooltip/rnd-charttooltip.component';
import { ItemResponsivepiechartComponent } from './RND/item-responsivepiechart/item-responsivepiechart.component';
import { UiDesignComponent } from './RND/ui-design/ui-design.component';
import { UiElTitleComponent } from './components/ui-el-title/ui-el-title.component';
import { UiElTextdivComponent } from './components/ui-el-textdiv/ui-el-textdiv.component';
import { UiElColorboxhashrgbComponent } from './components/ui-el-colorboxhashrgb/ui-el-colorboxhashrgb.component';
import { UiElFontweighttextComponent } from './components/ui-el-fontweighttext/ui-el-fontweighttext.component';
import { UiElCardsComponent } from './components/ui-el-cards/ui-el-cards.component';
import { UiElGraphbarsComponent } from './components/ui-el-graphbars/ui-el-graphbars.component';
import { UiElLegendComponent } from './components/ui-el-legend/ui-el-legend.component';
import { UiElCustomersComponent } from './components/ui-el-customers/ui-el-customers.component';
import { RndElGridnavComponent } from './RND/rnd-el-gridnav/rnd-el-gridnav.component';
import { UiElTooltipdonutchartComponent } from './components/ui-el-tooltipdonutchart/ui-el-tooltipdonutchart.component';
import { UiElTooltipbarchartComponent } from './components/ui-el-tooltipbarchart/ui-el-tooltipbarchart.component';
import { ChElBarchartComponent } from './components/ch-el-barchart/ch-el-barchart.component';
import { ChElDonutchartComponent } from './components/ch-el-donutchart/ch-el-donutchart.component';
import { ChElLinegraphComponent } from './components/ch-el-linegraph/ch-el-linegraph.component';
import { ChElWorldmapComponent } from './components/ch-el-worldmap/ch-el-worldmap.component';
import { ChElSalesbycountrychartComponent } from './components/ch-el-salesbycountrychart/ch-el-salesbycountrychart.component';
import { ChElYearvisitorschartComponent } from './components/ch-el-yearvisitorschart/ch-el-yearvisitorschart.component';
import { UiElButtonWithIconComponent } from './components/ui-el-button-with-icon/ui-el-button-with-icon.component';
import { UiElLinkWithIconComponent } from './components/ui-el-link-with-icon/ui-el-link-with-icon.component';
import { ChElAvgordervaluechartComponent } from './components/ch-el-avgordervaluechart/ch-el-avgordervaluechart.component';
import { ChElOrderquantitychartComponent } from './components/ch-el-orderquantitychart/ch-el-orderquantitychart.component';
import { UiElTableComponent } from './components/ui-el-table/ui-el-table.component';
import { ChElTotalsaleschartComponent } from './components/ch-el-totalsaleschart/ch-el-totalsaleschart.component';
import { ChElUniquepurchaseschartComponent } from './components/ch-el-uniquepurchaseschart/ch-el-uniquepurchaseschart.component';
import { UiElSidebaractiveComponent } from './components/ui-el-sidebaractive/ui-el-sidebaractive.component';
import { UiElSidebarfocusedComponent } from './components/ui-el-sidebarfocused/ui-el-sidebarfocused.component';
import { UiElSidebarplainComponent } from './components/ui-el-sidebarplain/ui-el-sidebarplain.component';
import { UiElTabactiveComponent } from './components/ui-el-tabactive/ui-el-tabactive.component';
import { UiElTabplainComponent } from './components/ui-el-tabplain/ui-el-tabplain.component';
import { ChElGraphkeysComponent } from './components/ch-el-graphkeys/ch-el-graphkeys.component';
import { UiInElTooltiplinechartComponent } from './components/ui-in-el-tooltiplinechart/ui-in-el-tooltiplinechart.component';
import { HomeComponent } from './containers/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PagerndComponent,
    ChartsPageComponent,
    UiInventoryPageComponent,
    PagegridComponent,
    ItemGroupedbarchartComponent,
    RndCharttooltipComponent,
    ItemResponsivepiechartComponent,
    UiDesignComponent,
    UiElTitleComponent,
    UiElTextdivComponent,
    UiElColorboxhashrgbComponent,
    UiElFontweighttextComponent,
    UiElCardsComponent,
    UiElGraphbarsComponent,
    UiElLegendComponent,
    UiElCustomersComponent,
    RndElGridnavComponent,
    UiElTooltipdonutchartComponent,
    UiElTooltipbarchartComponent,
    ChElBarchartComponent,
    ChElDonutchartComponent,
    ChElLinegraphComponent,
    ChElWorldmapComponent,
    ChElSalesbycountrychartComponent,
    ChElYearvisitorschartComponent,
    UiElButtonWithIconComponent,
    UiElLinkWithIconComponent,
    ChElAvgordervaluechartComponent,
    ChElOrderquantitychartComponent,
    UiElTableComponent,
    ChElTotalsaleschartComponent,
    ChElUniquepurchaseschartComponent,
    UiElSidebaractiveComponent,
    UiElSidebarfocusedComponent,
    UiElSidebarplainComponent,
    UiElTabactiveComponent,
    UiElTabplainComponent,
    ChElGraphkeysComponent,
    UiInElTooltiplinechartComponent,
    HomeComponent,
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
