import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-latest-information',
  templateUrl: './latest-information.component.html',
  styleUrls: ['./latest-information.component.scss'],
})

export class LatestInformationComponent implements OnInit {

  constructor(private http: HttpClient) {
    // this.http.get('assets/articles.json')
    //     .pipe(data => data.json())
    //     .subscribe(data => {
    //       console.log(data);
    //     });

  }

  ngOnInit() {}

}
