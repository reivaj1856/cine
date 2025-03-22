import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'cine-aeea8',
        appId: '1:484163825381:web:e63823e36960458a2c2e0c',
        storageBucket: 'cine-aeea8.firebasestorage.app',
        apiKey: 'AIzaSyB8PynzwNCeixS8eAEexpzNmB5uuUDUdaA',
        authDomain: 'cine-aeea8.firebaseapp.com',
        messagingSenderId: '484163825381',
      })
    ),
    provideAuth(() => getAuth()),
  ],
};
