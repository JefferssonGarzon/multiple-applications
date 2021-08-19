import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifcarPersonaComponent } from './modifcar-persona.component';

describe('ModifcarPersonaComponent', () => {
  let component: ModifcarPersonaComponent;
  let fixture: ComponentFixture<ModifcarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifcarPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifcarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
