
import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css'],

})

export class StarComponent implements OnChanges{
   
    @Input() rating: number;
    starWidth:number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    onClizck():void{
        this.ratingClicked.emit("The rating emit is "+this.rating);
    }
}