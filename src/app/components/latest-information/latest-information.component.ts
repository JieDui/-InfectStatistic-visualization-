import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-latest-information',
    templateUrl: './latest-information.component.html',
    styleUrls: ['./latest-information.component.scss'],
})

export class LatestInformationComponent implements OnInit {

    public newsList: any;

    constructor(public http: HttpClient) {
    }

    ngOnInit() {
        const newsApi = 'http://www.dzyong.top:3005/yiqing/news?pageNum=1';
        this.http.get(newsApi)
            .subscribe((response: any) => {
                console.log(response.data);
                this.newsList = response.data;
            });
    }
}
