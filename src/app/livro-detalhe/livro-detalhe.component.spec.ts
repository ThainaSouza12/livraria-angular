import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroDetalheComponent } from './livro-detalhe.component';

describe('LivroDetalheComponent', () => {
  let component: LivroDetalheComponent;
  let fixture: ComponentFixture<LivroDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
