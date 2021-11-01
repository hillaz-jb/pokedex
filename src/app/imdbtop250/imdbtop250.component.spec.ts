import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMDBTop250Component } from './imdbtop250.component';

describe('IMDBTop250Component', () => {
  let component: IMDBTop250Component;
  let fixture: ComponentFixture<IMDBTop250Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMDBTop250Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IMDBTop250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
