import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestersListComponent } from './investers-list.component';

describe('InvestersListComponent', () => {
  let component: InvestersListComponent;
  let fixture: ComponentFixture<InvestersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
