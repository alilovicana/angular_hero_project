import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClient } from '@angular/common/http';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular tour of hero';
  displayedColumns: string[] = ['id','name', 'price', 'type', 'selectedDate'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, private http: HttpClient) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width:'30%'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const url = 'http://localhost:3000/products'; // Pretpostavka da su podaci u db.json na /db ruti
    this.http.get<any[]>(url).subscribe(
      (data) => {
         this.dataSource = new MatTableDataSource(data);
         this.dataSource.paginator=this.paginator;
         this.dataSource.sort=this.sort
      },
      (error) => {
        console.error('Greška pri dohvaćanju podataka:', error);
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


