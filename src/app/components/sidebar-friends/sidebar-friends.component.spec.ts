import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFriendsComponent } from './sidebar-friends.component';

describe('SidebarFriendsComponent', () => {
  let component: SidebarFriendsComponent;
  let fixture: ComponentFixture<SidebarFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarFriendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
