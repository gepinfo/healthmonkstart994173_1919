import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavemealpopupscreenComponent } from './savemealpopupscreen.component';

describe('SavemealpopupscreenComponent', () => {
  let component: SavemealpopupscreenComponent;
  let fixture: ComponentFixture<SavemealpopupscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavemealpopupscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavemealpopupscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});