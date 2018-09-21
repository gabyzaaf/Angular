import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class SamplesService {

  constructor(private http:HttpClient) { 
  }

  Message(message:string){
    console.log("ce message est "+message);    
  }

  public getObservable(){
    return this.http.get("assets/data.json");
  }

}
