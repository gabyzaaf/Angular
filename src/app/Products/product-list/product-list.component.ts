import { Component, OnInit } from '@angular/core';
import { Ialbum } from "../album";

@Component({
  selector: 'product-list',
  templateUrl: '../product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 

  titlePage:string = "Hello every body";
  sample:string = ""
  imageWidth:number = 50;
  imageMargin:number = 2;
  showImage:boolean = false;
  filterBy:string= 'Cart';
  filteredAlbum:Ialbum[];

  _listFilter : string;

  get listFilter():string{
    return this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter = value;
    this.filteredAlbum = this._listFilter ? this.performFilter(this.listFilter) : this.data;
  }

  data:Ialbum[] = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "http://placehold.it/600/92c952",
    "thumbnailUrl": "http://placehold.it/150/92c952",
    "star":3
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "http://placehold.it/600/771796",
    "thumbnailUrl": "http://placehold.it/150/771796",
    "star":2
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "http://placehold.it/600/24f355",
    "thumbnailUrl": "http://placehold.it/150/24f355",
    "star":1
  }]
  
  toggleImage():void{
    this.showImage = !this.showImage;
  }
  constructor() { 
    this.filteredAlbum = this.data;
    console.log("In productList component constructor")
  }

  ngOnInit() {

  }

  performFilter(value:string){
    value = value.toLocaleLowerCase();
    return this.data.filter( (album:Ialbum) => 
        album.title.toLowerCase().indexOf(value) !== -1);
  }

  onRaitingClicked(message:string):void{
    this.titlePage = message;
  }
}
