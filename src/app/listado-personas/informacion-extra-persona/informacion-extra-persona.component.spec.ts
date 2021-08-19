import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionExtraPersonaComponent } from './informacion-extra-persona.component';

describe('InformacionExtraPersonaComponent', () => {
  let component: InformacionExtraPersonaComponent;
  let fixture: ComponentFixture<InformacionExtraPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionExtraPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionExtraPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
