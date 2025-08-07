import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RankingDificilPage } from './ranking-dificil.page';

describe('RankingDificilPage', () => {
  let component: RankingDificilPage;
  let fixture: ComponentFixture<RankingDificilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingDificilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
