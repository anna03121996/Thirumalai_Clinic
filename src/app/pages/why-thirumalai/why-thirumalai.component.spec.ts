import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyThirumalaiComponent } from './why-thirumalai.component';

describe('WhyThirumalaiComponent', () => {
  let component: WhyThirumalaiComponent;
  let fixture: ComponentFixture<WhyThirumalaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyThirumalaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyThirumalaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
