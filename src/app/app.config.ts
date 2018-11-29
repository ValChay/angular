import {InjectionToken} from '@angular/core';

export const SERVEUR_URL = 'http//dawan.fr/';
/*
// le token va enregistré le service et le positioné dans la structure de dépendance
*/

export const SERVEUR_URL_TOKEN = new InjectionToken('app.config');

export const configFactory = function (username: string) {
  return {
    username: 'Val',
    password: 'dawan'
  };
};
