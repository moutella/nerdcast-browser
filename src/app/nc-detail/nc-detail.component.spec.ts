import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcDetailComponent } from './nc-detail.component';

describe('NcDetailComponent', () => {
  let component: NcDetailComponent;
  let fixture: ComponentFixture<NcDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
