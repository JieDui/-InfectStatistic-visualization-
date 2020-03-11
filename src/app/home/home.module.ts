import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {NgxEchartsModule} from 'ngx-echarts';
import {HeadComponent} from '../components/head/head.component';
import {ChinaChartComponent} from '../components/china-chart/china-chart.component';
import {LatestInformationComponent} from '../components/latest-information/latest-information.component';
import {RumorRefutingComponent} from '../components/rumor-refuting/rumor-refuting.component';
import {SciencePopularComponent} from '../components/science-popular/science-popular.component';
import {ChinaMapComponent} from '../charts/china-map/china-map.component';
import {HttpClient} from '@angular/common/http';

@NgModule({
  imports: [
    NgxEchartsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  providers: [ HttpClient ],
  declarations: [HomePage, HeadComponent, ChinaChartComponent,
                 LatestInformationComponent, RumorRefutingComponent,
                 SciencePopularComponent, ChinaMapComponent]
})
export class HomePageModule {}
