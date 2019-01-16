import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCategoryListingComponent } from './skill-category-listing.component';

describe('SkillCategoryListingComponent', () => {
  let component: SkillCategoryListingComponent;
  let fixture: ComponentFixture<SkillCategoryListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillCategoryListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCategoryListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
