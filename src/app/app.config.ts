import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRouting } from './app.routing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(appRouting), provideAnimations(),
    providePrimeNG({
      theme:{
        preset:Lara,
        options:{
          darkModeSelector:'dark-mode'
        }
      },
      ripple:true
    }),
    provideHttpClient(withFetch())
  ]
};
