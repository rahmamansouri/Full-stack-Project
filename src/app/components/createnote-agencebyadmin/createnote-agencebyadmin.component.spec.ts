import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenoteAgencebyadminComponent } from './createnote-agencebyadmin.component';

describe('CreatenoteAgencebyadminComponent', () => {
  let component: CreatenoteAgencebyadminComponent;
  let fixture: ComponentFixture<CreatenoteAgencebyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenoteAgencebyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenoteAgencebyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
