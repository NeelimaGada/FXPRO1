import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticulardataComponent } from './particulardata.component';

describe('ParticulardataComponent', () => {
  let component: ParticulardataComponent;
  let fixture: ComponentFixture<ParticulardataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticulardataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticulardataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
