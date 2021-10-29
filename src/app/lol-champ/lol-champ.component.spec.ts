import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LolChampComponent } from './lol-champ.component';

describe('LolChampComponent', () => {
  let component: LolChampComponent;
  let fixture: ComponentFixture<LolChampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LolChampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LolChampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
