import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {
    public store: any;
    public dataSet = new DataSet();
    public data: any;
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        const api1 = 'http://www.dzyong.top:3005/yiqing/total';
        this.http.get(api1)
            .subscribe((response: any) => {
                const list: any = response.data[0];
                this.dataSet.setProperties(list.diagnosed, list.cured, list.death, list.suspect, list.date);
            });
        const api2 = 'http://www.dzyong.top:3005/yiqing/history';
        this.http.get(api2)
            .subscribe((response: any) => {
                console.log(response.data);
                this.data = response.data;
            });
    }
    changeHead() {
      this.dataSet.diagnosed = this.store.confirmedNum;
      this.dataSet.cured = this.store.curesNum;
      this.dataSet.suspect = this.store.suspectedNum;
      this.dataSet.death = this.store.deathsNum;
      this.data.date = this.store.date;
    }
}

class DataSet {

    diagnosed = 0;
    cured = 0;
    death = 0;
    suspect = 0;
    date = null;

    setProperties(diagnosed, cured, death, suspect, date) {
        this.diagnosed = diagnosed;
        this.cured = cured;
        this.suspect = suspect;
        this.death = death;
        this.date = date;
    }

    getCurrentDiagnosed() {
        return this.diagnosed - this.cured;
    }
}
