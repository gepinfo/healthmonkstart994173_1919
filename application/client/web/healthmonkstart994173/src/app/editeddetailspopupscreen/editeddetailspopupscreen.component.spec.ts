import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeddetailspopupscreenComponent } from './editeddetailspopupscreen.component';

describe('EditeddetailspopupscreenComponent', () => {
  let component: EditeddetailspopupscreenComponent;
  let fixture: ComponentFixture<EditeddetailspopupscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeddetailspopupscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeddetailspopupscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});