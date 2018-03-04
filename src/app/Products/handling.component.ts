import { Component, OnInit } from '@angular/core';
import { Ialbum } from "./album";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-handling',
  templateUrl: './handling.component.html',
  styleUrls: ['./handling.component.css']
})
export class HandlingComponent implements OnInit {

  pageTitle:string;
  product:Ialbum;
  id:string;
  constructor(private _route:ActivatedRoute,
  private _router:Router) {
    
   }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get("id");
    this.product = {
      "albumId":id,
      "id":id,
      "title":"Sample",
      "url":"http://ZAZA.com",
      "thumbnailUrl":"LiitleURL",
      "star":3.2
    };
  }

  onBack():void{
    this._router.navigate(['/products']);
  }

}