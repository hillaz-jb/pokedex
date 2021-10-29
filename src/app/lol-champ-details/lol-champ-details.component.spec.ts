import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LolChampDetailsComponent } from './lol-champ-details.component';

describe('LolChampDetailsComponent', () => {
  let component: LolChampDetailsComponent;
  let fixture: ComponentFixture<LolChampDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LolChampDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LolChampDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
