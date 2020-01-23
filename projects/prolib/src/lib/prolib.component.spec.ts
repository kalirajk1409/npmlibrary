import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProlibComponent } from './prolib.component';

describe('ProlibComponent', () => {
  let component: ProlibComponent;
  let fixture: ComponentFixture<ProlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
