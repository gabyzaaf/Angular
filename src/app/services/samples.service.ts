import { Injectable } from '@angular/core';

@Injectable()
export class SamplesService {

  constructor() { }

  Message(message:string){
    console.log("ce message est "+message);
  }

}
