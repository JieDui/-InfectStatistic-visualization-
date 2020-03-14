import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {

    today = new DataSet();
    yesterday = new DataSet();

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        const api = 'http://www.dzyong.top:3005/yiqing/history';
        this.http.get(api)
            .subscribe((response: any) => {
                const index = response.data.length;
                this.today.setProperties(response.data[index - 1]);
                this.yesterday.setProperties(response.data[index - 2]);
            });
    }

    getIncreases(today, yesterday) {
        const increases = today - yesterday;
        return increases < 0 ? increases : '+' + increases;
    }
}

class DataSet {

    confirmed = 0;
    cured = 0;
    death = 0;
    suspect = 0;
    date = null;

    setProperties(day) {
        this.confirmed = day.confirmedNum;
        this.cured = day.curesNum;
        this.suspect = day.suspectedNum;
        this.death = day.deathsNum;
        this.date = day.date;
    }

    getCurrentConfirmed() {
        return this.confirmed - this.cured - this.death - this.suspect;
    }
}
