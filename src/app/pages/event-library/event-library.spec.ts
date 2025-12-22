import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLibrary } from './event-library';

describe('EventLibrary', () => {
  let component: EventLibrary;
  let fixture: ComponentFixture<EventLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventLibrary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventLibrary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
