import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenoteHotelbyadminComponent } from './createnote-hotelbyadmin.component';

describe('CreatenoteHotelbyadminComponent', () => {
  let component: CreatenoteHotelbyadminComponent;
  let fixture: ComponentFixture<CreatenoteHotelbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenoteHotelbyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenoteHotelbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
