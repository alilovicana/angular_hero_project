import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  myForm!: FormGroup;
  age = ['New', 'Second Hand', 'Refabrished'];
  type = ['Fruit', 'Car', 'Animal'];
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}
  onSubmit() {
    const url = 'http://localhost:3000/products';
    const formData = this.myForm.value;
    this.http.post(url, formData).subscribe(
      (response) => {
        console.log('Podaci su spremljeni u db.json:', response);
      },
      (error) => {
        console.error('Greška pri spremanju podataka:', error);
      }
    );
    this.myForm.reset();
  }
  dialog: {
    name: string;
    price: string;
    type: string;
    selectedDate: Date | null;
    selectedAge: string;
  } = { name: '', price: '', type: '', selectedDate: null, selectedAge: '' };

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      type: [''],
      selectedDate: [''],
      selectedAge: [''],
    });
  }
}
