import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  carrinho: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCarrinho().subscribe(data => {
      this.carrinho = data;
    });
  }

  removerDoCarrinho(livro: any) {
    this.apiService.removerDoCarrinho(livro.id).subscribe(() => {
      this.carrinho = this.carrinho.filter(item => item.id !== livro.id);
      alert('Livro removido do carrinho!');
    });
  }
}
