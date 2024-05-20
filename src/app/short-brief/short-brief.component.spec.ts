import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBriefComponent } from './short-brief.component';

describe('ShortBriefComponent', () => {
  let component: ShortBriefComponent;
  let fixture: ComponentFixture<ShortBriefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortBriefComponent]
    });
    fixture = TestBed.createComponent(ShortBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
