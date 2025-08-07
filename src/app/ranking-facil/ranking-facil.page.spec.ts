import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RankingFacilPage } from './ranking-facil.page';

describe('RankingFacilPage', () => {
  let component: RankingFacilPage;
  let fixture: ComponentFixture<RankingFacilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingFacilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
