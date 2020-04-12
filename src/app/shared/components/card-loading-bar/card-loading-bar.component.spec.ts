import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLoadingBarComponent } from './card-loading-bar.component';

describe('CardLoadingBarComponent', () => {
  let component: CardLoadingBarComponent;
  let fixture: ComponentFixture<CardLoadingBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLoadingBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLoadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
