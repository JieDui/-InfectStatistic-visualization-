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
      const api2 = 'http://www.dzyong.top:3005/yiqing/history';
      this.http.get(api2)
          .subscribe((response: any) => {
              this.data = response.data;
              this.dataSet.setProperties(this.data[this.data.length - 1]);
              const yesterday = new DataSet();
              yesterday.setProperties(this.data[this.data.length - 2]);
              this.dataSet.setAdd(yesterday); }
              );
  }

  changeHead() {
    this.dataSet.setProperties(this.store);
    if (this.store.id !== 1) {
        const yesterday = new DataSet();
        yesterday.setProperties(this.data[this.store.id - 2]);
        this.dataSet.setAdd(yesterday);
    }
  }
}

class DataSet {
    now = 0;
    diagnosed = 0;
    cured = 0;
    death = 0;
    suspect = 0;
    date = null;
    add1 = 0;
    add2 = 0;
    add3 = 0;
    add4 = 0;
    add5 = 0;

    setProperties(store) {
      this.now = store.confirmedNum - store.curesNum - store.deathsNum;
      this.diagnosed = store.confirmedNum;
      this.cured = store.curesNum;
      this.suspect = store.suspectedNum;
      this.death = store.deathsNum;
      this.date = store.date;
    }

    changeAdd(add) {
      return add < 0 ? add : '+' + add;
    }

    setAdd(yesterday) {
        this.add1 = this.changeAdd(this.now - yesterday.now);
        this.add2 = this.changeAdd(this.diagnosed - yesterday.diagnosed);
        this.add3 = this.changeAdd(this.cured - yesterday.cured);
        this.add4 = this.changeAdd(this.death - yesterday.death);
        this.add5 = this.changeAdd(this.suspect - yesterday.suspect);
    }

}
