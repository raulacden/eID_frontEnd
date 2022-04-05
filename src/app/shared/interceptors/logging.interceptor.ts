import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { MessagesService } from '../services/messages.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private messenger: MessagesService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;
    
    return next.handle(req)
      .pipe(
        tap({          
          next: (event) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),          
          error: (error) => (ok = 'failed')
        }),
        
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} ${req.urlWithParams} ${ok} in ${elapsed} ms.`;
          
          this.messenger.log(msg);
        })
      );
  }
}
