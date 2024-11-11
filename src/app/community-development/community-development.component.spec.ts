import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityDevelopmentComponent } from './community-development.component';

describe('CommunityDevelopmentComponent', () => {
  let component: CommunityDevelopmentComponent;
  let fixture: ComponentFixture<CommunityDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityDevelopmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
