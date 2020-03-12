import { Component, OnInit } from '@angular/core';
import 'echarts/map/js/china.js';

@Component({
  selector: 'app-china-map',
  templateUrl: './china-map.component.html',
  styleUrls: ['./china-map.component.scss'],
})

export class ChinaMapComponent implements OnInit {
  days: any = ['01-20', '01-21', '01-22', '01-23', '01-24', '01-25', '01-26', '01-27', '01-28', '01-29', '01-30'];
  province: any = ['湖北', '广东', '浙江', '湖南', '河南', '安徽', '重庆', '山东', '江西',
                   '四川', '江苏', '北京', '福建', '上海', '广西', '河北', '陕西', '云南',
                   '海南', '黑龙江', '辽宁', '山西', '天津', '甘肃', '内蒙古', '新疆', '宁夏',
                   '吉林', '贵州', '青海', '西藏', '澳门', '香港', '台湾'];
  data: any = [
     [270, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [375, 26, 5, 1, 1, 0, 5, 1, 2, 2, 0, 10, 0, 9, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [444, 32, 10, 9, 5, 4, 9, 6, 3, 8, 1, 14, 1, 16, 2, 1, 0, 1, 4, 2, 2, 1, 3, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0],
     [549, 53, 43, 24, 9, 15, 27, 9, 7, 15, 9, 26, 5, 20, 13, 2, 3, 2, 8, 4, 4, 1, 5, 2, 1, 2, 2, 3, 3, 0, 0, 1, 2, 0],
     [729, 78, 62, 43, 32, 39, 57, 21, 18, 28, 18, 36, 10, 33, 23, 8, 5, 5, 8, 9, 12, 6, 8, 4, 2, 3, 3, 4, 4, 0, 0, 2, 4, 2],
     [1052, 98, 104, 69, 83, 60, 75, 39, 36, 44, 31, 51, 18, 40, 33, 13, 15, 11, 19, 15, 17, 9, 10, 7, 7, 4, 4, 4, 5, 1, 0, 3, 5, 4],
     [1423, 146, 128, 100, 128, 70, 110, 63, 48, 69, 47, 68, 29, 53, 46, 18, 22, 16, 22, 21, 22, 13, 14, 14, 11, 5, 7, 6, 7, 4, 0, 4, 6, 6],
     [2714, 188, 173, 143, 168, 106, 132, 87, 72, 90, 70, 80, 59, 66, 51, 33, 35, 26, 33,
      30, 27, 20, 23, 19, 13, 10, 10, 8, 9, 6, 0, 6, 8, 7],
     [3354, 241, 296, 221, 206, 152, 147, 121, 109, 108, 99, 91, 82, 80, 58, 48, 46, 51,
         43, 37, 36, 27, 24, 24, 16, 13, 12, 9, 9, 6, 0, 6, 10, 8],
     [4586, 272, 296, 221, 206, 152, 165, 130, 162, 108, 99, 111, 84, 96, 58, 48, 56, 55,
         43, 38, 39, 35, 27, 24, 16, 13, 12, 9, 9, 6, 1, 7, 10, 8],
     [5806, 354, 428, 277, 278, 200, 206, 158, 162, 142, 129, 121, 101, 128, 87, 65, 66,
         76, 46, 44, 45, 39, 31, 29, 18, 14, 17, 14, 12, 8, 1, 7, 12, 9]
    ];
  regionOptions: any;
  constructor() { }

  ngOnInit() {
    let sum = []
    for (let i = 0; i < this.data.length; ++i) {
        sum[i] = 0;
        for (let j = 0; j < this.data[i].length; ++j) {
            sum[i] = sum[i] + this.data[i][j]
        }
    }
    this.regionOptions = {
      baseOption: {
        timeline: {
          axisType: 'category',
          autoPlay: true,
          playInterval: 2000,
          symbolSize: 12,
          left: '5%',
          right: '5%',
          width: '90%',
          data: this.days,
          tooltip: {
            formatter: this.days
          },
        },
        tooltip: {
          show: true,
          formatter(params) {
            return params.name + '：' + params.data.value;
          },
          triggerOn: 'click'
        },
        visualMap: {
          type: 'piecewise',
          pieces: [{
            min: 1001,
            color: '#73240D'
          },
            {
              min: 501,
              max: 1000,
              color: '#BB0000'
            },
            {
              min: 251,
              max: 500,
              color: '#BD430A'
            },
            {
              min: 101,
              max: 250,
              color: '#E08150'
            },
            {
              min: 11,
              max: 100,
              color: '#E9B090'
            },
            {
              min: 1,
              max: 10,
              color: '#F2DDD2'
            },
            {
              value: 0,
              color: 'white'
            }
          ],
          orient: 'vertical',
          itemWidth: 6,
          itemHeight: 8,
          showLabel: true,
          seriesIndex: [0],
          textStyle: {
            color: '#7B93A7'
          },
          bottom: '10%',
          left: '0%',
        },
        xAxis: {
          show: false
        },
        yAxis: [{
          inverse: true,
          offset: '2',
          type: 'category',
          data: '',
          nameTextStyle: {
            color: '#fff'
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              fontSize: 14,
              color: '#000000',
            },
            interval: 0
          },
          axisLine: {
            show: false,
            lineStyle: {
                color: '#333'
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
                color: '#333'
            }
          },
        }],
        geo: {
          map: 'china',
          layoutCenter: ['%10, %10'],
          layoutSize: 320,
          label: {
            emphasis: {
              show: false,
            }
          },
          itemStyle: {
            emphasis: {
              areaColor: '#00FF00'
            }
          }
        },
        series: [{
          name: 'mapSer',
          type: 'map',
          map: 'china',
          roam: false,
          geoIndex: 0,
          label: {
            show: false,
          },
        },
          {
            name: '',
            type: 'bar',
            zlevel: 2,
            barWidth: '40%',
            label: {
              normal: {
                show: true,
                fontSize: 14,
                position: 'right',
                formatter: '{c}'
              }
            },
          }
        ],
      },
      animationDurationUpdate: 2000,
      animationEasingUpdate: 'quinticInOut',
      options: []
    };
    for (let n = 0; n < this.days.length; n++) {
      let res: any = [];
      for (let j = 0; j < this.data[n].length; j++) {
        res.push({
          name: this.province[j],
          value: this.data[n][j]
        });
      }
      this.regionOptions.options.push({
        title: [
          {
            text: this.days[n] + '新型冠状病毒全国感染人数' + sum[n],
            textStyle: {
              color: '#2D3E53',
              fontSize: 28
            },
            left: 20,
            top: 20,
          },
        ],
        series: [{
          type: 'map',
          data: res
        }]
      });
    }
  }

}
