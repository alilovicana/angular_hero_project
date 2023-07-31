import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  age = ['New', 'Second Hand', 'Refabrished'];
  type = ['Fruit', 'Car', 'Animal'];
  constructor() {}

  ngOnInit(): void {}
}
