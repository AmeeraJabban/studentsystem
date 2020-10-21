import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-route',
  templateUrl: './simple-route.component.html',
  styleUrls: ['./simple-route.component.css']
})
export class SimpleRouteComponent implements OnInit {
  name = "Anas";
  constructor() { }

  ngOnInit(): void {
  }

}
