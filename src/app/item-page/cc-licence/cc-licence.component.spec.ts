import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcLicenceComponent } from './cc-licence.component';

describe('CcLicenceComponent', () => {
  let component: CcLicenceComponent;
  let fixture: ComponentFixture<CcLicenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcLicenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
