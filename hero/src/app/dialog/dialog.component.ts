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
  onSubmit() {
    console.log(this.dialog);
  }
  dialog: {
    name: string;
    price: string;
    type: string;
    selectedDate: Date| null;
    selectedAge: string;
  } = { name: '', price: '', type: '', selectedDate: null, selectedAge: '' };

  ngOnInit(): void {
    console.log(this.dialog.name);
  }
}
