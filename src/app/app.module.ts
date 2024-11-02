import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importando o FormsModule
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';



@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent // Adicione todos os componentes aqui
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicionando o FormsModule para usar ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


