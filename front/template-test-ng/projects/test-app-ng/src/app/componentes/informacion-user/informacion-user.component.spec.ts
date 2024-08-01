import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionUserComponent } from './informacion-user.component';

describe('InformacionUserComponent', () => {
  let component: InformacionUserComponent;
  let fixture: ComponentFixture<InformacionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
