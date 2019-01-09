import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlclubsiteComponent } from './nlclubsite.component';

describe('NlclubsiteComponent', () => {
  let component: NlclubsiteComponent;
  let fixture: ComponentFixture<NlclubsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlclubsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlclubsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
