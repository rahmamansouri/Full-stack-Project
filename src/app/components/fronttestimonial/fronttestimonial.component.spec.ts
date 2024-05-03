import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FronttestimonialComponent } from './fronttestimonial.component';

describe('FronttestimonialComponent', () => {
  let component: FronttestimonialComponent;
  let fixture: ComponentFixture<FronttestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FronttestimonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FronttestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
