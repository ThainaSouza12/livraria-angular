import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-livro-detalhe',
  templateUrl: './livro-detalhe.component.html',
  styleUrls: ['./livro-detalhe.component.css']
})
export class LivroDetalheComponent implements OnInit {
adicionarCarrinho(arg0: any) {
throw new Error('Method not implemented.');
}
  livro: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.apiService.getLivroById(id).subscribe(data => {
      this.livro = data;
    });
  }
}
