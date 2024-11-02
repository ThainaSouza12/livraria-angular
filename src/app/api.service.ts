import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getLivros(): Observable<any> {
    return this.http.get(`${this.apiUrl}/livros`);
  }

  getLivroById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/livros/${id}`);
  }

  cadastrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuarios`, usuario);
  }

  addToCarrinho(livro: any): Observable<any> {
    const carrinho = JSON.parse(sessionStorage.getItem('carrinho') || '[]');
    carrinho.push(livro);
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
    return of(livro);
  }

  getCarrinho(): Observable<any> {
    const carrinho = JSON.parse(sessionStorage.getItem('carrinho') || '[]');
    return of(carrinho);
  }

  removerDoCarrinho(id: number): Observable<any> {
    const carrinho = JSON.parse(sessionStorage.getItem('carrinho') || '[]');
    const updatedCarrinho = carrinho.filter((item: any) => item.id !== id);
    sessionStorage.setItem('carrinho', JSON.stringify(updatedCarrinho));
    return of(updatedCarrinho);
  }
}
