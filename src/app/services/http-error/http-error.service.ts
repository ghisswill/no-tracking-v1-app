import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor() { }

  formatError(err: HttpErrorResponse): string {
    return this.httErrorFormatter(err);
  }

  private httErrorFormatter(err: HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      // Une erreur coté client  ou reseau s'est produite
      errorMessage = `Une erreur s'est produite : ${err.error.message}`;
    } else {
      // Le backend a renvoyé un code reponse infructueux
      errorMessage = `Le serveur a renvoyé le code : ${err.status}, le message d'erreur est : ${err.statusText}`;
    }
    return errorMessage;
  }
}
