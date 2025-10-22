import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

const firebaseConfig = {
  "projectId":"<projectId>",
  "appId":"<appId>",
  "storageBucket":"<storageBucket>",
  "apiKey":"<apiKey>",
  "authDomain":"<authDomain>",
  "messagingSenderId":"<messagingSenderId>"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp(firebaseConfig)), 
    provideFirestore(() => getFirestore()),
    provideAnimations(),
    provideToastr()
  ]
};
