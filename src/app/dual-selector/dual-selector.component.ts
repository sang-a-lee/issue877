import { Component, OnInit } from "@angular/core";
import { sample1 } from "./data.js";

@Component({
  selector: "app-dual-selector",
  templateUrl: "./dual-selector.component.html",
  styleUrls: ["./dual-selector.component.css"]
})
export class DualSelectorComponent implements OnInit {
  
  constructor() {
    console.log(sample1);
  }

  ngOnInit() {}
}
