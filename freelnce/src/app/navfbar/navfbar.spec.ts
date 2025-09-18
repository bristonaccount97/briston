import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navfbar } from './navfbar';

describe('Navfbar', () => {
  let component: Navfbar;
  let fixture: ComponentFixture<Navfbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navfbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navfbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
