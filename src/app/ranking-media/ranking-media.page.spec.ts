import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RankingMediaPage } from './ranking-media.page';

describe('RankingMediaPage', () => {
  let component: RankingMediaPage;
  let fixture: ComponentFixture<RankingMediaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingMediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
