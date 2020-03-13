import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RumorRefutingComponent } from './rumor-refuting.component';

describe('RumorRefutingComponent', () => {
  let component: RumorRefutingComponent;
  let fixture: ComponentFixture<RumorRefutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RumorRefutingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RumorRefutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
