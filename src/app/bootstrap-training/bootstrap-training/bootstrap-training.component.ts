import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-training',
  templateUrl: './bootstrap-training.component.html',
  styleUrls: ['./bootstrap-training.component.css']
})
export class BootstrapTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  SayHello(){
    console.log("HELLOOOOOO");
  }
}
