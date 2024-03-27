import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionIconsComponent } from './reaction-icons.component';

describe('ReactionIconsComponent', () => {
  let component: ReactionIconsComponent;
  let fixture: ComponentFixture<ReactionIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactionIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactionIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
