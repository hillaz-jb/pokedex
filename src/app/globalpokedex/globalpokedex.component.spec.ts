import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalpokedexComponent } from './globalpokedex.component';

describe('GlobalpokedexComponent', () => {
  let component: GlobalpokedexComponent;
  let fixture: ComponentFixture<GlobalpokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalpokedexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalpokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
