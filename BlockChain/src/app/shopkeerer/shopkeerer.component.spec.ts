import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopkeererComponent } from './shopkeerer.component';

describe('ShopkeererComponent', () => {
  let component: ShopkeererComponent;
  let fixture: ComponentFixture<ShopkeererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopkeererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopkeererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
