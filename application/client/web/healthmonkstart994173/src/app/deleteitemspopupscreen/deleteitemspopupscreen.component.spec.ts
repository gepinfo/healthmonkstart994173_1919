import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteitemspopupscreenComponent } from './deleteitemspopupscreen.component';

describe('DeleteitemspopupscreenComponent', () => {
  let component: DeleteitemspopupscreenComponent;
  let fixture: ComponentFixture<DeleteitemspopupscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteitemspopupscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteitemspopupscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});