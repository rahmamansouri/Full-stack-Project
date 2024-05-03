import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenoteAgencebyagenceComponent } from './createnote-agencebyagence.component';

describe('CreatenoteAgencebyagenceComponent', () => {
  let component: CreatenoteAgencebyagenceComponent;
  let fixture: ComponentFixture<CreatenoteAgencebyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenoteAgencebyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenoteAgencebyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
