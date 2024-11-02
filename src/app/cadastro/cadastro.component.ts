import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario = { nome: '', email: '', senha: '' };

  constructor(private apiService: ApiService, private router: Router) { }

  cadastrar() {
    this.apiService.cadastrarUsuario(this.usuario).subscribe(() => {
      alert('Usuário cadastrado com sucesso!');
      this.router.navigate(['/']);
    });
  }
}
