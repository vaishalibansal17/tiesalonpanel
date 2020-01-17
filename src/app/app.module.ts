import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpRequestService } from './shared/service/http-request.service';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ApiPrefixInterceptor } from './shared/interceptor/api.prefix.interceptor';
import { OfflineInterceptor } from './shared/interceptor/offline.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { LoaderInterceptor } from './shared/interceptor/loader.interceptor';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ErrorInterceptor } from './shared/interceptor/error.interceptor';
import { Helper } from './shared/service/helper.service';
import { TranslateService } from './shared/service/translate.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ApplicationpipeModule } from './shared/module/applicationpipe/applicationpipe.module';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('ua');
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlimLoadingBarModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      countDuplicates: true,
      maxOpened: 3,
      autoDismiss: true
    }),
    ApplicationpipeModule
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpRequestService, Helper, TranslateService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: OfflineInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
