// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

import { AuthService } from '../shared/services/auth/auth.service';
import { LoginResponse } from './login.interface';

// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // API_URL = environment.API_URL;

  constructor(
    private authService: AuthService,
    // private http: HttpClient,
  ) { }

  logar(email: string, password: string): Observable<LoginResponse> {
    // return this.http.post(`${this.API_URL}/auth`);

    if (email === 'jbockhorny@gmail.com' && password === 'Joanilza123') {

      return of({
        usuario: {
          nome: 'Joanilza',
          sobrenome: 'Bockhorny',
          email: 'jbockhorny@gmail.com'
        },
        token: 'wenfFEBENr3Y5285urnurf8015FRFEw'
      }).pipe(
        delay(2000),
        tap(response => {
         this.authService.setUsuario(response.usuario);
         this.authService.setToken(response.token);
        })
      );
    }
    return timer(3000).pipe(
      mergeMap(() => throwError('Usuário ou senha incorretos.'))
    );
  }
}
