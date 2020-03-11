import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {HeadComponent} from '../components/head/head.component';
import {ChinaChartComponent} from '../components/china-chart/china-chart.component';
import {LatestInformationComponent} from '../components/latest-information/latest-information.component';

@NgModule({
  imports: [
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
    declarations: [HomePage, HeadComponent, ChinaChartComponent, LatestInformationComponent]
})
export class HomePageModule {}
