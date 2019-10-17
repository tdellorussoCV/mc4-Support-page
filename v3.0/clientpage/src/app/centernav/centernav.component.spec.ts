import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenternavComponent } from './centernav.component';

describe('CenternavComponent', () => {
  let component: CenternavComponent;
  let fixture: ComponentFixture<CenternavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenternavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenternavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
