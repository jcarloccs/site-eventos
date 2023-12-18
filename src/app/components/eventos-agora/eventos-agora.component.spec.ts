import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosAgoraComponent } from './eventos-agora.component';

describe('EventosAgoraComponent', () => {
  let component: EventosAgoraComponent;
  let fixture: ComponentFixture<EventosAgoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosAgoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventosAgoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
