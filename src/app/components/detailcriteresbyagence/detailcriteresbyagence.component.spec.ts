import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcriteresbyagenceComponent } from './detailcriteresbyagence.component';

describe('DetailcriteresbyagenceComponent', () => {
  let component: DetailcriteresbyagenceComponent;
  let fixture: ComponentFixture<DetailcriteresbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcriteresbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcriteresbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
