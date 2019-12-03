import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  printtoconsole(arg){
    console.log(arg);
  }
}
