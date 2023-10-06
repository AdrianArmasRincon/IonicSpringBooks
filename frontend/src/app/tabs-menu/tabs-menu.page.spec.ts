import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsMenuPage } from './tabs-menu.page';

describe('TabsMenuPage', () => {
  let component: TabsMenuPage;
  let fixture: ComponentFixture<TabsMenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabsMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
