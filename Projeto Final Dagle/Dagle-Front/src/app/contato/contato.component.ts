import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(
    private router: Router,
    private alertas: AlertasService,
    public auth: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  enviar(){
    this.alertas.showAlertInfo('Menssagem enviada com sucesso!')
  }

  @ViewChild('nav', {static: true}) minhaNavbar:ElementRef;

  @HostListener('window:scroll') onWindowScroll() {
    if (window.scrollY > 100.0) { 
      this.minhaNavbar.nativeElement.style.backgroundColor = '#0471eeb6';
      this.minhaNavbar.nativeElement.style.height = '9.5%'
      this.minhaNavbar.nativeElement.style.justifyContent = 'space-between';
      this.minhaNavbar.nativeElement.style.transition = '0.5s'
    } else {
      this.minhaNavbar.nativeElement.style.backgroundColor = 'transparent';
      this.minhaNavbar.nativeElement.style.height = '11%'
      this.minhaNavbar.nativeElement.style.justifyContent = 'space-between';
      this.minhaNavbar.nativeElement.style.transition = '0.5s'
      this.minhaNavbar.nativeElement.classList.remove("background-color");
    }
  }

  sair(){
    this.router.navigate(['/home'])
    environment.token = ''
    environment.nome = ''
    environment.email = ''
    environment.id = 0
  }

  logado(){

    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

  participar(){
    this.alertas.showAlertInfo('E-mail cadastrado com sucesso!')
    }

  
}
