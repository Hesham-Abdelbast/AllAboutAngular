import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { HandelErrorInterceptor } from '../Interceptors/handel-error-interceptor';
import { BaseServiceService } from '../Services/base-service.service';
import { LogSuccessReq } from '../Interceptors/log-success-req-interceptor';
import { AppTranslateModule } from './app-translate/app-translate.module';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideHttpClient(withInterceptorsFromDi()), // for enable use HttpClient
    BaseServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: HandelErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LogSuccessReq, multi: true },

    importProvidersFrom(HttpClient),
    importProvidersFrom(AppTranslateModule.forRoot()),
  ]
};
