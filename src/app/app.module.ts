import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

import { AuthService } from './shared/services/auth.service';

import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { LoggingInterceptor } from './shared/interceptors/logging.interceptor';
import { RoutesInterceptor } from './shared/interceptors/routes.interceptor';

import { AuthGuard } from './shared/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextPipe } from './shared/text.pipe';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressModalComponent } from './address-modal/address-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    TextPipe,
    AddressModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    NgbActiveModal,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RoutesInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddressModalComponent]
})
export class AppModule { }
