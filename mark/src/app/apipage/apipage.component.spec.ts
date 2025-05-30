import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApipageComponent } from './apipage.component';

describe('ApipageComponent', () => {
  let component: ApipageComponent;
  let fixture: ComponentFixture<ApipageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApipageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApipageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
