import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServicosComponent } from './servicos/servicos.component';

const routes: Routes = [

  {path:'',redirectTo:'login',pathMatch:'full'},

{path:'login',component:LoginComponent},
{path:'cadastrar',component:CadastrarComponent},

{path:'home',component:HomeComponent},
{path:'categoria',component:CategoriaComponent},
{path:'contato',component:ContatoComponent},
{path:'serviços',component:ServicosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
