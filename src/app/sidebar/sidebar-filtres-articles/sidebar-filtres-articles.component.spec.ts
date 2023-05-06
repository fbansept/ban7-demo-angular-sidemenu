import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFiltresArticlesComponent } from './sidebar-filtres-articles.component';

describe('SidebarFiltresArticlesComponent', () => {
  let component: SidebarFiltresArticlesComponent;
  let fixture: ComponentFixture<SidebarFiltresArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarFiltresArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarFiltresArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
