import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTecnicaComponent } from './info-tecnica.component';

describe('InfoTecnicaComponent', () => {
  let component: InfoTecnicaComponent;
  let fixture: ComponentFixture<InfoTecnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoTecnicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTecnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
