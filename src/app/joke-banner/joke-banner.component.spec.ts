import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeBannerComponent } from './joke-banner.component';

describe('JokeBannerComponent', () => {
  let component: JokeBannerComponent;
  let fixture: ComponentFixture<JokeBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
