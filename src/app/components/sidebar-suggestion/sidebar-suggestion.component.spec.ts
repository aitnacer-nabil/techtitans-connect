import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSuggestionComponent } from './sidebar-suggestion.component';

describe('SidebarSuggestionComponent', () => {
  let component: SidebarSuggestionComponent;
  let fixture: ComponentFixture<SidebarSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarSuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
