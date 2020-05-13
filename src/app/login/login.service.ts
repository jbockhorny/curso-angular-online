// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // API_URL = environment.API_URL;

  constructor(
    // private http: HttpClient,
  ) { }

  logar(email: string, password: string) {
    // return this.http.post(`${this.API_URL}/auth`);

    if (email === 'jbockhorny@gmail.com' && password === 'Joanilza123') {

      return of({
        usuario: {
          nome: 'Joanilza',
          sobrenome: 'Bockhorny',
          email: 'jbockhorny@gmail.com'
        },
        tokem: 'wenfFEBENr3Y5285urnurf8015FRFEw'
      }).pipe(
        delay(3000)
      );
    }
    return timer(3000).pipe(
      mergeMap(() => throwError('Usuário ou senha incorretos.'))
    );
  }
}