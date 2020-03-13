import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-latest-information',
    templateUrl: './latest-information.component.html',
    styleUrls: ['./latest-information.component.scss'],
})

// @Injectable()
export class LatestInformationComponent implements OnInit {

    public newsList: any;

    constructor(public http: HttpClient) {
    }

    // private article: Article;
    //
    // jsonURL = 'assets/articles.json';
    //
    // getArticle() {
    //     return this.http.get(this.jsonURL);
    // }
    //
    // showArticle() {
    //     this.getArticle()
    //         .subscribe((data: Article) => this.article = {
    //             id: data.id,
    //             title: data.title,
    //             content: data.content
    //         });
    // }

    ngOnInit() {
        const newsApi = 'http://www.dzyong.top:3005/yiqing/news?pageNum=1';
        this.http.get(newsApi)
            .subscribe((response: any) => {
                this.newsList = response.data;
                console.log(response);
            });
    }

    getData() {

    }
}
