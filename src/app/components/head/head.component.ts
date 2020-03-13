import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {

    public dataSet = new DataSet();

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        const api = 'http://www.dzyong.top:3005/yiqing/total';
        this.http.get(api)
            .subscribe((response: any) => {
                const list: any = response.data[0];
                this.dataSet.setProperties(list.diagnosed, list.cured, list.death, list.suspect, list.date);
            });
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
