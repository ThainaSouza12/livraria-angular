import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './livros/livros.component';
import { LivroDetalheComponent } from './livro-detalhe/livro-detalhe.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/livros', pathMatch: 'full' },
  { path: 'livros', component: LivrosComponent },
  { path: 'livro/:id', component: LivroDetalheComponent },
  { path: 'carrinho', component: CarrinhoComponent, canActivate: [AuthGuard] },
  { path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
