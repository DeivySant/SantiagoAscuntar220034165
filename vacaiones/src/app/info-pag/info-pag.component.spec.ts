import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPagComponent } from './info-pag.component';

describe('InfoPagComponent', () => {
  let component: InfoPagComponent;
  let fixture: ComponentFixture<InfoPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
