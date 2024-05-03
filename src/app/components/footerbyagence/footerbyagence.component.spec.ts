import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterbyagenceComponent } from './footerbyagence.component';

describe('FooterbyagenceComponent', () => {
  let component: FooterbyagenceComponent;
  let fixture: ComponentFixture<FooterbyagenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterbyagenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterbyagenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
