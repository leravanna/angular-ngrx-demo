import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDetails } from './counter-details';

describe('CounterDetails', () => {
  let component: CounterDetails;
  let fixture: ComponentFixture<CounterDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
