import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catbiox } from './catbiox';

describe('Catbiox', () => {
  let component: Catbiox;
  let fixture: ComponentFixture<Catbiox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catbiox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catbiox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
