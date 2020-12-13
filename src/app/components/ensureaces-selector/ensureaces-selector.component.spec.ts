import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsureacesSelectorComponent } from './ensureaces-selector.component';

describe('EnsureacesSelectorComponent', () => {
  let component: EnsureacesSelectorComponent;
  let fixture: ComponentFixture<EnsureacesSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsureacesSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsureacesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
