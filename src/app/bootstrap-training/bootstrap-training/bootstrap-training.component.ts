import { Component, OnInit } from '@angular/core';
import { SamplesService } from "../../services/samples.service";

@Component({
  selector: 'app-bootstrap-training',
  templateUrl: './bootstrap-training.component.html',
  styleUrls: ['./bootstrap-training.component.css']
})
export class BootstrapTrainingComponent implements OnInit {

  constructor(private sample:SamplesService) { 
    sample.Message("COUCOU à vous");
    
  }

  ngOnInit() {
    this.sample.getObservable().subscribe(element => console.log(element));
  }
  SayHello(){
    console.log("HELLOOOOOO");
  }
}
