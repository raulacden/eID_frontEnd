import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  log(msg: any) {
    console.log(JSON.stringify(msg));
}
}
