import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapTrainingComponent } from './bootstrap-training.component';

describe('BootstrapTrainingComponent', () => {
  let component: BootstrapTrainingComponent;
  let fixture: ComponentFixture<BootstrapTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
