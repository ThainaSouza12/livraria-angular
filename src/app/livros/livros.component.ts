import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  livros: any[] = [];
  searchTerm: string = '';
  selectedAuthor: string = '';
  selectedPriceRange: string = '';
  authors: string[] = [];
  priceRanges = [
    { label: 'Até R$ 30', value: '30' },
    { label: 'R$ 30 a R$ 50', value: '50' },
    { label: 'R$ 50 a R$ 70', value: '70' },
    { label: 'Acima de R$ 70', value: '100' },
  ];
  autors: unknown[] | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getLivros().subscribe(data => {
      this.livros = data;
      this.autors = [...new Set(data.map((livro: { autor: any; }) => livro.autor))]; // Obter autores únicos
    });
  }

  get filteredLivros() {
    return this.livros.filter(livro =>
      livro.titulo.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedAuthor ? livro.autor === this.selectedAuthor : true) &&
      (this.selectedPriceRange ? this.filterByPrice(livro) : true)
    );
  }

  filterByPrice(livro: any) {
    const price = livro.preco;
    if (this.selectedPriceRange === '30') return price <= 30;
    if (this.selectedPriceRange === '50') return price > 30 && price <= 50;
    if (this.selectedPriceRange === '70') return price > 50 && price <= 70;
    if (this.selectedPriceRange === '100') return price > 70;
    return true;
  }

  adicionarCarrinho(livro: any) {
    this.apiService.addToCarrinho(livro).subscribe(() => {
      alert('Livro adicionado ao carrinho!');
    });
  }
}
